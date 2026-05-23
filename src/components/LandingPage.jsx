import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Video, Zap, Image as ImageIcon, ArrowRight, Twitter, Linkedin, Facebook, Layout, Code, Layers, Workflow, Palette, X, Eye, EyeOff, User, Lock, Mail } from 'lucide-react';
export default function LandingPage() {
  // Modal state manage karne ke liye
  const [authModal, setAuthModal] = useState({ isOpen: false, view: 'login' });

  return (
    <div className="font-sans overflow-x-hidden bg-white text-gray-800 selection:bg-yellow-400/30">
      {/* Navbar ko function pass kiya modal open karne ke liye */}
      <Navbar openAuthModal={(view) => setAuthModal({ isOpen: true, view })} />

      <HeroSection />

      <DarkFeaturesSection />
      <ServicesSection />
      <HowItWorksSection />
      <VideoFirstSection />
      <ProjectsSection />
      <StatsSection />
      <TeamSection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
      <Footer />

      {/* Naya Auth Modal Component */}
      <AuthModal
        isOpen={authModal.isOpen}
        view={authModal.view}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        switchView={(view) => setAuthModal({ ...authModal, view })}
      />
    </div>
  );
}

// Navbar mein a tag ki jagah button add kiye gaye hain
function Navbar({ openAuthModal }) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <div className="text-2xl font-black tracking-tighter text-white">
        PromptEdit<span className="text-yellow-400">.</span>
      </div>

      <div className="hidden lg:flex gap-8 text-sm font-medium text-white/90">
        <a href="#" className="hover:text-yellow-400 transition-colors">HOME</a>
        <a href="#" className="hover:text-yellow-400 transition-colors">AI FEATURES</a>
        <a href="#" className="hover:text-yellow-400 transition-colors">CREATOR COURSE</a>
        <a href="#" className="hover:text-yellow-400 transition-colors">PRICING</a>
        <a href="#" className="hover:text-yellow-400 transition-colors">TUTORIALS</a>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        {/* Sign In Button - Opens Login view */}
        <button
          onClick={() => openAuthModal('login')}
          className="text-sm font-bold text-white hover:text-yellow-400 transition-colors hidden sm:block focus:outline-none"
        >
          Sign In
        </button>
        {/* Sign Up Button - Opens Signup view */}
        <button
          onClick={() => openAuthModal('signup')}
          className="px-6 py-2.5 rounded-full bg-yellow-400 text-indigo-900 font-bold text-sm hover:bg-yellow-300 transition-all shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:scale-105 focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}

// ==========================================
// NEW WHITE-THEME AUTH MODAL (XUPE STYLE)
// ==========================================
function AuthModal({ isOpen, view, onClose, switchView }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isLogin = view === 'login';

  // Modal open hone par background scroll band karne ke liye
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-white rounded-[32px] p-8 relative shadow-2xl z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors z-50 focus:outline-none"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header & Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 shadow-inner border border-gray-100">
            <User className="w-10 h-10 text-gray-300" />
          </div>

          <h2 className="text-2xl font-black text-indigo-950 tracking-tight">
            {isLogin ? 'Login To XUPE' : 'Create XUPE Account'}
          </h2>
        </div>

        {/* Form Fields */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

          {/* Full Name (Only for Signup) */}
          {!isLogin && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-gray-50 border border-gray-100 focus:bg-white focus:border-pink-400 focus:ring-4 focus:ring-pink-400/10 outline-none transition-all text-gray-700 font-medium shadow-inner"
              />
            </div>
          )}

          {/* Username / Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {isLogin ? <User className="w-5 h-5 text-gray-400" /> : <Mail className="w-5 h-5 text-gray-400" />}
            </div>
            <input
              type={isLogin ? "text" : "email"}
              placeholder={isLogin ? "Username" : "Email Address"}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-gray-50 border border-gray-100 focus:bg-white focus:border-pink-400 focus:ring-4 focus:ring-pink-400/10 outline-none transition-all text-gray-700 font-medium shadow-inner"
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3.5 rounded-full bg-gray-50 border border-gray-100 focus:bg-white focus:border-pink-400 focus:ring-4 focus:ring-pink-400/10 outline-none transition-all text-gray-700 font-medium shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-pink-500 transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Forgot Password Link */}
            {isLogin && (
              <div className="text-right mt-3 pr-2">
                <a href="#" className="text-sm font-bold text-gray-400 hover:text-pink-500 transition-colors">
                  Forgot Password?
                </a>
              </div>
            )}
          </div>

          {/* Login / Sign Up Button */}
          <button
            className="w-full py-4 mt-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-black rounded-full hover:shadow-[0_10px_20px_-10px_rgba(236,72,153,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Bottom Toggle Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-medium">
            {isLogin ? "New to XUPE? " : "Already have an account? "}
            <button
              onClick={() => switchView(isLogin ? 'signup' : 'login')}
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-80 transition-opacity focus:outline-none"
            >
              {isLogin ? 'Create an Account' : 'Login'}
            </button>
          </p>
        </div>

      </motion.div>
    </div>
  );
}

