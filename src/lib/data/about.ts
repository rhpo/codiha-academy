import type { LanguageData } from "$lib/stores/language";

type About = {
  title: LanguageData;
  subtitle: LanguageData;
  description: LanguageData;
  values: {
    title: LanguageData;
    content: {
      id: number;
      title: LanguageData;
      description: LanguageData;
      icon: string;
    }[];
  };
  stats: {
    id: number;
    number: string;
    label: LanguageData;
  }[];
  cta: {
    title: LanguageData;
    description: LanguageData;
    action: LanguageData;
  };
};

export const about: About = {
  title: {
    fr: "Qui sommes-nous ?",
    en: "Who are we?",
  },
  subtitle: {
    fr: "Une équipe passionnée au service de vos projets digitaux",
    en: "A passionate team at the service of your digital projects",
  },
  description: {
    fr: "Chez CODIHA Agency, nous sommes une équipe de développeurs, designers et stratèges digitaux unis par une passion commune : créer des expériences web exceptionnelles qui transforment les idées en succès.",
    en: "At CODIHA Agency, we are a team of developers, designers, and digital strategists united by a common passion: creating exceptional web experiences that turn ideas into success.",
  },
  values: {
    title: {
      en: "Our Values",
      fr: "Nos Valeurs",
    },
    content: [
      {
        id: 1,
        title: {
          fr: "Innovation",
          en: "Innovation",
        },
        description: {
          fr: "Nous restons à la pointe des dernières technologies pour offrir des solutions modernes et performantes.",
          en: "We stay at the forefront of the latest technologies to deliver modern and high-performing solutions.",
        },
        icon: "💡",
      },
      {
        id: 2,
        title: {
          fr: "Qualité",
          en: "Quality",
        },
        description: {
          fr: "Chaque projet est réalisé avec le plus grand soin, respectant les meilleures pratiques du développement web.",
          en: "Every project is carried out with the utmost care, following the best practices in web development.",
        },
        icon: "⭐",
      },
      {
        id: 3,
        title: {
          fr: "Collaboration",
          en: "Collaboration",
        },
        description: {
          fr: "Nous travaillons main dans la main avec nos clients pour comprendre leurs besoins et dépasser leurs attentes.",
          en: "We work hand in hand with our clients to understand their needs and exceed their expectations.",
        },
        icon: "🤝",
      },
      {
        id: 4,
        title: {
          fr: "Agilité",
          en: "Agility",
        },
        description: {
          fr: "Notre approche flexible nous permet de nous adapter rapidement aux évolutions de vos projets.",
          en: "Our flexible approach allows us to quickly adapt to changes in your projects.",
        },
        icon: "🚀",
      },
    ],
  },
  stats: [
    {
      id: 3,
      number: "98%",
      label: {
        fr: "Clients satisfaits",
        en: "Satisfied clients",
      },
    },
    {
      id: 2,
      number: "5+",
      label: {
        fr: "Années d'expérience",
        en: "Years of experience",
      },
    },
    {
      id: 4,
      number: "24/7",
      label: {
        fr: "Support client",
        en: "Customer support",
      },
    },
  ],
  cta: {
    title: {
      en: "Ready to make your website?",
      fr: "Prêts à faire votre site internet?",
    },
    description: {
      en: "Contact us to get started on your project.",
      fr: "Contactez-nous pour commencer votre projet.",
    },
    action: {
      en: "Get in touch",
      fr: "Contactez-nous!",
    },
  },
};
