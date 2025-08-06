import React, { useEffect, useState, useRef } from "react";

// Custom SVG Icons
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

const Code = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const Database = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path>
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"></path>
  </svg>
);

const Cloud = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>
);

const Send = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const Star = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Trophy = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const Target = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Briefcase = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>
  </svg>
);

// Particle background component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.1)';

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

// Skill progress bar component
const SkillBar = ({ skill, level, delay = 0 }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{skill}</span>
        <span className="text-sm text-indigo-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div 
          className={`h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out ${
            animate ? `w-[${level}%]` : 'w-0'
          }`}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

// Project card component
const ProjectCard = ({ title, description, tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 ${
        index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            {title}
          </h3>
          <ExternalLink 
            className={`w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-all duration-300 ${
              isHovered ? 'transform rotate-45' : ''
            }`} 
          />
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-gray-700 text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Experience timeline component
const ExperienceCard = ({ company, role, period, achievements, index }) => {
  return (
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
          {achievements.map((achievement, i) => (
            <li key={i} className="flex items-start text-gray-300">
              <Zap className="w-4 h-4 text-indigo-400 mt-1 mr-3 flex-shrink-0" />
              <span className="leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Stats component
const StatsSection = () => {
  const stats = [
    { icon: Trophy, label: "Years Experience", value: 4, suffix: "+" },
    { icon: Code, label: "Projects Completed", value: 15, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 50, suffix: "+" },
    { icon: Target, label: "Success Rate", value: 99, suffix: "%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-500 hover:transform hover:scale-105"
        >
          <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-white mb-1">
            <AnimatedCounter end={stat.value} />
            {stat.suffix}
          </div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

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

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const skills = {
    "Languages": [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 }
    ],
    "Frontend": [
      { name: "React.js", level: 88 },
      { name: "Redux", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 }
    ],
    "Backend": [
      { name: "Spring Boot", level: 92 },
      { name: "REST APIs", level: 90 },
      { name: "Hibernate", level: 85 },
      { name: "Microservices", level: 80 }
    ],
    "DevOps & Cloud": [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 82 },
      { name: "Jenkins", level: 80 }
    ]
  };

  const projects = [
  {
    title: "Auto Parts Marketplace",
    description: "Full-stack web application with Spring Boot backend and React frontend. Features role-based JWT authentication, listing monetization system, and fully responsive UI design.",
    tech: ["Spring Boot", "React", "MySQL", "JWT", "Tailwind CSS"],
    link: "https://github.com/ksr96030/MyProject"
  }
];

  const experiences = [
    {
      company: "Flatiron Health",
      role: "Software Engineer Intern",
      period: "Jan 2025 - Present",
      achievements: [
        "Reduced API latency by 30% through optimized Spring Boot services and database indexing",
        "Refactored React.js clinician dashboards to improve UI performance by 35% and UX",
        "Implemented GitHub Actions + Jenkins CI/CD pipelines with full staging/production automation",
        "Maintained ingestion services on Kubernetes (AWS EKS) with 99.9% uptime and health checks"
      ]
    },
    {
      company: "Symphony Talent",
      role: "Associate Engineer",
      period: "Mar 2022 - Aug 2023",
      achievements: [
        "Developed REST APIs with Spring Boot and Kafka to boost pipeline throughput by 40%",
        "Added Redis caching, improved SQL performance by 30% for critical dashboards",
        "Secured microservices with OAuth2 and JWT, reducing unauthorized access incidents",
        "Deployed containerized apps to Kubernetes clusters using Helm and GitOps principles"
      ]
    },
    {
      company: "IQVIA",
      role: "Full Stack Developer",
      period: "Feb 2020 - Feb 2022",
      achievements: [
        "Built ETL pipelines with Python & Airflow for processing healthcare datasets with 25% better validation accuracy",
        "Created dashboards using React & Spring Boot to streamline analytics across global trial teams",
        "Used Kafka + MongoDB to stream and store clinical trial data in near real-time",
        "Managed deployments via Docker + Kubernetes on AWS and Azure"
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
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

      {/* Stats Section */}
      <Section title="By the Numbers" className="bg-gray-800/50">
        <StatsSection />
      </Section>

      {/* About/Summary Section */}
      <Section title="About Me">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-500">
            <p className="text-lg leading-relaxed text-center text-gray-300">
              I'm a passionate Software Engineer with 4+ years of experience designing, building, and deploying 
              <span className="text-indigo-400 font-semibold"> scalable backend systems</span> and 
              <span className="text-purple-400 font-semibold"> full stack web applications</span>. 
              My expertise spans Java, Spring Boot, React.js, AWS, Docker, and Kubernetes, with strong experience in 
              <span className="text-green-400 font-semibold"> HIPAA-compliant systems</span>, 
              cloud architecture, and Agile development methodologies.
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Technical Skills" className="bg-gray-800/30">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div key={category} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-500">
              <div className="flex items-center mb-6">
                {category === "Languages" && <Code className="w-6 h-6 text-indigo-400 mr-2" />}
                {category === "Frontend" && <Star className="w-6 h-6 text-purple-400 mr-2" />}
                {category === "Backend" && <Database className="w-6 h-6 text-green-400 mr-2" />}
                {category === "DevOps & Cloud" && <Cloud className="w-6 h-6 text-blue-400 mr-2" />}
                <h3 className="text-lg font-semibold text-white">{category}</h3>
              </div>
              {skillList.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill.name} 
                  level={skill.level}
                  delay={categoryIndex * 200 + index * 100}
                />
              ))}
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
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

      {/* Projects Section */}
      <Section title="Featured Projects" className="bg-gray-800/30">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <a href={project.link} target="_blank" rel="noreferrer">
        <ProjectCard key={index} {...project} index={index} />
      </a>
    ))}
  </div>
</Section>

      {/* Contact Section */}
<Section title="Get In Touch">
  <div className="max-w-2xl mx-auto">
    <form 
      action="https://formspree.io/f/mvgqwdna" 
      method="POST" 
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-500"
    >
      <div className="mb-6">
        <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
        <input type="text" name="name" required className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>

      <div className="mb-6">
        <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
        <input type="email" name="email" required className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>

      <div className="mb-6">
        <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
        <textarea name="message" rows="4" required className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
      </div>

      <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 flex items-center gap-2">
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  </div>
</Section>

{/* Footer */}
<footer>
  <p>© {new Date().getFullYear()} Santhosh Reddy • Designed by Santhosh Reddy Komatireddy</p>
</footer>
</div>
);
};

export default App;