// ==========================================
// REVISED HERO SECTION WITH NEW CONTENT
// ==========================================
function HeroSection() {
  return (
    <section className="relative pt-40 pb-64 lg:pb-80 bg-gradient-to-b from-[#1a0b2e] via-[#2d1b64] to-[#4b3b8c] overflow-hidden">
      {/* Stars/Planets Background Animations */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-32 left-[10%] w-4 h-4 bg-yellow-300 rounded-full blur-[2px]" />
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-64 left-[40%] w-8 h-8 bg-pink-400 rounded-full blur-[4px]" />
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-40 right-[20%] w-3 h-3 bg-white rounded-full blur-[1px]" />

      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center relative z-10">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Create any video <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">you can imagine.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
          >
            Time-saving templates and pay-per-use AI tools.No subscription required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <button className="px-8 py-4 bg-yellow-400 text-indigo-900 font-bold rounded-full hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-105">
              Create with Templates
            </button>
            <button className="px-8 py-4 bg-yellow-400 text-indigo-900 font-bold rounded-full hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-105">
              Create with AI
            </button>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center"
          >
            <div className="absolute w-[70%] h-[70%] bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.2)]">
              <div className="absolute top-[20%] left-[30%] w-12 h-12 bg-black/10 rounded-full" />
              <div className="absolute bottom-[30%] right-[20%] w-16 h-16 bg-black/10 rounded-full" />
            </div>
            {/* Decorative UI Elements to match the "Drag and Drop Blocks" theme */}
            <div className="absolute top-[10%] w-40 h-56 bg-indigo-500 rounded-3xl -rotate-12 border-4 border-indigo-900 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 w-full h-6 bg-indigo-900 flex items-center px-2 gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="w-24 h-32 bg-white/20 rounded-xl mt-4"></div>
            </div>

            <div className="absolute top-[40%] right-[5%] w-48 h-32 bg-pink-500 rounded-2xl rotate-6 border-4 border-pink-900 shadow-2xl flex flex-col justify-end p-4">
              <div className="w-full h-3 bg-white/30 rounded-full mb-3"></div>
              <div className="w-2/3 h-3 bg-white/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-0 translate-y-1">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#bae6fd" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,101.3C672,96,768,128,864,154.7C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: <Video className="w-10 h-10 text-blue-500" />, title: "Cinematic AI Transitions", desc: "Instantly apply Day to Night Hyperlapse, Phone Zoom Through, and Room Grow effects using start & end frame techniques." },
    { icon: <ImageIcon className="w-10 h-10 text-pink-500" />, title: "AI Thumbnails", desc: "Use our Triple Threat Formula GPT to generate high-converting YouTube thumbnails in under 3 minutes without subscriptions." },
    { icon: <Zap className="w-10 h-10 text-emerald-500" />, title: "AI Character Integration", desc: "Add, animate, and mask AI characters directly into real footage with automatic color adjustments." }
  ];

  return (
    <section className="relative bg-sky-200 pt-10 pb-32">
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <p className="text-indigo-900/60 font-bold tracking-widest text-sm uppercase mb-2">Master AI Filmmaking</p>
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-16 max-w-2xl mx-auto">
          We replace complex timelines with simple prompts to make your content stand out
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-10 shadow-xl shadow-sky-900/10 flex flex-col items-center text-center transition-all"
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo-950 mb-4">{srv.title}</h3>
              <p className="text-gray-500 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ==========================================
// NEW SECTION: PREMIUM DARK FEATURES GRID
// ==========================================
function DarkFeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      iconBg: "bg-purple-500/10 border-purple-500/20",
      title: "Dynamic interactions",
      desc: "Create engaging user experiences with built-in animation presets and scroll triggers.",
      link: "Explore interactions",
      linkColor: "text-purple-400 hover:text-purple-300"
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      iconBg: "bg-blue-500/10 border-blue-500/20",
      title: "Built-in templates",
      desc: "Start faster with our library of production-ready, highly customizable templates.",
      link: "Explore templates",
      linkColor: "text-blue-400 hover:text-blue-300"
    },
    {
      icon: <Code className="w-6 h-6 text-emerald-400" />,
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      title: "Developer-friendly API",
      desc: "Extend functionality with our robust, well-documented REST and GraphQL APIs.",
      link: "Explore API",
      linkColor: "text-emerald-400 hover:text-emerald-300"
    },
    {
      icon: <Layers className="w-6 h-6 text-orange-400" />,
      iconBg: "bg-orange-500/10 border-orange-500/20",
      title: "Seamless integrations",
      desc: "Connect your favorite tools and automate your workflow without writing code.",
      link: "Explore integrations",
      linkColor: "text-orange-400 hover:text-orange-300"
    },
    {
      icon: <Workflow className="w-6 h-6 text-indigo-400" />,
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
      title: "Intelligent workflows",
      desc: "Automate repetitive tasks and let our AI engine handle the heavy lifting for you.",
      link: "Explore workflows",
      linkColor: "text-indigo-400 hover:text-indigo-300"
    },
    {
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
      iconBg: "bg-cyan-500/10 border-cyan-500/20",
      title: "Customizable themes",
      desc: "Match your brand perfectly with advanced theme customization and global variables.",
      link: "Explore themes",
      linkColor: "text-cyan-400 hover:text-cyan-300"
    }
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Subtle Premium Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 text-gray-300 font-bold text-xs uppercase tracking-widest mb-6 border border-white/10"
          >
            Powerful Features
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Everything you need to <br className="hidden md:block" /> build faster.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A complete suite of tools designed to help you create, manage, and scale your digital experiences with unprecedented speed.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#0a0a0f] border border-white/10 hover:border-white/20 rounded-[24px] p-8 flex flex-col transition-all duration-300 group shadow-2xl shadow-black/50"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border ${item.iconBg} shadow-inner`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {item.desc}
              </p>

              {/* Animated Link Bottom */}
              <a href="#" className={`inline-flex items-center gap-2 font-bold text-sm ${item.linkColor} group-hover:gap-3 transition-all duration-300 mt-auto`}>
                {item.link} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// NEW SECTION: HOW IT WORKS (From your screenshot)
// ==========================================
function HowItWorksSection() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden border-t border-gray-100">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-24">

          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 tracking-tight">
            Common questions
          </h2>
        </div>

        {/* 3-Column Layout: Left Steps, Center Image, Right Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-center">

          {/* Left Column (Steps 1 & 2) */}
          <div className="flex flex-col gap-12 lg:col-span-1 order-2 lg:order-1">

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              {/* Large faded background number */}
              <div className="absolute -top-8 -left-4 text-7xl font-black text-gray-200 group-hover:text-pink-100 transition-colors duration-300 z-0 select-none">
                01
              </div>
              <div className="relative z-10 pl-2">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-pink-600 font-black">1</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-950 mb-3 group-hover:text-pink-600 transition-colors">What is PromptEdit?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Start by selecting a base layout and customize it to match your brand's unique vision and style.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -top-8 -left-4 text-7xl font-black text-gray-200 group-hover:text-yellow-100 transition-colors duration-300 z-0 select-none">
                02
              </div>
              <div className="relative z-10 pl-2">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-yellow-600 font-black">2</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-950 mb-3 group-hover:text-yellow-600 transition-colors">Can I use generated content for commercial projects?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Easily position elements, images, and text blocks on the canvas without writing a single line of code.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Center Column (Dashboard Mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="lg:col-span-2 order-1 lg:order-2 relative z-20 group"
          >
            {/* Glowing Background Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-[40px] transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" />

            {/* Main Image Card */}
            <div className="bg-white p-3 md:p-5 rounded-[40px] shadow-2xl relative z-10 border border-gray-100">
              <div className="rounded-[24px] overflow-hidden bg-gray-100">
                {/* Aap yahan dashboard ya interface ki image daal sakte hain */}
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                  alt="Interface Mockup"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Floating Element (Like in your screenshot) */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-30 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-bold uppercase">Status</div>
                  <div className="text-sm font-black text-indigo-950">Published Live</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (Steps 3 & 4) */}
          <div className="flex flex-col gap-12 lg:col-span-1 order-3 lg:order-3">

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -top-8 -left-4 text-7xl font-black text-gray-200 group-hover:text-indigo-100 transition-colors duration-300 z-0 select-none">
                03
              </div>
              <div className="relative z-10 pl-2">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-indigo-600 font-black">3</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-950 mb-3 group-hover:text-indigo-600 transition-colors">What models are available?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Apply global colors, beautiful typography, and modern themes with just one simple click.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -top-8 -left-4 text-7xl font-black text-gray-200 group-hover:text-green-100 transition-colors duration-300 z-0 select-none">
                04
              </div>
              <div className="relative z-10 pl-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-green-600 font-black">4</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-950 mb-3 group-hover:text-green-600 transition-colors">Is there a free trial?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Export your project or host it directly on our blazing fast global CDN servers instantly.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// REVISED SECTION: A VIDEO FIRST APPROACH (WITH POPUP)
// ==========================================
function VideoFirstSection() {
  // State for managing the popup
  const [activeVideo, setActiveVideo] = React.useState(null);

  // Added dummy 'videoUrl' for the iframe (Replace with your actual video URLs)
  const videos = [
    {
      title: "Day to Night Hyperlapse",
      views: "1.2M Views",
      category: "Time Manipulation",
      desc: "Turn a sunny afternoon clip into a neon-lit cyberpunk night scene with one prompt.",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "AI Character Integration",
      views: "850K Views",
      category: "VFX & Masking",
      desc: "Seamlessly rotoscope and drop 3D AI characters into your real-life street footage.",
      img: "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Room Grow Effect",
      views: "2.4M Views",
      category: "Spatial Transitions",
      desc: "Create the viral 'room expanding' illusion perfectly synced to your audio beat.",
      img: "https://images.unsplash.com/photo-1535016120720-40c746a51d47?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Phone Zoom Masterclass",
      views: "500K Views",
      category: "Camera Moves",
      desc: "Simulate a million-dollar motion control camera rig using just a static phone shot.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  // Disable body scroll when modal is open
  React.useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeVideo]);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-pink-50 text-pink-600 font-bold text-xs uppercase tracking-widest mb-6 border border-pink-100"
          >
            Vertical Optimized
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-6 tracking-tight">
            A Video First Approach
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We believe the future of content is vertical. Engage your audience where they already are with high-retention AI-generated shorts, reels, and tutorials.
          </p>
        </div>

        {/* Interactive Expanding Accordion Layout */}
        <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[600px] w-full">
          {videos.map((vid, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveVideo(vid)} // Open Modal on Click
              className="relative flex-1 hover:flex-[3] transition-all duration-500 ease-in-out overflow-hidden rounded-[32px] group cursor-pointer bg-indigo-950 shadow-2xl shadow-indigo-900/10 border-2 border-transparent hover:border-yellow-400"
            >
              <img
                src={vid.img}
                alt={vid.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex items-center justify-center opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                  <Play className="w-6 h-6 text-white ml-1 fill-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex flex-col justify-end h-full">
                <div className="flex items-center gap-3 mb-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 lg:delay-100">
                  <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full tracking-wider shadow-md">
                    {vid.views}
                  </span>
                  <span className="text-yellow-400 font-bold text-xs tracking-widest uppercase">
                    {vid.category}
                  </span>
                </div>
                <h3 className="text-white font-black text-2xl md:text-3xl mb-0 lg:mb-2 whitespace-nowrap lg:truncate lg:group-hover:whitespace-normal transition-all duration-300 drop-shadow-lg">
                  {vid.title}
                </h3>
                <div className="overflow-hidden max-h-0 lg:group-hover:max-h-40 transition-all duration-500 ease-in-out opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                  <p className="text-white/80 text-sm md:text-base mb-6 mt-2 leading-relaxed">
                    {vid.desc}
                  </p>
                  <button className="flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold rounded-full transition-colors w-max shadow-lg pointer-events-none">
                    <Play className="w-4 h-4 fill-current" /> Watch Masterclass
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* VIDEO POPUP MODAL (Rendered conditionally) */}
      {/* ========================================== */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)} // Close when clicking backdrop
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-[24px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside video box
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-red-500 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors border border-white/20 group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Video Iframe */}
              <iframe
                className="w-full h-full"
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectsSection() {
  const capabilities = [
    {
      title: "Speed Ramps & Motion Blur",
      desc: "Instantly add dynamic speed curves and realistic motion blur without keyframing.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Smart Masking",
      desc: "Isolate subjects with 99% accuracy in seconds using our AI-driven rotoscoping.",
      img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Start & End Frame Matching",
      desc: "Seamlessly connect disparate clips with automated scene transition generation.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
          >
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold tracking-widest text-indigo-900 uppercase">Core Capabilities</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-6 tracking-tight">
            Automated Workflows
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Take a look at the capabilities powering the next generation of video editing. From speed ramps to masking, we handle the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl shadow-indigo-900/5 group cursor-pointer border border-gray-100 flex flex-col"
            >
              <div className="h-64 bg-gray-100 relative overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white flex-1 flex flex-col justify-center">
                <h3 className="font-black text-xl text-indigo-950 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">

        <div className="w-full lg:w-1/2 relative">
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full aspect-[4/3] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[40px] p-8 relative shadow-[0_20px_50px_-10px_rgba(99,102,241,0.4)] flex flex-col justify-between overflow-hidden border-4 border-white"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl" />

            <div className="flex justify-between items-start relative z-10">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-bold text-sm border border-white/30">
                Efficiency Analysis
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-white/80 font-medium mb-2 uppercase tracking-widest text-sm">Average Time Saved</div>
              <div className="text-5xl md:text-6xl font-black text-white">1 Minute <span className="text-2xl font-medium text-white/70">to live</span></div>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-8 shadow-sm">
              <ArrowRight className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-6 leading-tight tracking-tight">
              Replace $8.8k/yr in <br /> tools and dev costs.
            </h2>
            <p className="text-gray-500 mb-12 text-lg leading-relaxed">
              Stop stitching together five different tools. PromptEdit bundles everything into one intuitive platform so you can spend your time on the actual content, not the timeline.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-black text-indigo-600 mb-1">1m</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Prompt to Video</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-indigo-600 mb-1">100%</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Automated</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-indigo-600 mb-1">0</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Tech Skills</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    { name: "Nick Miller", role: "AI VIDEO STRATEGIST", tag: "Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
    { name: "Anthony Gallo", role: "CINEMATIC DIRECTOR", tag: "Creative", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
    { name: "Lorien Dean", role: "AI EDITOR EXPERT", tag: "Tech", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <section className="py-32 bg-[#fef08a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-bold text-xs uppercase tracking-widest mb-6">
          The Content Creator Team
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-16 tracking-tight">
          Learn from the experts behind <br /> the AI Creator Course
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-white p-6 rounded-[32px] shadow-xl shadow-yellow-900/10 flex flex-col items-center group relative border-2 border-transparent hover:border-yellow-400 transition-colors"
            >
              <div className="absolute top-8 right-8 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-indigo-900 shadow-sm">
                {member.tag}
              </div>

              <div className="w-full h-72 bg-gray-100 mb-8 overflow-hidden rounded-2xl relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-black text-indigo-950 mb-1">{member.name}</h3>
              <p className="text-indigo-600/70 text-xs font-bold mb-6 tracking-widest">{member.role}</p>

              <div className="flex gap-3 text-gray-400 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-400 cursor-pointer transition-all">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-all">
                  <Linkedin className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// NEW SECTION: PRICING
// ==========================================
function PricingSection() {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden border-t border-gray-100">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-widest mb-6"
          >
            Flexible Pricing
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-6 tracking-tight">
            Choose the perfect plan <br /> for your creative workflow
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`font-bold text-sm transition-colors ${!isYearly ? 'text-indigo-950' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-16 h-8 bg-indigo-100 rounded-full p-1 relative transition-colors focus:outline-none shadow-inner"
            >
              <motion.div
                animate={{ x: isYearly ? 32 : 0 }}
                className="w-6 h-6 bg-indigo-600 rounded-full shadow-md"
              />
            </button>
            <span className={`font-bold text-sm flex items-center gap-2 transition-colors ${isYearly ? 'text-indigo-950' : 'text-gray-400'}`}>
              Yearly <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded-full uppercase tracking-wider font-black">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

          {/* Starter Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl shadow-indigo-900/5 border border-gray-100 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-indigo-950 mb-2">Starter</h3>
            <p className="text-gray-500 text-sm mb-6 h-10">Perfect for individual creators just getting started.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-indigo-950">${isYearly ? '16' : '20'}</span>
              <span className="text-gray-500 font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center"><Zap className="w-3 h-3 text-indigo-500" /></div>
                50 AI Generations / month
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center"><Zap className="w-3 h-3 text-indigo-500" /></div>
                1080p Video Export
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center"><Zap className="w-3 h-3 text-indigo-500" /></div>
                Standard Support
              </li>
            </ul>
            <button className="w-full py-4 rounded-full border-2 border-indigo-100 text-indigo-600 font-bold hover:bg-indigo-50 transition-colors mt-auto">
              Start Free Trial
            </button>
          </motion.div>

          {/* Pro Plan (Highlighted) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-indigo-950 rounded-[32px] p-8 md:p-10 shadow-2xl shadow-indigo-900/20 border border-indigo-800 relative md:-my-6 z-10 flex flex-col h-[105%]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-indigo-950 text-xs font-black uppercase tracking-widest shadow-lg">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
            <p className="text-indigo-200 text-sm mb-6 h-10">For professional creators needing unlimited power.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black text-white">${isYearly ? '40' : '50'}</span>
              <span className="text-indigo-200 font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center"><Zap className="w-3 h-3 text-yellow-400 fill-current" /></div>
                Unlimited AI Generations
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center"><Zap className="w-3 h-3 text-yellow-400 fill-current" /></div>
                4K HDR Video Export
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center"><Zap className="w-3 h-3 text-yellow-400 fill-current" /></div>
                Priority Cloud Rendering
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center"><Zap className="w-3 h-3 text-yellow-400 fill-current" /></div>
                24/7 Priority Support
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-yellow-400 text-indigo-950 font-black hover:bg-yellow-300 transition-colors shadow-[0_0_20px_rgba(250,204,21,0.3)] mt-auto">
              Upgrade to Pro
            </button>
          </motion.div>

          {/* Team Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl shadow-indigo-900/5 border border-gray-100 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-indigo-950 mb-2">Team</h3>
            <p className="text-gray-500 text-sm mb-6 h-10">For agencies and collaborative video teams.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-indigo-950">${isYearly ? '79' : '99'}</span>
              <span className="text-gray-500 font-medium">/user/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center"><Zap className="w-3 h-3 text-indigo-500" /></div>
                Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center"><Zap className="w-3 h-3 text-indigo-500" /></div>
                Real-time Collaboration
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center"><Zap className="w-3 h-3 text-indigo-500" /></div>
                Team Asset Library
              </li>
            </ul>
            <button className="w-full py-4 rounded-full border-2 border-indigo-100 text-indigo-600 font-bold hover:bg-indigo-50 transition-colors mt-auto">
              Contact Sales
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// NEW SECTION: FAQ / ACCORDION
// ==========================================
function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      question: "Do I need any prior video editing experience?",
      answer: "Not at all! PromptEdit is designed for beginners and pros alike. If you can type a text prompt, you can generate and edit stunning cinematic videos in minutes."
    },
    {
      question: "How does the Triple Threat Formula GPT work?",
      answer: "It's our custom AI model trained on thousands of high-converting YouTube thumbnails. Just enter your video topic, and it generates 3 different psychological angles and thumbnail concepts instantly."
    },
    {
      question: "Can I use the generated videos commercially?",
      answer: "Yes! All videos and assets generated on our Pro and Team plans come with a full commercial license, meaning you can use them for client work, YouTube monetization, and ads."
    },
    {
      question: "Is there a limit on how many videos I can export?",
      answer: "The Starter plan allows 50 generations per month, but our Pro plan gives you unlimited AI generations and 4K HDR exports with no watermarks."
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 skew-x-12 translate-x-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-pink-50 text-pink-600 font-bold text-xs uppercase tracking-widest mb-6 border border-pink-100"
          >
            Got Questions?
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about PromptEdit and our AI workflows.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border-2 rounded-[24px] overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-indigo-600 bg-indigo-50/30' : 'border-gray-100 bg-white hover:border-indigo-200'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold pr-4 transition-colors ${openIndex === index ? 'text-indigo-900' : 'text-indigo-950'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'bg-indigo-600 rotate-180' : 'bg-gray-100 rotate-0'}`}>
                  <svg className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-white' : 'text-indigo-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium mb-4">Still have questions?</p>
          <button className="px-8 py-3 bg-indigo-950 text-white font-bold rounded-full hover:bg-indigo-800 transition-colors shadow-lg">
            Contact Support
          </button>
        </div>

      </div>
    </section>
  );
}

function BlogSection() {
  const posts = [
    { title: "How To Add AI Characters To Real Footage", desc: "Learn how to film content and seamlessly animate your AI character with masking and color adjustments." },
    { title: "How to Create CINEMATIC AI Transitions", desc: "Master the Room Grow Effect and Day to Night Hyperlapse using PromptEdit and our prompt guide." },
    { title: "Make AI Thumbnails In 3 Minutes", desc: "Apply our free Triple Threat Formula GPT to generate high-converting YouTube thumbnails fast." }
  ];

  return (
    <section className="py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-widest mb-6">
          Free Resources
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-6 tracking-tight">
          AI Creator Course Tutorials
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
          Stay up to date with our follow-along prompt guides and YouTube editing starter packs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg shadow-indigo-900/5 hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="h-56 bg-gray-200 overflow-hidden relative cursor-pointer">
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-red-500 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-md">
                  Tutorial
                </div>
                <div className="absolute inset-0 bg-indigo-950/30 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
                <img src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop&sig=${i + 10}`} alt="Video Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-indigo-950 mb-3 line-clamp-2 leading-snug group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.desc}
                  </p>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors group/link mt-auto">
                  Watch Now <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative text-white pt-32 pb-12 overflow-hidden bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-bottom bg-no-repeat border-t border-gray-100">
      <div className="absolute inset-0 bg-[#1a0b2e]/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-[#1a0b2e]/80 to-transparent" />

      <div className="absolute top-[-111px] w-full overflow-hidden leading-none z-0 -translate-y-1">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f9fafb" fillOpacity="1" d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,192C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mt-20">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-black tracking-tighter text-white mb-6">
            PromptEdit<span className="text-yellow-400">.</span>
          </div>
          <p className="text-white/70 text-sm mb-6 leading-relaxed">
            The most intuitive video editing tool UI in the world. Powered by ChatGPT and Claude to automate your creative workflow.
          </p>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 text-white/70 hover:text-yellow-400 cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-white/70 hover:text-yellow-400 cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-white/70 hover:text-yellow-400 cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Resources</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">AI Creator Course</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Triple Threat Formula GPT</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">YouTube Starter Pack</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Prompt Guides</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Platform</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Pricing (Free / $20 Pro / $50 Team)</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h4 className="font-bold mb-6 text-lg">Join the waitlist</h4>
          <p className="text-white/70 text-sm mb-4">
            Get lifetime access to the AI Creator Course and PromptEdit updates.
          </p>
          <div className="flex border border-white/20 rounded-full overflow-hidden bg-white/5 backdrop-blur-sm focus-within:border-yellow-400 transition-colors">
            <input type="email" placeholder="email@example.com" className="bg-transparent px-4 py-3 w-full text-sm outline-none text-white placeholder-white/50" />
            <button className="bg-yellow-400 text-indigo-900 font-bold px-6 py-3 text-sm hover:bg-yellow-300 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-white/40 text-xs mt-24 border-t border-white/10 pt-8 relative z-10">
        © {new Date().getFullYear()} PromptEdit. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}