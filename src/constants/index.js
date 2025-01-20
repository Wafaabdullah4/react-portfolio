import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, Laravel and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Full Stack Developer",
    company: "DATASYNC.",
    description: `Collaborated on large-scale projects with notable clients such as Waroeng Steak. Developed modules like Waroeng Laporan, Waroeng Cash Management, and Waroeng Daily, enhancing operational efficiency. Spearheaded the development of a Supply Chain Management System to track sales H+1 across nationwide outlets, significantly improving data processing speed by 90%. Also contributed to projects for SMC Hospital (Cash Management and Invoicing) and Asta Mart (Purchase Order), delivering robust, user-friendly solutions with modern frameworks and libraries.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "PHP", "Laravel"],
  },
  {
    year: "May 2023 - September 2023",
    role: "Internship, Full Stack Developer",
    company: "Icommits",
    description: `Developed and maintained dynamic web applications leveraging Laravel for backend and Bootstrap for responsive UI design. Implemented efficient database operations using MySQLi. Collaborated with team members to ensure timely delivery of robust and user-friendly solutions.`,
    technologies: ["Laravel", "Bootstrap", "MYSQL"],
  },
  {
    year: "January 2023 - May 2023",
    role: "Internship, Front-End Developer",
    company: "PT. Sarana Pactindo",
    description: `Contributed significantly in developing web applications by utilizing Vue.js and Vuetify. Ensured seamless integration with APIs to enhance application functionality. Collaborated with designers to align the application's UI with Figma prototypes and improve user experience.`,
    technologies: ["JavaScript", "Vue.Js", "Vuetify", "API"],
  },
];

export const PROJECTS = [
  {
    title: "Supply Chain Management System",
    image: project1,
    description:
      "A system designed to optimize and monitor the supply chain process, including real-time tracking, inventory management, and sales performance analysis across multiple outlets.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "Mysqli", "Jquery", "Bootstrap"],
    link: "#",
  },
  {
    title: "Curriculum Vitae With React",
    image: project2,
    description:
      "A dynamic and interactive online CV application built using React, showcasing professional experiences, skills, and personal projects with seamless navigation.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "https://cv-wafaabdullah.vercel.app/"
  },
  {
    title: "Recommended Films Website",
    image: project3,
    description:
      "An engaging platform to explore and discover movies based on user preferences, featuring curated recommendations, ratings, and a user-friendly interface.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
       link: "https://wafa-films.vercel.app/",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A comprehensive blogging platform that allows users to create, publish, and manage content, featuring rich text editing, interactive comments, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    link: "#"
  },  
];

export const CONTACT = {
  address: "Bandung, Jawa Barat, Indonesia",
  phoneNo: "+62 8516 184 5683 ",
  email: "wafa.abdullahnurbani@gmail.com",
};
