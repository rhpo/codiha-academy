import type { LanguageData } from "$lib/stores/language";

export const ProjectData: {
  title: LanguageData;
  description: LanguageData;
} = {
  title: {
    fr: "Créé par",
    en: "Created by",
  },
  description: {
    fr: "Découvrez nos projets récents qui illustrent notre expertise et notre passion pour le développement web.",
    en: "Explore our recent projects that showcase our expertise and passion for web development.",
  },
};

type Project = {
  id: number;
  title: LanguageData;
  description: LanguageData;
  image: string;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: {
      fr: "E-commerce de luxe",
      en: "Luxury E-commerce",
    },
    description: {
      fr: "Une plateforme de vente en ligne complète avec gestion des stocks et livraison de papier peint.",
      en: "A complete online sales platform with inventory management and wallpaper delivery.",
    },
    image: "/projects/maisonsdantan.png",
    url: "https://www.maisonsdantan.co",
    tags: ["E-commerce", "SvelteKit", "Go"],
  },
  {
    id: 3,
    title: {
      fr: "Site Conciergerie Dubai",
      en: "Dubai Concierge Site",
    },
    description: {
      fr: "Site pour une conciergerie à Dubai avec réservation en ligne et informations sur les services.",
      en: "Website for a concierge service in Dubai with online booking and information about services.",
    },
    image: "/projects/servana.png",
    url: "https://servanacircle.com",
    tags: ["Vitrine", "Svelte", "Design"],
  },
  {
    id: 2,
    title: {
      fr: "Site Présentation de restaurant",
      en: "Restaurant Presentation Site",
    },
    description: {
      fr: "Site web vitrine pour un restaurant avec menu interactif.",
      en: "Showcase website for a restaurant with an interactive menu.",
    },
    image: "/projects/burgertimes.png",
    url: "https://burgertimes.netlify.app",
    tags: ["Web", "SvelteKit", "Firebase"],
  },

  {
    id: 4,
    title: {
      fr: "Site E-commerce",
      en: "E-commerce Site",
    },
    description: {
      fr: "Plateforme de vente en ligne pour un commerce algérien.",
      en: "Online sales platform for an Algerian business.",
    },
    image: "/projects/destoluxe.png",
    url: "https://destoluxe.netlify.app",
    tags: ["E-commerce", "Svelte", "PostgreSQL"],
  },
  {
    id: 5,
    title: {
      fr: "Site SocialGYM Dubai",
      en: "SocialGYM Dubai Site",
    },
    description: {
      fr: "Site web full-stack avec panneau d'administration & gestion des utilisateurs.",
      en: "Full-stack website with admin panel & user management.",
    },
    image: "/projects/socialgym.png",
    url: "#",
    tags: ["Svelte", "NodeJS", "MongoDB"],
  },
  {
    id: 6,
    title: {
      fr: "Portfolio créatif",
      en: "Creative Portfolio",
    },
    description: {
      fr: "Portfolio interactif pour un studio de design avec animations et galerie photo.",
      en: "Interactive portfolio for a design studio with animations and photo gallery.",
    },
    image: "/projects/portfolio.png",
    url: "https://rhpo.netlify.app",
    tags: ["Portfolio", "SvelteKit", "NodeJS"],
  },
];
