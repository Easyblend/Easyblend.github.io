export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "CrowdTest — Crowdsourced QA Platform",
    description:
      "A live SaaS connecting devs with real human testers for pre-launch bug hunting. Next.js 16 monorepo (marketing + product) sharing one Postgres via Prisma 7, Supabase Auth with edge-middleware RBAC (DEV/TESTER/ADMIN), Cloudinary-backed screenshots, Groq LLM bug-report rewriter, weekly Vercel Cron digests over Brevo SMTP, and full Sentry tracing across client/server/edge.",
    image: "/assets/projects/crowdtest.png",
    link: "https://crowdtest.dev",
    tech: [
      "devicon-nextjs-plain",
      "devicon-react-original",
      "devicon-typescript-plain",
      "devicon-tailwindcss-plain",
      "devicon-prisma-plain",
      "devicon-postgresql-plain",
      "devicon-supabase-plain",
      "devicon-vercel-plain",
    ],
    featured: true,
  },
  {
    title: "Biological Sample Management",
    description:
      "Full-stack platform for tracking biological samples — React + TypeScript frontend, FastAPI + SQLAlchemy backend, Postgres, dockerized for reproducible deploys.",
    image: "/assets/projects/sporeBio.png",
    link: "https://github.com/Easyblend/Biological-Sample-Management",
    tech: [
      "devicon-react-original",
      "devicon-typescript-plain",
      "devicon-python-plain",
      "devicon-tailwindcss-plain",
      "devicon-fastapi-plain",
      "devicon-postgresql-plain",
      "devicon-docker-plain",
    ],
    featured: true,
  },
  {
    title: "Spatial Showdown — Backend",
    description:
      "Realtime multiplayer game backend built with Spring Boot, WebSockets, and Postgres. Infra provisioned with Terraform.",
    image: "/assets/projects/spatialBackend.png",
    link: "https://github.com/Easyblend/Spatial-Showdown",
    tech: [
      "devicon-spring-plain",
      "devicon-java-plain",
      "devicon-socketio-plain",
      "devicon-postgresql-plain",
      "devicon-terraform-plain",
    ],
    featured: true,
  },
  {
    title: "Flexicoin",
    description:
      "Web3 wallet that lets users buy crypto & FX with mobile money and send funds to friends — built on React + Firebase.",
    image: "/assets/projects/flexicoin.gif",
    link: "https://github.com/Easyblend/Flexicoins",
    tech: [
      "devicon-javascript-plain",
      "devicon-react-original",
      "devicon-firebase-plain",
      "devicon-tailwindcss-plain",
    ],
    featured: true,
  },
  {
    title: "DASTA — Drone Control",
    description:
      "Manual control surface for a self-piloted agricultural drone with live video feed and flight-path management.",
    image: "/assets/projects/Dasta.png",
    link: "https://github.com/Easyblend/DASTA-APPLICATION",
    tech: [
      "devicon-threejs-original",
      "devicon-javascript-plain",
      "devicon-html5-plain",
      "devicon-css3-plain",
    ],
  },
  {
    title: "Vacation Planner",
    description:
      "Collaborative itinerary builder for trips with friends. Shareable plans, group polling, and budget tracking.",
    image: "/assets/projects/vacation_planner.png",
    link: "https://github.com/Easyblend/Vacation-Planner",
    tech: [
      "devicon-react-original",
      "devicon-typescript-plain",
      "devicon-bootstrap-plain",
    ],
  },
  {
    title: "Spatial Showdown — Frontend",
    description:
      "React + Material UI client for the realtime spatial game with live data visualization and player interaction.",
    image: "/assets/projects/spatialFrontend.png",
    link: "https://github.com/Easyblend/Spatial-Showdown-frontend",
    tech: [
      "devicon-react-original",
      "devicon-javascript-plain",
      "devicon-materialui-plain",
    ],
  },
  {
    title: "Police Map Reporting",
    description:
      "Community safety platform for reporting & tracking neighborhood incidents with real-time map clustering.",
    image: "/assets/projects/policeMap.png",
    link: "https://github.com/Easyblend/Map-Reporting-System",
    tech: [
      "devicon-javascript-plain",
      "devicon-react-original",
      "devicon-firebase-plain",
    ],
  },
  {
    title: "Film Blend",
    description:
      "Movie discovery app with personalized recommendations, sleek UI, and analytics on watch habits.",
    image: "/assets/projects/film_blend.png",
    link: "https://github.com/Easyblend/Film-Blend",
    tech: [
      "devicon-react-original",
      "devicon-chartjs-plain",
      "devicon-firebase-plain",
      "devicon-tailwindcss-plain",
    ],
  },
  {
    title: "Zero Hunger",
    description:
      "Platform for tracking food resources & reducing waste through data visualization and donor coordination.",
    image: "/assets/projects/zero-hunger.png",
    link: "https://github.com/Easyblend/Zero-hunger",
    tech: [
      "devicon-react-original",
      "devicon-chartjs-plain",
      "devicon-firebase-plain",
      "devicon-bootstrap-plain",
    ],
  },
  {
    title: "Medical Chatbot",
    description:
      "Conversational assistant for triage-style medical Q&A through a clean web interface.",
    image: "/assets/projects/medicabot.png",
    link: "https://github.com/Easyblend/Medical-chat-bot",
    tech: [
      "devicon-javascript-plain",
      "devicon-html5-plain",
      "devicon-bootstrap-plain",
    ],
  },
  {
    title: "California Housing Prediction",
    description:
      "ML pipeline predicting California housing prices — feature engineering, regression models, evaluation in scikit-learn.",
    image: "/assets/projects/california-price.png",
    link: "https://github.com/Easyblend/California-Housing-Prediction",
    tech: [
      "devicon-python-plain",
      "devicon-numpy-original",
      "devicon-pandas-original",
      "devicon-scikitlearn-plain",
    ],
  },
  {
    title: "Java Contact Manager",
    description:
      "Desktop contact app with JavaFX UI and SQLite persistence for fast organization of contacts.",
    image: "/assets/projects/javaContact.png",
    link: "https://github.com/Easyblend/ContactApp",
    tech: ["devicon-java-plain", "devicon-sqlite-plain"],
  },
  {
    title: "Polymorphic Agent Simulation",
    description:
      "Java multi-agent system simulation showcasing polymorphism & emergent behaviors of agents.",
    image: "/assets/projects/java-polymorphic.png",
    link: "https://github.com/Easyblend/Java-A-MAS1-Polymorphic-Simulation",
    tech: ["devicon-java-plain", "devicon-sqlite-plain"],
  },
];

