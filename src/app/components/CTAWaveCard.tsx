import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTAWaveCard() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full py-20 px-6 min-h-[400px] md:min-h-0 md:aspect-[21/9] lg:aspect-[3/1] rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 group flex items-center justify-center shadow-2xl">
          {/* Animated Background SVG */}
          <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 400"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Wave 1 */}
              <motion.path
                d="M-100,200 C150,350 350,50 600,200 C850,350 1050,50 1200,200"
                fill="none"
                stroke="url(#fade)"
                strokeWidth="2"
                filter="url(#glow)"
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Wave 2 */}
              <motion.path
                d="M-100,250 C150,100 400,350 700,200 C1000,-50 1100,300 1200,250"
                fill="none"
                stroke="url(#fade)"
                strokeWidth="1.5"
                filter="url(#glow)"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 1 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="opacity-50"
              />

              {/* Wave 3 */}
              <motion.path
                d="M-100,150 C200,50 300,300 650,250 C1000,100 1050,350 1200,150"
                fill="none"
                stroke="url(#fade)"
                strokeWidth="3"
                filter="url(#glow)"
                initial={{ pathLength: 1, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: -1 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="opacity-30"
              />
            </svg>
          </div>

          {/* Foreground Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">¿Listo para evolucionar?</h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-lg">Únete a las empresas que ya están construyendo su futuro digital con nosotros.</p>
            <a
              href="#"
              className="pointer-events-auto inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition-all hover:scale-105 gap-2 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Agendar Consulta
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          {/* Subtle vignette/gradient overlay for depth */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0" />
        </div>
      </div>
    </section>
  );
}
