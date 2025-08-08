import React, { useEffect, useState, useRef } from "react";

/* ----------------------------- SVG ICONS ----------------------------- */
const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
  </svg>
);
const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25l-9 6.75-9-6.75" />
  </svg>
);
const Github = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const Linkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const Download = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16l-4-4m0 0l4-4m-4 4h16m-7 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
  </svg>
);
const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

/* ---------- Simple inline tech icons (no external images required) ---------- */
const IconTile = ({ bg = "bg-gray-800/60", fg = "text-white", children }) => (
  <div className={`relative w-full h-full ${bg} border border-gray-700 rounded-xl flex items-center justify-center overflow-hidden group hover:border-indigo-500 transition-all duration-300`}>
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-colors" />
    <div className={`transform group-hover:scale-110 transition-transform duration-300 ${fg}`}>{children}</div>
  </div>
);

const JsIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
    <rect x="4" y="4" width="40" height="40" rx="6" fill="#F7DF1E"/>
    <text x="15" y="32" fontSize="20" fontFamily="Arial, Helvetica, sans-serif" fill="#000">JS</text>
  </svg>
);
const HtmlIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
    <path d="M8 4h32l-3 36-13 4-13-4L8 4z" fill="#E44D26"/><path d="M24 41l10-3 2-26H24v29z" fill="#F16529"/>
    <path d="M24 16h11l-.3 3H24v-3zm0 8h10.4l-.5 3.9L24 30v-6z" fill="#fff"/>
    <path d="M24 16v3H13.6l-.2-3H24zm0 8v6l-8.8-2.2-.4-3.8H24z" fill="#EBEBEB"/>
  </svg>
);
const CssIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
    <path d="M8 4h32l-3 36-13 4-13-4L8 4z" fill="#1572B6"/><path d="M24 41l10-3 2-26H24v29z" fill="#33A9DC"/>
    <path d="M24 16h11l-.3 3H24v-3zm0 8h10.4l-.5 3.9L24 30v-6z" fill="#fff"/>
    <path d="M24 16v3H13.7l-.2-3H24zm0 8v6l-8.9-2.2-.3-3.8H24z" fill="#EBEBEB"/>
  </svg>
);
const TsIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
    <rect x="4" y="4" width="40" height="40" rx="6" fill="#3178C6"/>
    <text x="13" y="32" fontSize="20" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">TS</text>
  </svg>
);
const ReactIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="3" fill="#61DAFB"/>
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#61DAFB" strokeWidth="2"/>
    <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)" stroke="#61DAFB" strokeWidth="2"/>
    <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)" stroke="#61DAFB" strokeWidth="2"/>
  </svg>
);
const JavaIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
    <path d="M32 10c8 8-8 10 0 18" stroke="#EA4335" strokeWidth="2" fill="none"/>
    <path d="M20 40c6 4 18 4 24 0" stroke="#4285F4" strokeWidth="2" fill="none"/>
    <path d="M18 46c8 6 20 6 28 0" stroke="#34A853" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="34" r="1.5" fill="#FBBC05"/>
  </svg>
);
const PythonIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
    <path d="M34 10h-8a10 10 0 00-10 10v6h18a6 6 0 006-6v-4a6 6 0 00-6-6z" fill="#3776AB"/>
    <circle cx="28" cy="16" r="2" fill="#fff"/>
    <path d="M30 54h8a10 10 0 0010-10v-6H30a6 6 0 01-6-6v-4a6 6 0 016-6" fill="#FFD343"/>
    <circle cx="36" cy="48" r="2" fill="#fff"/>
  </svg>
);
const SpringIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" fill="#6DB33F"/>
    <path d="M34 18c-6 0-10 5-10 10-4 0-8-3-10-7 1 8 7 14 14 14 8 0 12-7 12-12 0-1 0-2-.2-3A10 10 0 0034 18z" fill="#fff"/>
  </svg>
);
const MicroservicesIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
    <circle cx="16" cy="16" r="6" fill="#8B5CF6"/><circle cx="48" cy="16" r="6" fill="#10B981"/>
    <circle cx="16" cy="48" r="6" fill="#F59E0B"/><circle cx="48" cy="48" r="6" fill="#3B82F6"/>
    <path d="M22 16h20M16 22v20M48 22v20M22 48h20" stroke="#9CA3AF" strokeWidth="2"/>
  </svg>
);
const DBIcon = () => (
  <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
    <ellipse cx="32" cy="16" rx="20" ry="8" fill="#00758F"/>
    <path d="M12 16v24c0 4.4 9 8 20 8s20-3.6 20-8V16" stroke="#00758F" strokeWidth="2" fill="none"/>
    <path d="M12 28c0 4.4 9 8 20 8s20-3.6 20-8" stroke="#00758F" strokeWidth="2" fill="none"/>
  </svg>
);
const DockerIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
    <rect x="14" y="24" width="10" height="10" fill="#0DB7ED"/>
    <rect x="26" y="24" width="10" height="10" fill="#0DB7ED"/>
    <rect x="38" y="24" width="10" height="10" fill="#0DB7ED"/>
    <rect x="26" y="36" width="10" height="10" fill="#0DB7ED"/>
    <rect x="38" y="36" width="10" height="10" fill="#0DB7ED"/>
    <path d="M10 40c2 8 10 12 22 12 14 0 20-6 22-12-6 1-10 0-14-3H24c-4 3-8 4-14 3z" fill="#0DB7ED"/>
  </svg>
);
const K8sIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
    <polygon points="32,8 54,20 54,44 32,56 10,44 10,20" fill="#326CE5"/>
    <circle cx="32" cy="32" r="8" fill="#fff"/>
  </svg>
);
const AWSIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
    <text x="10" y="34" fontSize="22" fontFamily="Arial, Helvetica, sans-serif" fill="#FF9900">aws</text>
    <path d="M12 44c8 6 28 6 40-2" stroke="#FF9900" strokeWidth="2" fill="none"/>
  </svg>
);
const JenkinsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="20" fill="#D33833"/>
    <circle cx="32" cy="28" r="8" fill="#fff"/>
    <rect x="22" y="36" width="20" height="8" rx="4" fill="#fff"/>
  </svg>
);

