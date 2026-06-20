import { Link } from "react-router";
import { Box, Triangle, ArrowRight, Zap, Shield, Cpu, Code2, Terminal, ChevronRight, Server, Cloud, Database, Lock, Settings } from "lucide-react";
import NodeAnimation from "../components/NodeAnimation";
import RadialOrbitalTimeline, { TimelineItem } from "../components/RadialOrbitalTimeline";
import CTAWaveCard from "../components/CTAWaveCard";

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Soluciones Integrales",
    date: "01",
    content: "Conectamos todo tipo de servicios para crear ecosistemas digitales completos y perfectamente sincronizados.",
    category: "Integración",
    icon: Cloud,
    relatedIds: [2, 3],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Software Personalizado",
    date: "02",
    content: "Construimos plataformas a la medida, adaptadas exactamente a las necesidades y objetivos de cada negocio.",
    category: "Desarrollo",
    icon: Code2,
    relatedIds: [1, 5],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    title: "Automatización",
    date: "03",
    content: "Automatizamos procesos y flujos de trabajo para diferentes tipos de negocios, maximizando la eficiencia operativa.",
    category: "Optimización",
    icon: Zap,
    relatedIds: [1, 4],
    status: "in-progress",
    energy: 60,
  },
  {
    id: 4,
    title: "Agentes Digitales",
    date: "04",
    content: "Construimos e integramos agentes inteligentes que asisten, aprenden y escalan tus operaciones de forma automática.",
    category: "Innovación",
    icon: Cpu,
    relatedIds: [3, 5],
    status: "pending",
    energy: 30,
  },
  {
    id: 5,
    title: "Consultoría de Software",
    date: "05",
    content: "Asesoramiento técnico experto para guiar la estrategia, arquitectura y toma de decisiones tecnológicas.",
    category: "Estrategia",
    icon: Settings,
    relatedIds: [2, 4],
    status: "pending",
    energy: 80,
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-neutral-50 font-sans antialiased selection:bg-white selection:text-black flex flex-col tracking-tight relative">
      {/* Global Noise Texture for Premium Feel */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-black/60 backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_1px_30px_rgba(255,255,255,0.02)]">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition-colors">
                <Box className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-white tracking-tight">demo</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">Servicios</a>
              <a href="#" className="hover:text-white transition-colors">Nosotros</a>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <a 
              href="#" 
              className="group relative px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 blur-md group-hover:bg-white/40 transition-colors" />
              <span className="relative z-10 flex items-center gap-2">
                Hablemos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-36 pb-24 md:pt-52 md:pb-36 overflow-hidden">
          <NodeAnimation />
          {/* Intense Vercel-like ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            {/* Glowing pill badge */}
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-medium text-neutral-300">Nueva Generación de Consultoría</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-600 mb-6 max-w-5xl drop-shadow-sm">
              Construimos el software <br className="hidden md:block" /> que tu negocio necesita
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
              Consultoría de software de nueva generación. Conectamos tus herramientas, desarrollamos soluciones a medida y desplegamos automatizaciones y agentes para escalar tu empresa sin límites.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
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
            </div>
          </div>
        </section>

        {/* Que Hacemos Section */}
        <section id="soluciones" className="py-24 md:py-32 border-y border-white/5 bg-black relative z-10 overflow-hidden">
          {/* Background Grid Pattern */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10"
            style={{ maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 30%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 30%, transparent 100%)' }}
          />
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-6 drop-shadow-sm">¿Qué hacemos?</h2>
                <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                  Explora nuestros servicios a través de esta plataforma orbital interactiva. 
                  Conectamos todos los pilares de tu ecosistema para que funcionen en perfecta sincronía.
                </p>
              </div>
              <div className="relative w-full overflow-visible">
                <RadialOrbitalTimeline timelineData={timelineData} />
              </div>
            </div>
          </div>
        </section>

        {/* Combined Terminal & Features Split Section */}
        <section className="py-24 md:py-32 border-b border-white/5 relative z-10 overflow-hidden bg-black">
          {/* Vercel-like grid instead of dotted background */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10"
            style={{ maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 10%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 10%, transparent 100%)' }}
          />
          {/* Ambient Glows */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -z-10 -translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/4 translate-y-1/4" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Text & Benefits */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-6 drop-shadow-sm">
                  No vendemos tecnología.<br/> Construimos resultados.
                </h2>
                <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
                  Somos una empresa registrada con experiencia real. Nuestro enfoque no es vender proyectos — es construir sistemas que generen valor medible para tu negocio desde el día uno.
                </p>
                
                <div className="relative flex flex-col mt-4">
                  {/* Continuous background line for the whole list except the last item's bottom */}
                  <div className="absolute left-[3px] top-2 bottom-6 w-[1px] bg-neutral-800"></div>

                  <div className="relative pl-8 group cursor-default pb-10">
                    {/* Animated white line on hover */}
                    <div className="absolute left-[3px] top-2 w-[1px] h-0 bg-white group-hover:h-[calc(100%-8px)] transition-all duration-500 ease-out drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10"></div>
                    {/* Dot */}
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-neutral-700 ring-4 ring-black group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,1)] transition-all duration-300 z-20"></div>
                    
                    <h4 className="text-white font-medium text-lg mb-2 group-hover:text-white transition-colors">Todo tipo de negocios</h4>
                    <p className="text-neutral-400 leading-relaxed">Retail, SaaS, salud, logística, e-commerce — adaptamos la solución al contexto exacto.</p>
                  </div>
                  
                  <div className="relative pl-8 group cursor-default pb-10">
                    <div className="absolute left-[3px] top-2 w-[1px] h-0 bg-white group-hover:h-[calc(100%-8px)] transition-all duration-500 ease-out drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10"></div>
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-neutral-700 ring-4 ring-black group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,1)] transition-all duration-300 z-20"></div>
                    
                    <h4 className="text-white font-medium text-lg mb-2 group-hover:text-white transition-colors">Entrega rápida, sin caos</h4>
                    <p className="text-neutral-400 leading-relaxed">Proceso claro, comunicación directa y entregas que cumplen plazos reales.</p>
                  </div>
                  
                  <div className="relative pl-8 group cursor-default">
                    {/* The last item doesn't need to extend the line fully to the bottom, just its own content height if hovered */}
                    <div className="absolute left-[3px] top-2 w-[1px] h-0 bg-white group-hover:h-full transition-all duration-500 ease-out drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10"></div>
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-neutral-700 ring-4 ring-black group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,1)] transition-all duration-300 z-20"></div>
                    
                    <h4 className="text-white font-medium text-lg mb-2 group-hover:text-white transition-colors">Tecnología que escala</h4>
                    <p className="text-neutral-400 leading-relaxed">Lo que construimos hoy sirve para el mañana. Arquitecturas pensadas para crecer.</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Terminal Component */}
              <div className="relative w-full h-full min-h-[400px] flex items-center justify-center group">
                {/* Intense background glow for the terminal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-white/[0.05] transition-colors duration-700" />
                
                {/* Glowing Terminal Container */}
                <div className="relative w-full rounded-xl bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_100px_rgba(255,255,255,0.08)]">
                  {/* Moving top highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-neutral-800/80 border border-neutral-700"></div>
                      <div className="w-3 h-3 rounded-full bg-neutral-800/80 border border-neutral-700"></div>
                      <div className="w-3 h-3 rounded-full bg-neutral-800/80 border border-neutral-700"></div>
                    </div>
                    <div className="ml-4 text-xs font-mono text-neutral-400 flex items-center gap-2">
                      <Terminal className="w-3 h-3 text-neutral-500" />
                      terminal — demo-cli
                    </div>
                  </div>
                  <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[300px] flex flex-col justify-center relative">
                    <div className="text-neutral-400">
                      <span className="text-white/60">$</span> demo deploy --workflow enterprise --agents true
                    </div>
                    <div className="text-neutral-500 mt-2">▸ Analizando ecosistema de herramientas...</div>
                    <div className="text-neutral-500">▸ Conectando APIs y bases de datos...</div>
                    <div className="text-neutral-500">▸ Desplegando agentes de automatización...</div>
                    <div className="text-white mt-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">✓ ¡Solución integrada correctamente! (1.24s)</div>
                    <div className="text-neutral-400 mt-4">
                      <span className="text-neutral-500">Entorno de Producción:</span> <span className="text-white/80 border-b border-white/20">https://client-portal.demo.app</span>
                    </div>
                    <div className="text-neutral-400 flex items-center mt-2">
                      <span className="text-neutral-500">Sistemas sincronizados y operando</span>
                      <span className="w-1.5 h-1.5 bg-white rounded-full ml-2 animate-pulse shadow-[0_0_8px_rgba(255,255,255,1)]"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTAWaveCard />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition-colors">
              <Box className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-white tracking-tight">demo</span>
          </Link>
          <div className="flex items-center space-x-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
