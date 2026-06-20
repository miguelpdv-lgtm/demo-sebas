import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import * as THREE from 'three';

const ASCII_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(){}[]<>;:,._-+=!@#$%^&*|\\/\"'`~?";
const generateCode = (width: number, height: number): string => {
  let text = "";
  for (let i = 0; i < width * height; i++) {
    text += ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
  }
  let out = "";
  for (let i = 0; i < height; i++) {
    out += text.substring(i * width, (i + 1) * width) + "\n";
  }
  return out;
};

export type StreamCard = {
  id?: number | string;
  title: string;
  description: string;
  image: string;
};

type ScannerCardStreamProps = {
  initialSpeed?: number;
  direction?: -1 | 1;
  cards: StreamCard[];
  repeat?: number;
  cardGap?: number;
  friction?: number;
  scanEffect?: 'clip' | 'scramble';
};

export default function ScannerCardStream({
  initialSpeed = 100,
  direction = -1,
  cards: inputCards,
  repeat = 6,
  cardGap = 60,
  friction = 0.95,
  scanEffect = 'scramble',
}: ScannerCardStreamProps) {
  const [speed, setSpeed] = useState(initialSpeed);
  const [isPaused, setIsPaused] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  
  const cards = useMemo(() => {
    const totalCards = inputCards.length * repeat;
    return Array.from({ length: totalCards }, (_, i) => {
      const originalCard = inputCards[i % inputCards.length];
      return {
        ...originalCard,
        internalId: i,
        ascii: generateCode(Math.floor(350 / 6.5), Math.floor(450 / 13)),
      };
    });
  }, [inputCards, repeat]);

  const cardLineRef = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const scannerCanvasRef = useRef<HTMLCanvasElement>(null);
  const originalAscii = useRef(new Map<number, string>());

  const cardStreamState = useRef({
    position: 0,
    velocity: initialSpeed,
    direction: direction,
    isDragging: false,
    lastMouseX: 0,
    lastTime: performance.now(),
    cardLineWidth: 0,
    friction: friction,
    minVelocity: 30,
  });

  const scannerState = useRef({ isScanning: false });

  useEffect(() => {
    const cardLine = cardLineRef.current;
    const particleCanvas = particleCanvasRef.current;
    const scannerCanvas = scannerCanvasRef.current;

    if (!cardLine || !particleCanvas || !scannerCanvas) return;
    
    // Set total width initially
    cardStreamState.current.cardLineWidth = (350 + cardGap) * inputCards.length;

    cards.forEach(card => originalAscii.current.set(card.internalId, card.ascii));
    let animationFrameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, 225, -225, 1, 1000);
    camera.position.z = 100;
    const renderer = new THREE.WebGLRenderer({ canvas: particleCanvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, 450);
    renderer.setClearColor(0x000000, 0);

    const particleCount = 400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);
    const alphas = new Float32Array(particleCount);
    
    const texCanvas = document.createElement("canvas");
    texCanvas.width = 100; texCanvas.height = 100;
    const texCtx = texCanvas.getContext("2d")!;
    const half = 50;
    const gradient = texCtx.createRadialGradient(half, half, 0, half, half, half);
    gradient.addColorStop(0.025, "#fff");
    gradient.addColorStop(0.1, `hsl(217, 61%, 33%)`);
    gradient.addColorStop(0.25, `hsl(217, 64%, 6%)`);
    gradient.addColorStop(1, "transparent");
    texCtx.fillStyle = gradient;
    texCtx.arc(half, half, half, 0, Math.PI * 2);
    texCtx.fill();
    const texture = new THREE.CanvasTexture(texCanvas);

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * window.innerWidth * 2;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 450;
        velocities[i] = Math.random() * 60 + 30;
        alphas[i] = (Math.random() * 8 + 2) / 10;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: { pointTexture: { value: texture } },
      vertexShader: `attribute float alpha; varying float vAlpha; void main() { vAlpha = alpha; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_PointSize = 15.0; gl_Position = projectionMatrix * mvPosition; }`,
      fragmentShader: `uniform sampler2D pointTexture; varying float vAlpha; void main() { gl_FragColor = vec4(1.0, 1.0, 1.0, vAlpha) * texture2D(pointTexture, gl_PointCoord); }`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, vertexColors: false,
    });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const ctx = scannerCanvas.getContext('2d')!;
    const updateCanvasSize = () => {
      scannerCanvas.width = window.innerWidth;
      scannerCanvas.height = 450;
      renderer.setSize(window.innerWidth, 450);
      camera.left = -window.innerWidth / 2;
      camera.right = window.innerWidth / 2;
      camera.updateProjectionMatrix();
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    let scannerParticles: any[] = [];
    const baseMaxParticles = 600;
    let currentMaxParticles = baseMaxParticles;
    const scanTargetMaxParticles = 1500;

    const createScannerParticle = () => ({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 3, 
      y: Math.random() * 450, 
      vx: Math.random() * 0.8 + 0.2, 
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 0.6 + 0.4, 
      alpha: Math.random() * 0.4 + 0.6, 
      life: 1.0, 
      decay: Math.random() * 0.02 + 0.005,
    });
    for (let i = 0; i < baseMaxParticles; i++) scannerParticles.push(createScannerParticle());
    
    const runScrambleEffect = (element: HTMLElement, cardId: number) => {
        if (element.dataset.scrambling === 'true') return;
        element.dataset.scrambling = 'true';
        const originalText = originalAscii.current.get(cardId) || '';
        let scrambleCount = 0;
        const maxScrambles = 10;
        const interval = setInterval(() => {
            element.textContent = generateCode(Math.floor(350 / 6.5), Math.floor(450 / 13));
            scrambleCount++;
            if (scrambleCount >= maxScrambles) {
                clearInterval(interval);
                element.textContent = originalText;
                delete element.dataset.scrambling;
            }
        }, 30);
    };

    const updateCardEffects = () => {
      const scannerX = window.innerWidth / 2;
      const scannerWidth = 8;
      const scannerLeft = scannerX - scannerWidth / 2;
      const scannerRight = scannerX + scannerWidth / 2;
      let anyCardIsScanning = false;

      cardLine.querySelectorAll<HTMLElement>(".card-wrapper").forEach((wrapper, index) => {
        const rect = wrapper.getBoundingClientRect();
        const normalCard = wrapper.querySelector<HTMLElement>(".card-normal")!;
        const asciiCard = wrapper.querySelector<HTMLElement>(".card-ascii")!;
        const asciiContent = asciiCard.querySelector<HTMLElement>('pre')!;
        
        if (rect.left < scannerRight && rect.right > scannerLeft) {
          anyCardIsScanning = true;
          if (scanEffect === 'scramble' && wrapper.dataset.scanned !== 'true') {
              runScrambleEffect(asciiContent, cards[index].internalId);
          }
          wrapper.dataset.scanned = 'true';
          const intersectLeft = Math.max(scannerLeft - rect.left, 0);
          const intersectRight = Math.min(scannerRight - rect.left, rect.width);
          normalCard.style.setProperty("--clip-right", `${(intersectLeft / rect.width) * 100}%`);
          asciiCard.style.setProperty("--clip-left", `${(intersectRight / rect.width) * 100}%`);
        } else {
          delete wrapper.dataset.scanned;
          if (rect.right < scannerLeft) {
            normalCard.style.setProperty("--clip-right", "100%");
            asciiCard.style.setProperty("--clip-left", "100%");
          } else {
            normalCard.style.setProperty("--clip-right", "0%");
            asciiCard.style.setProperty("--clip-left", "0%");
          }
        }
      });
      setIsScanning(anyCardIsScanning);
      scannerState.current.isScanning = anyCardIsScanning;
    };
    
    // Interaction Handlers
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      cardStreamState.current.isDragging = true;
      cardStreamState.current.velocity = 0;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      cardStreamState.current.lastMouseX = clientX;
      cardLine.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!cardStreamState.current.isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const deltaX = clientX - cardStreamState.current.lastMouseX;
      cardStreamState.current.position += deltaX;
      cardStreamState.current.lastMouseX = clientX;
      cardStreamState.current.velocity = Math.abs(deltaX) * 2;
      cardStreamState.current.direction = deltaX > 0 ? 1 : -1;
    };

    const handleMouseUp = () => {
      if (cardStreamState.current.isDragging) {
        cardStreamState.current.isDragging = false;
        cardLine.style.cursor = "grab";
        // Reset velocity to a minimum so it keeps moving
        if (cardStreamState.current.velocity < cardStreamState.current.minVelocity) {
           cardStreamState.current.velocity = initialSpeed;
        } else {
           cardStreamState.current.velocity = Math.max(initialSpeed, cardStreamState.current.velocity);
        }
      }
    };

    cardLine.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    cardLine.addEventListener("touchstart", handleMouseDown, { passive: true });
    window.addEventListener("touchmove", handleMouseMove, { passive: true });
    window.addEventListener("touchend", handleMouseUp);

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - cardStreamState.current.lastTime) / 1000;
      cardStreamState.current.lastTime = currentTime;

      if (!isPaused && !cardStreamState.current.isDragging) {
        if (cardStreamState.current.velocity > cardStreamState.current.minVelocity) {
            cardStreamState.current.velocity *= cardStreamState.current.friction;
        } else {
            cardStreamState.current.velocity = cardStreamState.current.minVelocity;
        }
        cardStreamState.current.position += cardStreamState.current.velocity * cardStreamState.current.direction * deltaTime;
      }
      
      const { position, cardLineWidth } = cardStreamState.current;
      const totalWidth = (350 + cardGap) * cards.length;
      
      // Endless loop wrapping
      if (position < -totalWidth / 2) {
        cardStreamState.current.position += totalWidth / 2;
      } else if (position > 0) {
        cardStreamState.current.position -= totalWidth / 2;
      }

      cardLine.style.transform = `translateX(${cardStreamState.current.position}px)`;
      updateCardEffects();

      const time = currentTime * 0.001;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i] * 0.016;
        if (positions[i * 3] > window.innerWidth / 2 + 100) positions[i * 3] = -window.innerWidth / 2 - 100;
        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.5;
        alphas[i] = Math.max(0.1, Math.min(1, alphas[i] + (Math.random() - 0.5) * 0.05));
      }
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.alpha.needsUpdate = true;
      renderer.render(scene, camera);

      ctx.clearRect(0, 0, window.innerWidth, 450);
      const targetCount = scannerState.current.isScanning ? scanTargetMaxParticles : baseMaxParticles;
      currentMaxParticles += (targetCount - currentMaxParticles) * 0.05;
      
      while (scannerParticles.length < currentMaxParticles) scannerParticles.push(createScannerParticle());
      while (scannerParticles.length > currentMaxParticles) scannerParticles.pop();
      
      scannerParticles.forEach(p => {
        p.x += p.vx; 
        p.y += p.vy; 
        p.life -= p.decay;
        if (p.life <= 0 || p.x > window.innerWidth) Object.assign(p, createScannerParticle());
        ctx.globalAlpha = p.alpha * p.life; 
        ctx.fillStyle = "white";
        ctx.beginPath(); 
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); 
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cardLine?.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      cardLine?.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, [isPaused, cards, cardGap, friction, scanEffect, initialSpeed]);

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden bg-black/40 border-y border-white/5">
      <style>{`
        @keyframes glitch { 0%, 16%, 50%, 100% { opacity: 1; } 15%, 99% { opacity: 0.9; } 49% { opacity: 0.8; } }
        .animate-glitch { animation: glitch 0.1s infinite linear alternate-reverse; }
        @keyframes scanPulse {
          0% { opacity: 0.75; transform: translate(-50%, -50%) scaleY(1); }
          100% { opacity: 1; transform: translate(-50%, -50%) scaleY(1.03); }
        }
        .animate-scan-pulse {
          animation: scanPulse 1.5s infinite alternate ease-in-out;
        }
      `}</style>
      
      <canvas ref={particleCanvasRef} className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[450px] z-0 pointer-events-none" />
      <canvas ref={scannerCanvasRef} className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[450px] z-10 pointer-events-none" />
      
      <div
        className={`
          scanner-line absolute top-1/2 left-1/2 h-[480px] w-[2px] 
          bg-gradient-to-b from-transparent via-white to-transparent rounded-full
          transition-opacity duration-300 z-20 pointer-events-none animate-scan-pulse
          ${isScanning ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)',
        }}
      />

      <div className="absolute w-full h-[450px] flex items-center z-10">
        <div 
          ref={cardLineRef} 
          className="flex items-center whitespace-nowrap cursor-grab select-none will-change-transform" 
          style={{ gap: `${cardGap}px` }}
        >
          {cards.map(card => (
            <div key={card.internalId} className="card-wrapper relative w-[350px] h-[400px] shrink-0">
              
              {/* NORMAL CARD (Left side) */}
              <div className="card-normal card absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))] flex flex-col">
                <div className="h-[200px] w-full relative">
                   <img src={card.image} alt={card.title} className="w-full h-full object-cover brightness-75 contrast-125" />
                   <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-start whitespace-normal text-left relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{card.description}</p>
                </div>
              </div>

              {/* ASCII CARD (Right side) */}
              <div className="card-ascii card absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden bg-black border border-white/20 z-[3] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)] flex flex-col">
                <pre className="absolute inset-0 w-full h-full text-[rgba(255,255,255,0.4)] font-mono text-[10px] leading-[11px] overflow-hidden whitespace-pre m-0 p-2 text-left align-top box-border [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] animate-glitch pointer-events-none">
                  {card.ascii}
                </pre>
                
                {/* Same overlay content but with different styling */}
                <div className="h-[200px] w-full relative z-10" />
                <div className="p-6 flex-1 flex flex-col justify-start whitespace-normal text-left relative z-10 bg-black/60 backdrop-blur-sm border-t border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2 font-mono tracking-tighter uppercase">{card.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed font-mono">{card.description}</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}