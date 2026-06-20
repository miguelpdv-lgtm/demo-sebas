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
    <div className="min-h-screen bg-black text-neutral-50 font-sans selection:bg-neutral-800 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
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
              className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
            >
              Hablemos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-36 pb-24 md:pt-52 md:pb-36 overflow-hidden">
          <NodeAnimation />
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-6 max-w-5xl">
              Construimos el software <br className="hidden md:block" /> que tu negocio necesita
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
              Consultoría de software de nueva generación. Conectamos tus herramientas, desarrollamos soluciones a medida y desplegamos automatizaciones y agentes para escalar tu empresa sin límites.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#" 
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-base font-medium rounded-md hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                Agendar Consulta
                <Triangle className="w-3 h-3 fill-black rotate-90" />
              </a>
              <a 
                href="#soluciones" 
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-neutral-800 text-white text-base font-medium rounded-md hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2"
              >
                Ver Soluciones
              </a>
            </div>
          </div>
        </section>

        {/* Que Hacemos Section */}
        <section id="soluciones" className="py-24 border-y border-neutral-900 bg-neutral-950/20 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">¿Qué hacemos?</h2>
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
        <section className="py-24 border-b border-neutral-900 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Text & Benefits */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
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
              <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                {/* Subtle background glow for the terminal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />
                
                <div className="rounded-xl border border-neutral-800 bg-black overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.03)] w-full">
                  <div className="flex items-center px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                      <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                      <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                    </div>
                    <div className="ml-4 text-xs font-mono text-neutral-500 flex items-center gap-2">
                      <Terminal className="w-3 h-3" />
                      terminal — demo-cli
                    </div>
                  </div>
                  <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[300px] flex flex-col justify-center">
                    <div className="text-neutral-400">$ demo deploy --workflow enterprise --agents true</div>
                    <div className="text-neutral-500 mt-2">▸ Analizando ecosistema de herramientas...</div>
                    <div className="text-neutral-500">▸ Conectando APIs y bases de datos...</div>
                    <div className="text-neutral-500">▸ Desplegando agentes de automatización...</div>
                    <div className="text-white mt-2">✓ ¡Solución integrada correctamente! (1.24s)</div>
                    <div className="text-neutral-400 mt-4">
                      <span className="text-neutral-500">Entorno de Producción:</span> https://client-portal.demo.app
                    </div>
                    <div className="text-neutral-400 flex items-center mt-2">
                      <span className="text-neutral-500">Sistemas sincronizados y operando</span>
                      <span className="w-1.5 h-1.5 bg-white rounded-full ml-2 animate-pulse"></span>
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
      <footer className="py-12 border-t border-neutral-900 bg-black">
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
