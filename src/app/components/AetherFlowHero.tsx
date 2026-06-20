"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Triangle, Zap } from 'lucide-react';

const AetherFlowHero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: null as number | null, y: null as number | null, radius: 200 };

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (!canvas) return;
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Mouse collision detection
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + this.size) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * 5;
                        this.y -= forceDirectionY * force * 5;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            if (!canvas) return;
            particles = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                // Monochromatic solid cores
                let color = 'rgba(255, 255, 255, 0.7)'; 
                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        const resizeCanvas = () => {
            if (!canvas) return;
            // Get the parent container's dimensions to match the section correctly rather than viewport height,
            // which can cause scrolling issues on mobile due to URL bar appearing/disappearing.
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            init(); 
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const connect = () => {
            if (!canvas || !ctx) return;
            let opacityValue = 1;
            
            // For mobile screens, we need a larger connection distance threshold 
            // since the canvas height/width ratio is different (taller than wider)
            // making the canvas.width / 7 * canvas.height / 7 calculation too small for mobile
            const isMobile = window.innerWidth < 768;
            const distanceThreshold = isMobile 
                ? (canvas.width / 3) * (canvas.height / 3) 
                : (canvas.width / 7) * (canvas.height / 7);
                
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    
                    if (distance < distanceThreshold) {
                        opacityValue = 1 - (distance / (isMobile ? 30000 : 20000));
                        
                        let dx_mouse_a = mouse.x !== null ? particles[a].x - mouse.x : 0;
                        let dy_mouse_a = mouse.y !== null ? particles[a].y - mouse.y : 0;
                        let distance_mouse_a = Math.sqrt(dx_mouse_a*dx_mouse_a + dy_mouse_a*dy_mouse_a);

                        if (mouse.x !== null && distance_mouse_a < mouse.radius) {
                             ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
                        } else {
                             // Neutrals/grays for standard lines to fit Vercel monochromatic vibe
                             ctx.strokeStyle = `rgba(120, 120, 120, ${opacityValue * 0.4})`;
                        }
                        
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (!canvas || !ctx) return;
            
            // Clear rect instead of painting black so background matches the project's background
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
        };
        
        const handleMouseMove = (event: MouseEvent) => {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };
        
        const handleTouchMove = (event: TouchEvent) => {
            if (!canvas || event.touches.length === 0) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.touches[0].clientX - rect.left;
            mouse.y = event.touches[0].clientY - rect.top;
        };
        
        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('touchend', handleMouseOut);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('touchend', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <section className="relative pt-36 pb-24 md:pt-52 md:pb-36 overflow-hidden min-h-[90vh] flex flex-col justify-center">
            {/* The canvas is now the primary background */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}></canvas>
            
            {/* Intense Vercel-like ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" style={{ zIndex: 0 }} />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <motion.h1
                    custom={1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-600 mb-6 max-w-5xl drop-shadow-sm"
                >
                    Construimos el software <br className="hidden md:block" /> que tu negocio necesita
                </motion.h1>

                <motion.p
                    custom={2}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
                >
                    Conectamos tus herramientas, desarrollamos soluciones a medida y desplegamos automatizaciones y agentes para escalar tu empresa sin límites.
                </motion.p>

                <motion.div
                    custom={3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                >
                    <a 
                        href="#" 
                        className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black text-base font-medium rounded-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-neutral-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10 flex items-center gap-2">
                            Agendar Consulta
                            <Triangle className="w-3 h-3 fill-black rotate-90 transition-transform group-hover:translate-x-0.5" />
                        </span>
                    </a>
                    <a 
                        href="#soluciones" 
                        className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 text-white text-base font-medium rounded-md hover:bg-white/[0.03] transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        Ver Soluciones
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AetherFlowHero;