/* -------- Certification issuer icons -------- */
const MicrosoftIcon = () => (
  <svg width="46" height="46" viewBox="0 0 44 44">
    <rect width="20" height="20" x="2" y="2" fill="#F25022"/><rect width="20" height="20" x="22" y="2" fill="#7FBA00"/>
    <rect width="20" height="20" x="2" y="22" fill="#00A4EF"/><rect width="20" height="20" x="22" y="22" fill="#FFB900"/>
  </svg>
);
const KongIcon = () => (
  <svg width="46" height="46" viewBox="0 0 64 64">
    <path d="M32 8l18 14-6 24H20l-6-24L32 8z" fill="#1AAE9F"/>
    <text x="26" y="42" fontSize="14" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">K</text>
  </svg>
);
const UdemyIcon = () => (
  <svg width="46" height="46" viewBox="0 0 64 64">
    <path d="M12 20l20-10 20 10v24a8 8 0 01-8 8H20a8 8 0 01-8-8V20z" fill="#A435F0"/>
    <text x="24" y="44" fontSize="16" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">U</text>
  </svg>
);

/* ----------------------- PARTICLE BACKGROUND ------------------------ */
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const setSize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    setSize();

    const particles = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx:(Math.random()-0.5)*0.5, vy:(Math.random()-0.5)*0.5, size: Math.random()*2+1 });
    }
    const animate = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "rgba(99,102,241,0.1)";
      particles.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>canvas.width)p.vx*=-1; if(p.y<0||p.y>canvas.height)p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill();});
      requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

/* ----------------------------- HELPERS ----------------------------- */
const Section = ({ title, children, className = "" }) => (
  <section className={`relative max-w-6xl mx-auto px-4 py-16 ${className}`}>
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
    </div>
    {children}
  </section>
);

