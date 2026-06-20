import { Link } from "react-router";
import { Box, Triangle, ArrowRight, Zap, Shield, Cpu, Code2, Terminal, ChevronRight, Server, Cloud, Database, Lock, Settings } from "lucide-react";
import AetherFlowHero from "../components/AetherFlowHero";
import ScannerCardStream from "../components/ScannerCardStream";
import CTAWaveCard from "../components/CTAWaveCard";

const servicesData = [
  {
    id: 1,
    title: "Soluciones Integrales",
    description: "Conectamos todo tipo de servicios para crear ecosistemas digitales completos y perfectamente sincronizados.",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc4MTk3MTU1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Software Personalizado",
    description: "Construimos plataformas a la medida, adaptadas exactamente a las necesidades y objetivos de cada negocio.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGNvZGUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3ODE5NzE1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Automatización",
    description: "Automatizamos procesos y flujos de trabajo para diferentes tipos de negocios, maximizando la eficiencia operativa.",
    image: "https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3ODE5NzE1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Agentes Digitales",
    description: "Construimos e integramos agentes inteligentes que asisten, aprenden y escalan tus operaciones de forma automática.",
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW58ZW58MXx8fHwxNzgxOTcxNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Consultoría de Software",
    description: "Asesoramiento técnico experto para guiar la estrategia, arquitectura y toma de decisiones tecnológicas.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0aW5nJTIwc3RyYXRlZ3klMjBtZWV0aW5nfGVufDF8fHx8MTc4MTk3MTU1OXww&ixlib=rb-4.1.0&q=80&w=1080",
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
        <AetherFlowHero />

        {/* Que Hacemos Section (Scanner Stream Carousel) */}
        <section id="soluciones" className="py-24 md:py-32 border-y border-white/5 bg-black relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-6 drop-shadow-sm">
                ¿Qué hacemos?
              </h2>
              <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                Explora nuestros servicios a través de este stream interactivo. 
                Desliza las tarjetas para ver en detalle cómo operamos.
              </p>
            </div>
          </div>
          
          <div className="relative w-full">
             <ScannerCardStream cards={servicesData} />
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