// ALL site content lives here. Edit this file, not the components.
// TODO items are marked below — replace them with your real values.

export const profile = {
  name: "Soumodip Ghosh",
  role: "Data & AI/ML Engineer | Backend Developer",
  statement:
    "Building data-driven and AI-powered applications with Python, machine learning, and scalable backend technologies.",
  degree: "Computer Science & Engineering — Data Science",
  college: "MCKV Institute of Engineering",
  gradYear: "2027",
  cgpa: "8.85/10",
  photo: "/images/profile.jpg", // TODO: add your photo at public/images/profile.jpg
  email: "soumodip615c@gmail.com", // TODO: replace
  github: "https://github.com/soumodip615c",
  linkedin: "https://www.linkedin.com/in/soumodip-ghosh-615c2005",
  leetcode: "https://leetcode.com/u/soumodip615c/", // TODO: replace
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  intro:
  "I'm an engineer at heart and a data scientist by training, curious about how AI can be made practical, reliable, and useful.",
  detail:
    "I work with Python, SQL, FastAPI, PostgreSQL, TensorFlow, PyTorch, and computer vision to turn real-world problems into working applications.",
  education: {
    degree: "B.Tech in CSE (Data Science)",
    school: "MCKV Institute of Engineering",
    years: "2023–2027",
    cgpa: "CGPA: 8.85/10",
  },
};

export const skills = [
  { title: "Programming", items: ["Python", "SQL", "Java", "R"] },
  { title: "Backend & APIs", items: ["FastAPI", "RESTful APIs", "SQLAlchemy", "Streamlit"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL"] },
  {
    title: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "Keras", "XGBoost", "CNN", "ConvLSTM", "YOLOv8", "Hugging Face Transformers"],
  },
  {
    title: "Computer Vision & NLP",
    items: ["OpenCV", "YOLOv8 Pose", "Whisper", "WhisperX", "Pyannote.audio", "LLaMA", "BART", "T5"],
  },
  {
    title: "Data & Analytics",
    items: ["Pandas", "NumPy", "Power BI", "Tableau", "Excel", "Apache Spark"],
  },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Git"] },
];

export const experience = [
  {
    company: "Infosys Springboard",
    role: "AI & ML Virtual Intern",
    period: "Sep 2025 – Nov 2025",
    points: [
      "Built and evaluated 5+ supervised and unsupervised machine-learning models.",
      "Improved model accuracy by up to 15% through hyperparameter tuning and cross-validation.",
      "Optimized ETL/preprocessing pipelines and reduced model training time by 30%.",
      "Worked across 3 Agile sprints using Jira, Confluence, and Git.",
      "Automated performance monitoring across 10+ metrics.",
    ],
  },
];

// Screenshots: put real files in public/images/projects/ with these names.
// Missing files show a clean placeholder automatically.
// TODO: set each `github` to the real repository URL.
export const projects = [
  {
    name: "AgriGuru",
    tagline: "Intelligent Agriculture Advisory Platform",
    description:
      "An AI-powered agriculture advisory platform designed to assist smallholder farmers with crop disease detection, treatment recommendations, speech interaction, analytics, and subsidy information.",
    tech: ["Python", "Streamlit", "FastAPI", "PostgreSQL", "SQLAlchemy", "YOLOv8", "Groq API", "Llama 3.3 70B", "OpenCV", "PyTorch"],
    metrics: [
      { to: 36000, suffix: "+", label: "labeled leaf images" },
      { to: 38, label: "disease classes" },
      { text: "90–95%", label: "classification accuracy" },
      { to: 10, suffix: "+", label: "RESTful APIs" },
    ],
    highlights: [],
    images: ["/images/projects/agriguru-1.png", "/images/projects/agriguru-2.png"],
    github: "https://github.com/soumodip615c/AgriGuru.git",
  },
  {
    name: "Chlorophyll-a",
    tagline: "Water Quality Analytics System",
    description:
      "A machine-learning water-quality monitoring system that analyzes satellite data to predict chlorophyll-a concentration and generate visual insights.",
    tech: ["Python", "FastAPI", "TensorFlow", "Keras", "OpenCV", "NumPy", "Docker", "AWS EC2"],
    metrics: [
      { to: 10000, suffix: "+", label: "satellite data points per run" },
      { to: 92, prefix: "~", suffix: "%", label: "prediction accuracy" },
    ],
    highlights: ["ConvLSTM deep-learning model", "Docker + AWS EC2 deployment", "Heatmap visualization"],
    images: ["/images/projects/chlorophyll-1.png", "/images/projects/chlorophyll-2.png"],
    github: "https://github.com/soumodip615c/chlorophyll-a-app-final.git",
  },
  {
    name: "Live Meeting Summarizer",
    tagline: "AI Meeting Intelligence System",
    description:
      "An AI-powered meeting assistant that converts conversations into transcriptions, identifies speakers, and generates structured meeting summaries.",
    tech: ["Python", "Streamlit", "Whisper", "WhisperX", "Pyannote.audio", "LLaMA 3.1", "BART", "T5", "Torchaudio"],
    metrics: [{ to: 50, suffix: "+", label: "sessions tested" }],
    highlights: [
      "Automated transcription",
      "Speaker diarization",
      "AI-generated summaries",
      "Decisions and action-item extraction",
    ],
    images: ["/images/projects/meeting-1.png", "/images/projects/meeting-2.png"],
    github: "https://github.com/Speech-Summarizer-Application-IF-SB/soumodip_ghosh.git",
  },
  {
    name: "gym_assistant_ai",
    tagline: "Real-Time Fitness Form Analysis",
    description:
      "A computer-vision fitness assistant that analyzes exercise form, tracks body keypoints, counts repetitions, and provides workout feedback.",
    tech: ["Python", "YOLOv8 Pose", "OpenCV", "Streamlit", "PyTorch", "Ultralytics"],
    metrics: [
      { to: 17, label: "body keypoints per frame" },
      { text: "90–95%", label: "rep-counting accuracy" },
      { to: 4, label: "exercise categories" },
    ],
    highlights: ["Real-time pose analysis", "Automated posture overlays"],
    images: ["/images/projects/gym-1.png", "/images/projects/gym-2.png"],
    github: "https://github.com/soumodip615c/gym_assistant_ai.git",
  },
];

export const certifications = [
  { title: "Data Analytics with Python", issuer: "Google" },
  { title: "Power BI for Data Analysis", issuer: "Microsoft Learn" },
  { title: "Artificial Intelligence", issuer: "Infosys Springboard" },
  { title: "Generative AI", issuer: "Infosys Springboard" },
  { title: "Introduction to Data Science", issuer: "Infosys Springboard" },
];