/* ----------------------------- CARDS ------------------------------ */
const ProjectCard = ({ title, description, tech, href }) => {
  const [hover, setHover] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block max-w-xl w-full"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{title}</h3>
            <ExternalLink className={`w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-all duration-300 ${hover ? "transform rotate-45" : ""}`} />
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span key={i} className="px-3 py-1 bg-gray-700 text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

const ExperienceCard = ({ company, role, period, achievements, index }) => (
  <div className={`relative mb-12 fade-in-up`} style={{ animationDelay: `${index * 200}ms` }}>
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-gray-900 z-10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-ping opacity-20" />
      </div>
      <div className="flex-grow h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent ml-4" />
    </div>
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 ml-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-xl font-bold text-white mb-1 md:mb-0">{company}</h3>
        <span className="text-indigo-400 font-medium">{period}</span>
      </div>
      <h4 className="text-lg text-indigo-300 mb-4">{role}</h4>
      <ul className="space-y-2">
        {achievements.map((a, i) => (
          <li key={i} className="flex items-start text-gray-300">
            <Zap className="w-4 h-4 text-indigo-400 mt-1 mr-3 flex-shrink-0" />
            <span className="leading-relaxed">{a}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ------------------------------ APP ------------------------------- */
const App = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-fade-in-up")),
      { threshold: 0.1 }
    );
    document.querySelectorAll("section").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const experiences = [
    {
      company: "Flatiron Health",
      role: "Software Engineer Intern",
      period: "Jan 2025 - Present",
      achievements: [
        "Reduced API latency by 30% through optimized Spring Boot services and database indexing",
        "Refactored React.js clinician dashboards to improve UI performance by 35% and UX",
        "Implemented GitHub Actions + Jenkins CI/CD pipelines with full staging/production automation",
        "Maintained ingestion services on Kubernetes (AWS EKS) with 99.9% uptime and health checks",
      ],
    },
    {
      company: "Symphony Talent",
      role: "Associate Engineer",
      period: "Mar 2022 - Aug 2023",
      achievements: [
        "Developed REST APIs with Spring Boot and Kafka to boost pipeline throughput by 40%",
        "Added Redis caching, improved SQL performance by 30% for critical dashboards",
        "Secured microservices with OAuth2 and JWT, reducing unauthorized access incidents",
        "Deployed containerized apps to Kubernetes clusters using Helm and GitOps principles",
      ],
    },
    {
      company: "IQVIA",
      role: "Full Stack Developer",
      period: "Feb 2020 - Feb 2022",
      achievements: [
        "Built ETL pipelines with Python & Airflow for processing healthcare datasets with 25% better validation accuracy",
        "Created dashboards using React & Spring Boot to streamline analytics across global trial teams",
        "Used Kafka + MongoDB to stream and store clinical trial data in near real-time",
        "Managed deployments via Docker + Kubernetes on AWS and Azure",
      ],
    },
  ];

  // Skills tiles (icons + labels only)
  const skills = [
    { name: "Java", Icon: JavaIcon },
    { name: "Python", Icon: PythonIcon },
    { name: "JavaScript", Icon: JsIcon },
    { name: "TypeScript", Icon: TsIcon },
    { name: "HTML5", Icon: HtmlIcon },
    { name: "CSS3", Icon: CssIcon },
    { name: "React", Icon: ReactIcon },
    { name: "Spring Boot", Icon: SpringIcon },
    { name: "Microservices", Icon: MicroservicesIcon },
    { name: "MySQL", Icon: DBIcon },
    { name: "Docker", Icon: DockerIcon },
    { name: "Kubernetes", Icon: K8sIcon },
    { name: "AWS", Icon: AWSIcon },
    { name: "Jenkins", Icon: JenkinsIcon },
  ];

  const certifications = [
    // NEW AWS certs
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "Aug 2027",
      Icon: AWSIcon,
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "Aug 2027",
      Icon: AWSIcon,
    },
    // Existing
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "Nov 2024 – Nov 2025",
      Icon: MicrosoftIcon,
    },
    {
      title: "Microservices Foundations Professional Certificate",
      issuer: "Kong",
      date: "May 2025",
      Icon: KongIcon,
    },
    {
      title: "The Complete Java Development Bootcamp",
      issuer: "Udemy",
      date: "Sep 2022",
      Icon: UdemyIcon,
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden">
      <ParticleBackground />

      {/* HERO */}
      <header className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-gray-900/50"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Santhosh Reddy
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              <span className="block">Software Engineer</span>
              <span className="text-indigo-400 font-semibold">Full Stack Developer</span>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Crafting scalable backend systems and intuitive user experiences with 4+ years of expertise in modern web technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:santhoshreddyk00@gmail.com"
              className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://github.com/ksr96030"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-indigo-500 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/komatireddy-santhosh-reddy-48765b191/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/25 hover:scale-105"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-indigo-400" />
        </div>
      </header>

      {/* ABOUT */}
      <Section title="About Me">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-500">
            <p className="text-lg leading-relaxed text-center text-gray-300">
              I'm a passionate Software Engineer with 4+ years of experience designing, building, and deploying
              <span className="text-indigo-400 font-semibold"> scalable backend systems</span> and
              <span className="text-purple-400 font-semibold"> full stack web applications</span>. My expertise spans
              Java, Spring Boot, React.js, AWS, Docker, and Kubernetes, with strong experience in
              <span className="text-green-400 font-semibold"> HIPAA-compliant systems</span>, cloud architecture, and
              Agile development methodologies.
            </p>
          </div>
        </div>
      </Section>

      {/* SKILLS: tiles with inline SVG icons + labels */}
      <Section title="Technical Skills" className="bg-gray-800/30">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {skills.map(({ name, Icon }, idx) => (
            <div key={name + idx} className="w-28 h-28">
              <IconTile>
                <Icon />
              </IconTile>
              <p className="mt-2 text-center text-sm text-gray-300">{name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Professional Experience">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500" />
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* EDUCATION (below Experience) */}
      <Section title="Education">
        <div className="max-w-4xl mx-auto grid gap-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xl font-semibold text-indigo-200">Master of Science, Information Technology</h3>
              <span className="text-indigo-400">May 2025</span>
            </div>
            <p className="text-gray-300">Clark University, Worcester, MA, USA</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xl font-semibold text-indigo-200">
                Bachelor’s in Electronics and Communication Engineering
              </h3>
              <span className="text-indigo-400">Aug 2022</span>
            </div>
            <p className="text-gray-300">Institute of Aeronautical Engineering, Hyderabad, India</p>
          </div>
        </div>
      </Section>

      {/* CERTIFICATIONS (after Education) */}
      <Section title="Certifications" className="bg-gray-800/30">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map(({ title, issuer, date, Icon }) => (
            <div key={title} className="flex items-center gap-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gray-800/60 border border-gray-700 flex items-center justify-center">
                <Icon />
              </div>
              <div>
                <h4 className="text-sm text-indigo-300">{issuer}</h4>
                <p className="text-white font-semibold leading-snug">{title}</p>
                <p className="text-xs text-gray-400 mt-1">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS (single, centered) */}
      <Section title="Featured Project">
        <div className="max-w-4xl mx-auto flex justify-center">
          <ProjectCard
            href="https://github.com/ksr96030/MyProject"
            title="Auto Parts Marketplace"
            description="Full-stack web application with Spring Boot backend and React frontend. Features role-based JWT authentication, listing monetization system, and fully responsive UI design."
            tech={["Spring Boot", "React", "MySQL", "JWT", "Tailwind CSS"]}
          />
        </div>
      </Section>

      {/* CONTACT (Formspree) */}
      <Section title="Get In Touch">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-500">
            <p className="text-lg text-gray-300 mb-8 text-center">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>

            <form action="https://formspree.io/f/mvgqwdna" method="POST" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-0"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-0"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-0"
              />

              {/* spam honeypot */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />
              <input type="hidden" name="_subject" value="Portfolio Contact - Santhosh Reddy" />

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Santhosh Reddy Komatireddy 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
