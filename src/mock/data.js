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
    title: 'Big Owl - Capstone Project',
    date: 'Sep 2020 – Apr 2021',
    info: 'An Android based app that automate the attendance of users at a given time and location similar to a clock-in clock-out system',
    info2: 'Java, and Firebase',
    url: 'https://github.com/Landry333/Big-Owl',
    doc: '', // if no doc, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Python Questions data set',
    date: 'Mar 2020 – Apr 2020',
    info: 'Created a document-oriented database, Couchbase (with SQL-like queries), using an existing data set, and then writing several queries for it.',
    info2: 'Couchbase',
    url: 'https://github.com/ShawnGuerra-Bautista/python_questions_couchbase_project',
    doc: '', // if no doc, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'MovieLens SQL Queries',
    date: 'Jan 2020 – Feb 2020',
    info: 'A small project involving the creation of SQL queries to obtain the desired data from a rational database.',
    info2: 'PostgreSQL',
    url: 'https://github.com/ShawnGuerra-Bautista/Mini_SQL_Scripts_Project',
    doc: '', // if no doc, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mini Naïve Bayes Classifier',
    date: 'Nov 2019',
    info: 'A trained AI (on a small data set) which classifies whether a text has a negative or positive connotation using Naïve Bayes classifier',
    info2: 'Python',
    url: 'https://github.com/ShawnGuerra-Bautista/Word_Classifier_AI_Project/tree/Remastered/src',
    doc: '', // if no doc, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'X-rudder',
    date: 'Oct 2019 – Nov 2019',
    info: 'A 2-player game with an AI designed with a heuristic function and a Minimax algorithm.',
    info2: 'Python',
    url: 'https://github.com/ShawnGuerra-Bautista/x-rudder_game_AI_project/tree/master/src',
    doc: '', // if no doc, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'HTTP Client/Server',
    date: 'Sep 2019 – Oct 2019',
    info: 'A HTTP client and server software using TCP/UDP protocols to replicate the behaviour of HTTP requests/responses.',
    info2: 'Java',
    url: 'https://github.com/ShawnGuerra-Bautista/TCP-UDP_project',
    doc: '', // if no doc, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'K9Mail - Mini Capstone Project',
    date: 'Jan 2019 – Apr 2019',
    info: 'A mini capstone project that involves in update and create new features of an existing open source Android based application called K9Mail.',
    info2: 'Java, and GreenDAO',
    url: 'https://github.com/refatK/SOEN390-Project',
    doc: '', // if no doc, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Library Catalog',
    date: 'Aug 2018 – Dec 2018',
    info: 'A website to manage inventory and users of a library catalog system',
    info2: 'Angular, MySQL, bootstrap, and Spring (Java)',
    url: 'https://github.com/kevin-tan/LibraryCatalog',
    doc: '', // if no doc, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Huston Answers',
    date: 'Jan 2018 – Apr 2018',
    info: 'A Q&A website that allows users to ask questions (create a post) and give answers to them (reply to a post).',
    info2: 'Angular, MySQL, bootstrap, and Spring (Java)',
    url: 'https://github.com/kevin-tan/Q-AWebApplication',
    doc: '', // if no doc, the button will not show up
  },
];

export const skillsData = [
  {
    id: nanoid(),
    type: 'Programming Language',
    skillNameList: ['Java', 'SQL', 'HTML/CSS', 'JavaScript', 'Python'],
  },
  {
    id: nanoid(),
    type: 'Framework',
    skillNameList: ['Spring', 'Angular', 'React'],
  },
  {
    id: nanoid(),
    type: 'Other',
    skillNameList: ['Git (Github)', 'PostgreSQL', 'Firebase', 'JUnit/Mockito', 'UML'],
  },
  {
    id: nanoid(),
    type: 'Operating System (OS)',
    skillNameList: [
      'POP_OS! (Debian + Ubuntu based)',
      'Ubuntu (Debian-based)',
      'Mangaro (Arch-based)',
      'Windows',
    ],
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
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shawnguerrab/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ShawnGuerra-Bautista',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