export const skillGroups: { label: string; items: { name: string; icon: string }[] }[] = [
  {
    label: "Frontend",
    items: [
      { name: "Frameworks: React, Next.js", icon: "devicon-react-original colored" },
      { name: "Language: TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "UI: Tailwind CSS, Material-UI", icon: "devicon-tailwindcss-plain colored" },
      { name: "Unit Testing: Jest, React Testing Library", icon: "devicon-jest-plain colored" },
      { name: "E2E Testing: Cypress, Playwright", icon: "devicon-cypress-plain colored" }
    ],
  },

  {
    label: "Backend",
    items: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: ".NET (C#)", icon: "devicon-dotnetcore-plain colored" },
      { name: "Spring Boot", icon: "devicon-spring-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
  },

  {
    label: "Testing & Performance",
    items: [
      { name: "k6", icon: "devicon-plain" },
      { name: "Playwright", icon: "devicon-plain" },
      { name: "Cypress", icon: "devicon-plain" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "OctoPerf", icon: "devicon-plain" },
      { name: "Jest", icon: "devicon-jest-plain colored" },
      { name: "React Testing Library", icon: "devicon-plain" }
    ],
  },

  {
    label: "Infrastructure & DevOps",
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Azure", icon: "devicon-azure-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Jenkins", icon: "devicon-jenkins-line colored" },
      { name: "GitHub Actions", icon: "devicon-githubactions-plain" }
    ],
  }
];
