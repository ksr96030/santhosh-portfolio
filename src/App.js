import React, { useEffect } from "react";

const Section = ({ title, children }) => (
  <section className="max-w-5xl mx-auto px-4 py-12 fade-in-up">
    <h2>{title}</h2>
    {children}
  </section>
);

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll("section").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-10 text-center shadow-md">
        <h1 className="text-5xl font-extrabold">Santhosh Reddy</h1>
        <p className="text-lg mt-2">Software Engineer | Full Stack Developer</p>
        <div className="mt-4 space-x-4">
          <a href="mailto:santhoshreddyk00@gmail.com">Email</a>
          <a href="https://github.com/ksr96030" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/komatireddy-santhosh-reddy-48765b191/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a
            href="/resume.pdf"
            download
            className="ml-4 inline-block bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300"
          >
            📥 Download Resume
          </a>
        </div>
      </header>

      <Section title="Summary">
        <p className="text-lg leading-relaxed text-center">
          Software Engineer with 4+ years of experience designing, building, and deploying scalable backend systems and full stack web applications. Skilled in Java, Spring Boot, React.js, AWS, Docker, and Kubernetes with strong experience in HIPAA-compliant systems, cloud architecture, and Agile development.
        </p>
      </Section>

      <Section title="Experience">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-indigo-200">Flatiron Health – Software Engineer Intern</h3>
            <p className="text-sm italic">Jan 2025 - Present</p>
            <ul>
              <li>Reduced API latency by 30% through optimized Spring Boot services and database indexing.</li>
              <li>Refactored React.js clinician dashboards to improve UI performance by 35% and UX.</li>
              <li>Implemented GitHub Actions + Jenkins CI/CD pipelines with full staging/production automation.</li>
              <li>Maintained ingestion services on Kubernetes (AWS EKS) with 99.9% uptime and health checks.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-200">Symphony Talent – Associate Engineer</h3>
            <p className="text-sm italic">Mar 2022 - Aug 2023</p>
            <ul>
              <li>Developed REST APIs with Spring Boot and Kafka to boost pipeline throughput by 40%.</li>
              <li>Added Redis caching, improved SQL performance by 30% for critical dashboards.</li>
              <li>Secured microservices with OAuth2 and JWT, reducing unauthorized access incidents.</li>
              <li>Deployed containerized apps to Kubernetes clusters using Helm and GitOps principles.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-200">IQVIA – Full Stack Developer</h3>
            <p className="text-sm italic">Feb 2020 - Feb 2022</p>
            <ul>
              <li>Built ETL pipelines with Python & Airflow for processing healthcare datasets with 25% better validation accuracy.</li>
              <li>Created dashboards using React & Spring Boot to streamline analytics across global trial teams.</li>
              <li>Used Kafka + MongoDB to stream and store clinical trial data in near real-time.</li>
              <li>Managed deployments via Docker + Kubernetes on AWS and Azure.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Projects">
        <ul>
          <li><strong>Auto Parts Marketplace:</strong> Full-stack web app with Spring Boot + React + MySQL. Role-based JWT auth, listing monetization system, fully responsive UI.</li>
          <li><strong>AI Resume Tailoring Tool:</strong> Java Spring Boot backend + OpenAI APIs to analyze resumes, extract skills, and match against job descriptions. Used LLMs + NLP techniques.</li>
          <li><strong>Cloud Billing Tracker:</strong> AWS Lambda + DynamoDB serverless app that tracks S3 & EC2 billing in real-time. Integrated CloudWatch and SNS alerts.</li>
        </ul>
      </Section>

      <Section title="Skills">
        <p className="text-center">
          <strong>Languages:</strong> Java, JavaScript, Python, SQL, C++<br />
          <strong>Frontend:</strong> React.js, Redux, Tailwind CSS, Bootstrap<br />
          <strong>Backend:</strong> Spring Boot, REST APIs, Hibernate<br />
          <strong>DevOps:</strong> Docker, Kubernetes, Jenkins, GitHub Actions<br />
          <strong>Cloud:</strong> AWS (S3, EC2, Lambda, EKS), Azure App Services<br />
          <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB<br />
          <strong>Others:</strong> Apache Kafka, Redis, Airflow, OAuth2, JWT, JUnit, TestNG
        </p>
      </Section>

      <Section title="Contact Me">
        <form action="https://formspree.io/f/mvgqwdna" method="POST" className="space-y-4 max-w-xl mx-auto">
          <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white" />
          <textarea name="message" placeholder="Your Message" rows="4" required className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white"></textarea>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500">
            Send ✉️
          </button>
        </form>
      </Section>

      <footer>
        <p>© {new Date().getFullYear()} Santhosh Reddy • Designed by Santhosh Reddy Komatireddy</p>
      </footer>
    </div>
  );
};

export default App;
