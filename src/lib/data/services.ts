import type { LanguageData } from "$lib/stores/language";

export const ServiceTitle: LanguageData = {
  fr: "Nos Services",
  en: "Our Services",
};

export const services: {
  title: LanguageData;
  subtitle: LanguageData;
  description: LanguageData;
  mainServices: {
    id: number;
    title: LanguageData;
    description: LanguageData;
    icon: string;
    features: LanguageData[];
  }[];
  technologies: {
    title: LanguageData;
    description: LanguageData;
    content: {
      id: number;
      name: LanguageData;
      description: LanguageData;
      icon: string;
      color: string;
    }[];
  };
} = {
  title: {
    fr: "Nos Services",
    en: "Our Services",
  },
  subtitle: {
    fr: "Des solutions web de pointe avec les technologies les plus rapides au monde",
    en: "Cutting-edge web solutions with the fastest technologies in the world",
  },
  description: {
    fr: "Nous maîtrisons les dernières technologies pour créer des expériences digitales exceptionnelles, performantes et optimisées pour vos utilisateurs.",
    en: "We master the latest technologies to create exceptional, high-performing, and optimized digital experiences for your users.",
  },
  mainServices: [
    {
      id: 1,
      title: {
        fr: "Développement Web",
        en: "Web Development",
      },
      description: {
        fr: "Applications web modernes et performantes construites avec les frameworks les plus rapides du marché.",
        en: "Modern and high-performing web applications built with the fastest frameworks on the market.",
      },
      icon: "🚀",
      features: [
        {
          fr: "Sites web sur mesure",
          en: "Custom websites",
        },
        {
          fr: "Applications web progressives",
          en: "Progressive web apps",
        },
        {
          fr: "E-commerce avancé",
          en: "Advanced e-commerce",
        },
        {
          fr: "API RESTful",
          en: "RESTful API",
        },
      ],
    },
    {
      id: 2,
      title: {
        fr: "Optimisation SEO",
        en: "SEO Optimization",
      },
      description: {
        fr: "Maximisez votre visibilité en ligne avec nos stratégies SEO avancées et techniques d'optimisation.",
        en: "Maximize your online visibility with our advanced SEO strategies and optimization techniques.",
      },
      icon: "📈",
      features: [
        {
          fr: "Audit SEO complet",
          en: "Comprehensive SEO audit",
        },
        {
          fr: "Optimisation technique",
          en: "Technical optimization",
        },
        {
          fr: "Recherche de mots-clés",
          en: "Keyword research",
        },
        {
          fr: "Suivi des performances",
          en: "Performance tracking",
        },
      ],
    },
    {
      id: 3,
      title: {
        fr: "Design UI/UX",
        en: "UI/UX Design",
      },
      description: {
        fr: "Créez des interfaces utilisateur intuitives et attrayantes qui convertissent vos visiteurs en clients.",
        en: "Create intuitive and engaging user interfaces that convert your visitors into customers.",
      },
      icon: "🎨",
      features: [
        {
          fr: "Design responsive",
          en: "Responsive design",
        },
        {
          fr: "Prototypage interactif",
          en: "Interactive prototyping",
        },
        {
          fr: "Tests utilisateur",
          en: "User testing",
        },
        {
          fr: "Expérience mobile optimisée",
          en: "Optimized mobile experience",
        },
      ],
    },
    {
      id: 4,
      title: {
        fr: "Maintenance & Support",
        en: "Maintenance & Support",
      },
      description: {
        fr: "Gardez votre site web à jour, sécurisé et performant avec notre service de maintenance continue.",
        en: "Keep your website up to date, secure, and performing well with our ongoing maintenance service.",
      },
      icon: "🛠️",
      features: [
        {
          fr: "Mises à jour régulières",
          en: "Regular updates",
        },
        {
          fr: "Sécurité renforcée",
          en: "Enhanced security",
        },
        {
          fr: "Monitoring 24/7",
          en: "24/7 monitoring",
        },
        {
          fr: "Support technique",
          en: "Technical support",
        },
      ],
    },
  ],
  technologies: {
    title: {
      fr: "Nos technologies de pointe",
      en: "Our cutting-edge technologies",
    },
    description: {
      fr: "Nous utilisons les technologies les plus performantes pour garantir la rapidité et la fiabilité de vos projets.",
      en: "We use the most efficient technologies to ensure the speed and reliability of your projects.",
    },
    content: [
      {
        id: 1,
        name: {
          fr: "Svelte",
          en: "Svelte",
        },
        description: {
          fr: "Framework JavaScript Moderne",
          en: "Modern JavaScript Framework",
        },
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/svelte.svg",
        color: "#ff3e00",
      },
      {
        id: 5,
        name: {
          fr: "React",
          en: "React",
        },
        description: {
          fr: "Bibliothèque UI populaire",
          en: "Popular UI Library",
        },
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
        color: "#61dafb",
      },
      {
        id: 2,
        name: {
          fr: "Go",
          en: "Go",
        },
        description: {
          fr: "Langage backend performant",
          en: "High-performance backend language",
        },
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/go.svg",
        color: "#00add8",
      },
      {
        id: 3,
        name: {
          fr: "TypeScript",
          en: "TypeScript",
        },
        description: {
          fr: "JavaScript typé et robuste",
          en: "Typed and robust JavaScript",
        },
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg",
        color: "#3178c6",
      },
      {
        id: 4,
        name: {
          fr: "Node",
          en: "Node",
        },
        description: {
          fr: "Runtime JavaScript côté serveur",
          en: "Server-side JavaScript runtime",
        },
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
        color: "#339933",
      },
    ],
  },
};

export type DevelopmentProcessType = {
  title: LanguageData;
  description: LanguageData;
  steps: {
    title: LanguageData;
    description: LanguageData;
  }[];
};

export const developmentProcess: DevelopmentProcessType = {
  title: {
    fr: "Notre processus de développement",
    en: "Our development process",
  },
  description: {
    fr: "Une approche méthodique et agile pour garantir la réussite de votre projet.",
    en: "A methodical and agile approach to ensure the success of your project.",
  },
  steps: [
    {
      title: {
        fr: "Analyse & Stratégie",
        en: "Analysis & Strategy",
      },
      description: {
        fr: "Compréhension approfondie de vos besoins et objectifs business.",
        en: "In-depth understanding of your business needs and objectives.",
      },
    },
    {
      title: {
        fr: "Design & Prototypage",
        en: "Design & Prototyping",
      },
      description: {
        fr: "Création d'interfaces utilisateur intuitives et attrayantes.",
        en: "Creating intuitive and engaging user interfaces.",
      },
    },
    {
      title: {
        fr: "Développement",
        en: "Development",
      },
      description: {
        fr: "Codage avec les meilleures pratiques et technologies modernes.",
        en: "Coding with best practices and modern technologies.",
      },
    },
    {
      title: {
        fr: "Test & Déploiement",
        en: "Testing & Deployment",
      },
      description: {
        fr: "Validation complète et mise en ligne sécurisée.",
        en: "Thorough validation and secure deployment.",
      },
    },
  ],
};
