import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Briefcase, Code, Database, Cloud, Brain, ChevronDown, Download, Menu, X, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import profileImg from './assets/profile.jpg'; // <-- fixed image import

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "AI & Machine Learning Engineer";

  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Scroll handler for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['hero', 'experience', 'projects', 'skills'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Intelligent SQL-Gen",
      subtitle: "NLP to SQL via RAG Architecture",
      description: "Engineered automated pipelines and a vector-based retrieval system to perform semantic schema-linking for natural language queries. Implemented rigorous evaluation frameworks to maximize SQL accuracy and eliminate hallucinations.",
      tags: ["Azure OpenAI", "LangChain", "FAISS", "Streamlit"],
      icon: "💬",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Deep Farming",
      subtitle: "Crop Disease Surveillance",
      description: "Developed a smart farming solution using CNN models and image processing to detect crop diseases with over 95% accuracy. Deployed via Flask for real-time predictions.",
      tags: ["Python", "TensorFlow", "CNN", "Flask"],
      icon: "🌱",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Healthcare Guidance Navigator",
      subtitle: "Agentic AI Clinical Support",
      description: "Developed a healthcare chatbot providing document-specific clinical guidance from PDFs/CSV files using Agentic AI and intelligent retrieval pipelines.",
      tags: ["Agentic AI", "ChromaDB", "LangGraph", "Azure OpenAI"],
      icon: "🏥",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const skills = [
    { category: "Generative AI", items: ["RAG", "Prompt Engineering", "LLMs", "Vector DBs"], icon: <Sparkles className="w-5 h-5 text-purple-400" /> },
    { category: "Machine Learning", items: ["Python", "TensorFlow", "Scikit-learn", "NLP"], icon: <Brain className="w-5 h-5 text-blue-400" /> },
    { category: "Cloud & Data", items: ["AWS", "Azure OpenAI", "SQL", "FAISS"], icon: <Cloud className="w-5 h-5 text-cyan-400" /> }
  ];

  return (
    <div className="bg-black text-white min-h-screen relative font-sans selection:bg-purple-500/30">

      {/* --- AI-THEMED BACKGROUND --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Abstract AI Background Image */}
        <div
          className="absolute inset-0 opacity-20 grayscale scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blue(4px)'
          }}
        ></div>
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'linear-gradient(#4a4a4a 1px, transparent 1px), linear-gradient(90deg, #4a4a4a 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>
        {/* Ambient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-900/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-900/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'backdrop-blur-xl bg-black/70 border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-xl font-black tracking-tighter">
            ROHIT <span className="text-purple-500">HARNE</span>
          </div>
          <div className="hidden md:flex gap-10 items-center">
            {['Experience', 'Projects', 'Skills'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs uppercase tracking-widest font-bold hover:text-purple-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-400'}`}>
                {item}
              </a>
            ))}
            <a href="mailto:rohitharne21@gmail.com" className="px-6 py-2 bg-purple-600 rounded-full text-xs font-bold hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/20">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              Available for New Projects
            </div>
            <h1 className="text-7xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
              AI <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ENGINEER</span>
            </h1>
            <div className="h-12 mb-6">
              <p className="text-2xl md:text-3xl font-light text-gray-400">
                {typedText}<span className="text-purple-500 animate-pulse">|</span>
              </p>
            </div>
            <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed">
              Specializing in <span className="text-white">RAG architectures</span>, production-ready ML solutions, and Agentic workflows. Based in Pune.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all flex items-center gap-2">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/Rohit_Harne.Resume--.pdf" download className="px-8 py-4 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              {/* FIXED IMAGE */}
              <img
                src={profileImg} // <-- fixed import
                alt="Rohit Harne Profile"
                className="relative w-80 h-96 md:w-96 md:h-[500px] object-cover rounded-3xl border border-white/10 shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 p-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Data Science</p>
                    <p className="text-xl font-bold">Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 z-10 relative bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center italic tracking-widest uppercase">Work Experience</h2>
          <div className="relative border-l border-white/10 pl-8 ml-4">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
            <p className="text-purple-400 font-bold mb-1">AI & ML Intern</p>
            <h3 className="text-2xl font-bold mb-2 text-white">Vcitysoft Pvt. Ltd. <span className="text-gray-500 font-normal text-lg">| 6 Months</span></h3>
            <ul className="space-y-4 text-gray-400 mt-6 list-disc pl-4">
              <li>Built scalable, production-ready Python applications using OOP and Flask.</li>
              <li>Developed end-to-end AI solutions across financial and healthcare domains.</li>
              <li>Worked extensively with SQL databases and ML libraries to extract insights.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase">Featured Projects</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all hover:-translate-y-2 border-t-purple-500/30">
                <div className="text-4xl mb-6">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold tracking-widest uppercase text-gray-300 border border-white/5">{tag}</span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-white transition-colors">
                  VIEW ON GITHUB <Github className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10">
                <div className="mb-6">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-6 tracking-wide uppercase">{skill.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map(item => (
                    <span key={item} className="px-4 py-2 bg-black/40 border border-white/5 rounded-xl text-sm text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <p className="text-2xl font-bold tracking-tighter">Let's build something <span className="text-purple-500">intelligent.</span></p>
            <p className="text-gray-500 mt-2">© 2024 Rohit Harne | Pune, Maharashtra</p>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com" className="p-4 bg-white/5 rounded-full hover:bg-purple-600 transition-all border border-white/10"><Linkedin className="w-6 h-6" /></a>
            <a href="https://github.com" className="p-4 bg-white/5 rounded-full hover:bg-purple-600 transition-all border border-white/10"><Github className="w-6 h-6" /></a>
            <a href="mailto:rohitharne21@gmail.com" className="p-4 bg-white/5 rounded-full hover:bg-purple-600 transition-all border border-white/10"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;
