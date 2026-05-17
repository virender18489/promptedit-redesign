import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Play, ChevronRight, Zap, Layers, Cpu, Star, CheckCircle } from 'lucide-react';

// --- Shared Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function LandingPage() {
  return (
    <div className="bg-[#030014] min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <FeaturesBento />
      <WorkflowShowcase />
      <TemplatesGallery />
      <Statistics />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#030014]/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
        PromptEdit<span className="text-cyan-500">.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
        <a href="#templates" className="hover:text-white transition-colors">Templates</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
      </div>
      <button className="px-5 py-2 text-sm font-semibold rounded-full bg-white text-black hover:scale-105 transition-transform">
        Get Started
      </button>
    </motion.nav>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-48 overflow-hidden px-4">
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/20 rounded-full blur-[130px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-cyan-600/15 rounded-full blur-[160px] mix-blend-screen pointer-events-none" />
      
      <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-white/80">PromptEdit 2.0 is now live</span>
        </motion.div>
        
        <motion.h1 
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-6"
        >
          The Ultimate <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            AI Creative Engine
          </span>
        </motion.h1>
        
        <motion.p 
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-base md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Generate, edit, and master cinematic visuals faster than ever. Built for creators who demand Apple-level polish and Silicon Valley power.
        </motion.p>
        
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/10">
            Start Creating Free
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-md transition-colors flex items-center justify-center gap-2">
            <Play className="w-5 h-5 fill-current text-white/80" />
            Watch Showreel
          </button>
        </motion.div>
      </motion.div>

      {/* Glassmorphic Project Mockup Preview */}
      <motion.div 
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[92%] max-w-[1200px] h-[400px] md:h-[550px] bg-[#0a0a14]/80 border border-white/10 rounded-t-[32px] md:rounded-t-[40px] shadow-[0_-20px_80px_-20px_rgba(120,0,255,0.25)] backdrop-blur-xl pointer-events-none"
      >
        <div className="w-full h-12 border-b border-white/10 flex items-center px-6 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/40" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
          <div className="w-3 h-3 rounded-full bg-green-500/40" />
          <div className="mx-auto text-xs text-white/30 font-mono tracking-widest">PROMPTEDIT_CORE_INTERFACE</div>
        </div>
        <div className="p-6 h-full flex flex-col gap-4">
          <div className="w-full h-1/2 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white/10 animate-pulse" />
          </div>
          <div className="flex gap-4 h-1/4">
            <div className="w-1/4 h-full rounded-xl bg-white/5 border border-white/5" />
            <div className="w-2/4 h-full rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/5" />
            <div className="w-1/4 h-full rounded-xl bg-white/5 border border-white/5" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TrustedBy() {
  const logos = ["NETFLIX", "DISNEY", "HBO", "HULU", "AMAZON", "APPLE", "PARAMOUNT", "WARNER BROS"];
  return (
    <section className="py-16 border-y border-white/5 bg-[#030014]/40 relative z-20">
      <div className="text-center text-xs font-semibold text-white/30 mb-8 uppercase tracking-[0.2em]">
        Trusted by world-class creative groups
      </div>
      <div className="flex overflow-hidden select-none">
        <motion.div 
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap gap-20 px-10 items-center"
        >
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-xl md:text-2xl font-black text-white/15 tracking-widest">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesBento() {
  return (
    <section id="features" className="py-32 px-4 max-w-7xl mx-auto relative z-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">The Unfair Advantage.</h2>
        <p className="text-white/50 text-base md:text-xl max-w-2xl mx-auto">Everything you need to produce top-tier content, housed in a seamlessly intelligent interface.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
        {/* Card 1 */}
        <motion.div 
          whileHover={{ y: -6 }}
          className="md:col-span-2 p-8 rounded-[32px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden group transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] group-hover:bg-purple-500/20 transition-colors pointer-events-none" />
          <Zap className="w-10 h-10 text-purple-400 mb-6" />
          <h3 className="text-2xl font-bold mb-2">Real-Time AI Rendering</h3>
          <p className="text-white/60 leading-relaxed max-w-xl">Generate 4K assets on the fly. No progress bars, just instant creative iteration powered by custom edge neural networks.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          whileHover={{ y: -6 }}
          className="p-8 rounded-[32px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden group transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] group-hover:bg-cyan-500/20 transition-colors pointer-events-none" />
          <Layers className="w-10 h-10 text-cyan-400 mb-6" />
          <h3 className="text-2xl font-bold mb-2">Infinite Assets</h3>
          <p className="text-white/60 leading-relaxed">Access a limitless ecosystem of generated custom stock, immersive audio tracks, and advanced visual effects.</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          whileHover={{ y: -6 }}
          className="p-8 rounded-[32px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden group transition-all duration-300"
        >
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[60px] group-hover:bg-blue-500/20 transition-colors pointer-events-none" />
          <Cpu className="w-10 h-10 text-blue-400 mb-6" />
          <h3 className="text-2xl font-bold mb-2">Smart Sequencing</h3>
          <p className="text-white/60 leading-relaxed">AI automatically tracks and syncs your dramatic cuts and visual transformations directly to the audio beat structure.</p>
        </motion.div>

        {/* Card 4 */}
        <motion.div 
          whileHover={{ y: -6 }}
          className="md:col-span-2 p-8 rounded-[32px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden group flex items-end transition-all duration-300"
        >
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-[0.08] mix-blend-overlay group-hover:opacity-15 transition-opacity" />
           <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-bold mb-2">Prompt to Multi-Track Production</h3>
            <p className="text-white/60 leading-relaxed">Type a description, and watch our engine build out an entire multi-track timeline complete with automated color grading nodes and matching sound design presets.</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkflowShowcase() {
  return (
    <section id="workflow" className="py-32 relative z-20 overflow-hidden bg-gradient-to-b from-transparent via-[#05021a] to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              A cinematic workflow <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white/50 to-white/30">designed to keep you in flow.</span>
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Ideate & Prompt", desc: "Start with raw concepts, technical descriptions, or upload a spatial reference layout." },
                { step: "02", title: "Real-Time Generation", desc: "Review dozens of high-fidelity variations instantly arranged via dynamic style tags." },
                { step: "03", title: "Refine & Master", desc: "Use the advanced nodular timeline to tweak color profiles, framing, and layer parameters." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer border-l-2 border-white/5 hover:border-cyan-500/40 pl-6 transition-all duration-300">
                  <div className="text-xl font-mono text-cyan-500/40 group-hover:text-cyan-400 transition-colors">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1 group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] md:h-[520px] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-sm p-4 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030014]/90 z-10 pointer-events-none" />
            <div className="w-full h-full rounded-[24px] bg-[#070512] border border-white/5 p-6 flex flex-col gap-4">
               <div className="w-full h-40 bg-gradient-to-tr from-purple-500/10 via-blue-500/5 to-transparent rounded-xl flex items-center justify-center border border-white/5">
                  <div className="text-xs font-mono text-white/20 animate-pulse">PROCESSING AUDIO BEAT COMPLIANCE...</div>
               </div>
               <div className="flex gap-3">
                 <div className="w-1/3 h-20 bg-white/5 rounded-xl border border-white/5" />
                 <div className="w-1/3 h-20 bg-white/5 rounded-xl border border-white/5" />
                 <div className="w-1/3 h-20 bg-white/5 rounded-xl border border-white/5" />
               </div>
               <div className="w-full h-10 bg-cyan-500/10 rounded-xl mt-auto flex items-center px-4 justify-between border border-cyan-500/20">
                 <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                 <div className="text-xs font-mono text-cyan-400">TIMELINE ACTIVE • 24.00 FPS</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TemplatesGallery() {
  const templates = [1, 2, 3, 4];
  return (
    <section id="templates" className="py-32 bg-[#050212]/30 border-y border-white/5 relative z-20">
       <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Start Strong.</h2>
            <p className="text-white/50 text-base md:text-lg">World-class master templates engineered by leading digital effects studios.</p>
          </div>
          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-sm tracking-wide">
            EXPLORE THE DIRECTORY <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="aspect-video rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group cursor-pointer transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-50 transition-all duration-500 ${i%2 === 0 ? 'from-purple-600 via-indigo-900 to-transparent' : 'from-cyan-600 via-blue-950 to-transparent'}`} />
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 text-white ml-0.5 fill-current" />
                </div>
                <div>
                  <h4 className="text-lg font-bold group-hover:text-cyan-300 transition-colors">Cinematic Architecture {i}</h4>
                  <p className="text-white/40 text-xs tracking-wider uppercase mt-1">Studio Asset • 4K HDR</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
       </div>
    </section>
  );
}

function Statistics() {
  return (
    <section className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y-0 md:divide-x divide-white/10">
        {[
          { number: "18M+", label: "Assets Rendered" },
          { number: "0.12s", label: "Average Latency" },
          { number: "99.8%", label: "Uptime SLA" },
          { number: "8K", label: "Max Resolution" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center px-4 pt-6 md:pt-0"
          >
            <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 tracking-tighter mb-2">
              {stat.number}
            </div>
            <div className="text-white/40 font-medium tracking-widest uppercase text-xs">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-32 relative z-20 overflow-hidden bg-gradient-to-r from-[#030014] via-[#06041a] to-[#030014]">
      <div className="max-w-4xl mx-auto text-center px-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Endorsed by the Industry.</h2>
      </div>
      
      <div className="flex overflow-hidden select-none mask-gradient">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 32 }}
          className="flex gap-8 px-4"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-[350px] md:w-[450px] shrink-0 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-cyan-400 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed italic">
                  "PromptEdit has completely accelerated how our production unit pitches concepts to networks. We generate cinematic quality updates live in the meeting room."
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 shrink-0" />
                <div>
                  <h5 className="font-semibold text-white/90 text-sm">Marcus Vance</h5>
                  <p className="text-white/40 text-xs tracking-wide">VFX Lead, Omnicom Global</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingPreview() {
  return (
    <section id="pricing" className="py-32 relative z-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Transparent Enterprise Power.</h2>
          <p className="text-white/50 text-base md:text-lg">Scale your creative output without artificial limitations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left items-stretch">
          {/* Plan 1 */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white/90 mb-1">Starter</h3>
              <p className="text-white/40 text-xs mb-6">For individual creators exploring AI</p>
              <div className="text-4xl font-extrabold mb-6">$19<span className="text-sm text-white/40 font-normal">/mo</span></div>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-white/40" /> Standard Generation Speeds</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-white/40" /> 1080p Maximum Export</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-white/40" /> Personal Use License</li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors mt-8">
              Get Started
            </button>
          </div>

          {/* Plan 2 - Pro Flagship */}
          <div className="p-[1px] rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 relative shadow-[0_0_60px_-15px_rgba(6,182,212,0.3)]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest shadow-lg uppercase">
               RECOMMENDED
             </div>
             <div className="bg-[#070514] rounded-[23px] p-8 h-full flex flex-col justify-between">
               <div>
                 <h3 className="text-2xl font-bold text-white mb-1">Pro Studio</h3>
                 <p className="text-white/50 text-xs mb-6">For professional directors & teams</p>
                 <div className="text-5xl font-black mb-6">$49<span className="text-base text-white/40 font-normal">/mo</span></div>
                 <ul className="space-y-4 text-sm">
                   <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-cyan-400" /> <strong>Unlimited</strong> AI Generations</li>
                   <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-cyan-400" /> Native 4K HDR Export</li>
                   <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-cyan-400" /> Full Commercial Production License</li>
                   <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-cyan-400" /> Priority Server Allocation</li>
                 </ul>
               </div>
               <button className="w-full py-3.5 rounded-xl bg-white text-black font-bold shadow-md hover:bg-neutral-200 transition-colors mt-8">
                 Upgrade to Pro
               </button>
             </div>
          </div>

          {/* Plan 3 */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white/90 mb-1">Enterprise</h3>
              <p className="text-white/40 text-xs mb-6">Custom features for scale operations</p>
              <div className="text-4xl font-extrabold mb-6">Custom</div>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> Dedicated Custom Fine-Tuned Models</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> 8K Raw Export Framework</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> Multi-Seat Team Floating Licenses</li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors mt-8">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-40 relative z-20 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-tight"
        >
          Redefine your <br/> creative limitations.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-5px_rgba(6,182,212,0.5)]">
            Create Your Free Account
          </button>
          <p className="mt-4 text-white/30 text-xs tracking-wide">Instant Setup • No Credit Card Required</p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 border-t border-white/10 bg-[#02000c] relative z-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="text-xl font-bold tracking-tighter mb-4">PromptEdit<span className="text-cyan-500">.</span></div>
          <p className="text-white/40 text-xs leading-relaxed max-w-xs">The premium cloud AI engine engineered for professional-grade media synthesis and fast content deployment.</p>
        </div>
        <div>
          <h4 className="font-bold text-sm text-white/80 mb-4 tracking-wider uppercase">Platform</h4>
          <ul className="space-y-2 text-white/50 text-xs">
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#templates" className="hover:text-white transition-colors">Templates Hub</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Plans & Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm text-white/80 mb-4 tracking-wider uppercase">Resources</h4>
          <ul className="space-y-2 text-white/50 text-xs">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Guide</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm text-white/80 mb-4 tracking-wider uppercase">Legal</h4>
          <ul className="space-y-2 text-white/50 text-xs">
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Charter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Content Licensing</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/30 text-xs">
        <div>© {new Date().getFullYear()} PromptEdit Technologies Inc. All rights reserved.</div>
        <div className="text-white/15 font-mono">APPLE_POLISH_FRAMEWORK_v2.0</div>
      </div>
    </footer>
  );
}