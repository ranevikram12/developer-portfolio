import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Hunter Bost",
  title: "Hi all, I'm Hunter Bost",
  description:
    "I'm a passionate Web and APP developer with experience developing frontent applications with React.js, React native, android native and Web3 Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:hunterdev.bost@gmail.com",
  linkedin: "#",
  github: "#",
  instagram: "#",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "WEB and APP DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building Hybird Apps in React Native"),
      ],
      softwareSkills: [
       
       
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "React Native",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
       
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },

  {
    Stack: "App development", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },

  {
    Stack: "Web development", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },

  {
    Stack: "Web3 development", //Insert stack or technology you have experience in
    progressPercentage: "75", //Insert relative proficiency in percentage
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of California - Los Angeles",
    subHeader: "Bachelor's Degree in Computer Science",
    duration: "September 2010 - April 2014",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "React js and react native Developer",
    company: "Super Software",
    companyLogo: "/img/icons/common/meganos.png",
    date: "Aug 2022 - Present",
    desc: "I crafted frontent for diverse web apps and mobile apps. I have added react native module in android java and react native",
  },
  {
    role: "React js developer",
    company: "Grafana",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "Jan 2022 - Sept 2023",
    desc: "Build CRM in react js and work on web3 integration",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Android Developer",
    company: "98ideas",
    companyLogo: "/img/icons/common/zrtech.jpeg",
    date: "Aug 2022 - Jun 2023",
    desc: "Craft android java apps for transit sysytem",
  },
  {
    role: "Android Developer",
    company: "Pali Audio",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2021 - Oct 2021",
    desc: "Build audio player for app for android",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Mercy App and Web view",
    desc: "Frontend Development  built with react.js and react native and android java",
    link: "https://apps.apple.com/us/app/mymercy/id1670219321",
  },
  {
    name: "React CRM",
    desc: "React crm created for property management. It is build in react js. Tools that are used are MUI, redux",
    link: "https://crm-eclectic.netlify.app/app/crm/property",
  },
  {
    name: "WereNode App",
    desc: "An android app build in react native. For managing vehicle charhing and token payment.Tech used are React native",
    link: "https://play.google.com/store/apps/details?id=com.pali.paliaudioapp&hl=en_IN&gl=US",
  },

  {
    name: "Web3 staking app",
    desc: "Web3 app which use for staking tokens, Tech used are React js, Solidity",
    link: "https://stakinggtt.netlify.app/",
  },
  {
    name: "Pali Audio",
    desc: "An android app build for play audio player. Tech used are android java and web scarping in java",
    link: "https://play.google.com/store/apps/details?id=com.pali.paliaudioapp&hl=en_IN&gl=US",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hunter Bost",
  description: greetings.description,
  author: "Hunter Bost",
  image: "",
  url: "",
  keywords: [
   
    "Portfolio",
   
  ],
};
