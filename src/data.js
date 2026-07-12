export const cvData = {
  profile: {
    name: "Abdellrahman Abdullah AlHanaqtah", 
    title: "Intelligent Systems Engineer", // [cite: 3]
    phone: "+962772647298", // [cite: 2]
    email: "hanaqtahabdellrahman@gmail.com", // [cite: 4]
    location: "Amman, Jordan", // [cite: 5]
    github: "https://github.com/abdellrahmanHq", // [cite: 6]
    linkedin: "https://www.linkedin.com/in/abdellrahman-al-hanaqtah-2b34b8242/", // [cite: 7]
    summary: "Dedicated and driven Intelligent Systems Engineer with a strong foundation in machine learning, data science, computer vision, robotics, and web development. I bring strong problem-solving and critical thinking skills, work effectively in teams with demonstrated leadership, and manage time efficiently while communicating clearly to build positive professional relationships." // [cite: 8, 9, 10]
  },
  
  experience: [
    {
      role: "Full Stack Developer Intern", // [cite: 14]
      company: "Vertex Solutions", // [cite: 14]
      period: "June 2026 - Present", // [cite: 14]
      isCurrent: true,
      hasCertificate: true // [cite: 14]
    },
    {
      role: "Teacher Assistant", // [cite: 13]
      company: "Tafilah Technical University", // [cite: 13]
      period: "1 March 2026 - 1 June 2026", // [cite: 13]
      isCurrent: false,
      hasCertificate: false
    }
  ],

  // Separating projects by type makes a tabbed interface super easy to implement later
  projects: {
    aiAndRobotics: [
      {
        title: "Monitoring Submarine Robot (MSR)", // [cite: 23]
        github: "https://github.com/abdellrahmanHq", // [cite: 23]
        tags: ["ROS2", "YOLO", "OpenCV", "Python", "C++"] // [cite: 25, 26]
      },
      {
        title: "GimniBot", // [cite: 22]
        github: "https://github.com/abdellrahmanHq", // [cite: 22]
        tags: ["React", "Node.js", "JavaScript"] // [cite: 25]
      }
    ],
    fullStackWeb: [
      {
        title: "E Commerce App", // [cite: 21]
        github: "https://github.com/abdellrahmanHq", // [cite: 21]
        tags: ["React", ".NET", "PostgreSQL", "SQL databases"] // [cite: 25, 26]
      },
      {
        title: "My Blog", // [cite: 20]
        github: "https://github.com/abdellrahmanHq", // [cite: 20]
        tags: ["Ruby on Rails", "PostgreSQL", "Bootstrap"] // [cite: 25, 26]
      },
      {
        title: "IMDB Clone App", // [cite: 19]
        github: "https://github.com/abdellrahmanHq", // [cite: 19]
        tags: ["JavaScript", "HTML5", "CSS", "Ajax"] // [cite: 25, 26]
      },
      {
        title: "Responsive Web App", // [cite: 18]
        github: "https://github.com/abdellrahmanHq", // [cite: 18]
        tags: ["HTML5", "CSS", "JavaScript"] // [cite: 25]
      }
    ]
  },

  skills: {
    languages: ["Python", "Ruby", "C", "C++", "C#", "JavaScript", "HTML5", "CSS"], // [cite: 25]
    technologies: [
      "React", "Ruby on Rails", "Node.js", ".NET", "SQL databases (PostgreSQL)", // [cite: 25, 26]
      "Bootstrap", "Ajax", "TensorFlow", "Scikit-Learn", "PyTorch", "OpenCV", // [cite: 26]
      "YOLO", "MATLAB", "LEGO Mindstorms", "ROS2", "Linux", "Git/GitHub" // [cite: 26]
    ]
  },

  education: [
    {
      degree: "Bachelor in Intelligent Systems Engineering", // [cite: 28]
      institution: "Tafilah Technical University", // [cite: 29]
      period: "2021-2026", // [cite: 29]
      grade: "93%", // [cite: 29]
      hasCertificate: true // [cite: 29]
    },
    {
      degree: "Erasmus+ Program", // [cite: 29]
      institution: "Technical University of Ostrava", // [cite: 29]
      period: "", 
      grade: "",
      hasCertificate: false
    },
    {
      degree: "English for Business Interviews Workshop", // [cite: 30]
      institution: "Berlitz Language Center, Jordan", // [cite: 30]
      period: "",
      grade: "",
      hasCertificate: true // [cite: 30]
    }
  ]
};