export interface Project {
  id: string;
  number: string;
  name: string;
  tags: string[];
  bgClass: string;
  visual: string;
  href: string;
  featured: boolean;
}

export const ALL_PROJECTS: Project[] = [
  {
    id: "ecommerce-collab",
    number: "01",
    name: "E-commerce Platform (Team Project)",
    tags: ["React", "Express.js", "Node.js", "MongoDB"],
    bgClass: "project-bg--one",
    visual: "E-COM",
    href: "https://bellaluxurycloset.com/",
    featured: true,
  },
  {
    id: "telestation",
    number: "02",
    name: "Telestation Business Website",
    tags: ["MongoDB", "React", "Tailwind", "Responsive"],
    bgClass: "project-bg--two",
    visual: "B2B",
    href: "https://www.tspl-corp.com/",
    featured: true,
  },
  {
    id: "halaa-saudia",
    number: "03",
    name: "HALAA Saudia Business Services Website",
    tags: ["Next.js", "i18n", "Tailwind", "Responsive"],
    bgClass: "project-bg--three",
    visual: "I18N",
    href: "https://halaasaudia.com/",
    featured: true,
  },
  {
    id: "purehygiene",
    number: "04",
    name: "PureHygiene Static Website",
    tags: ["Static Site", "React.js", "Tailwind", "Responsive"],
    bgClass: "project-bg--three",
    visual: "STATIC",
    href: "https://purehygiene.ae/",
    featured: false,
  },
  {
    id: "digtel",
    number: "05",
    name: "Digtel Business Website",
    tags: ["Static Site", "React.js", "Tailwind", "Responsive"],
    bgClass: "project-bg--three",
    visual: "STATIC",
    href: "https://digtel.ae/",
    featured: false,
  },
  {
    id: "xperthands",
    number: "06",
    name: "XpertHands Business Website",
    tags: ["Static Site", "React.js", "Tailwind", "Responsive"],
    bgClass: "project-bg--three",
    visual: "STATIC",
    href: "https://xperthands.com/",
    featured: false,
  },
  {
    id: "danat-al-bahar",
    number: "07",
    name: "Danat Restaurant Website",
    tags: ["Static Site", "React.js", "Tailwind", "Responsive"],
    bgClass: "project-bg--three",
    visual: "STATIC",
    href: "https://danatalbaharuae.com/",
    featured: false,
  },
  {
    id: "planet-pro",
    number: "08",
    name: "Planet Pro Business Website",
    tags: ["Static Site", "React.js", "Tailwind", "Responsive"],
    bgClass: "project-bg--three",
    visual: "STATIC",
    href: "https://planetpro.ae/",
    featured: false,
  },
  {
    id: "devtinder",
    number: "09",
    name: "DevTinder Matching App",
    tags: ["React", "Node.js", "Socket.io", "Tailwind"],
    bgClass: "project-bg--four",
    visual: "MATCH",
    href: "https://example-devtinder.com/",
    featured: false,
  },
];
