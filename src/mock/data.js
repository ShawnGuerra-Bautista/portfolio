import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Shawn's Portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Shawn Guerra-Bautista.',
  subtitle: 'I am a Software Engineer graduate at Concordia University.',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne:
    'My name is Shawn Guerra-Bautista, and I am a recent graudate in Software Engineering with various academic projects.',
  paragraphTwo:
    "My primary programming language is Java, and I create software using object-oriented design. I'm a hard working invidual, and determined to find solutions to problems. I enjoy problem solving as they remind me of puzzle games.",
  paragraphThree:
    'I am currently seeking for a job as a software developer of any type (e.g. web/mobile/pc/game).',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
