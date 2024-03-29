import Mock from "../mock";

const database = {
  information: {
    name: "Naveen Kolambage",
    aboutContent:
      "  Really passionate about Full Stack development and experienced working with ReactJS, NodeJS and related frameworks.  ",
    age: 28,
    phone: "",
    nationality: "Sri Lankan",
    language: "English, Singhalese",
    email: "",
    address: "Auckland, NZ",
    socialLinks: {
      twitter: "https://twitter.com/naveenkolambage",
      pinterest: "",
      behance: "",
      linkedin: "",
      dribbble: "",
      github: "https://github.com/NaveenDK/",
    },
    brandImage: "/images/profile.jpeg",
    aboutImage: "/images/profile.jpeg",
    aboutImageLg: "/images/profile.jpeg",
    cvfile: "/files/NavJS.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "brush-alt",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "Mobile Application",
      icon: "mobile",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "HTML5",
      value: 100,
    },
    {
      title: "CSS3",
      value: 100,
    },
    {
      title: "Javascript",
      value: 100,
    },
    {
      title: "jQuery",
      value: 100,
    },
    {
      title: "ReactJS",
      value: 100,
    },
    {
      title: "Photoshop",
      value: 90,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Accountability tool - Asquad",
      subtitle: "ReactJS, NodeJs , Express, MongoDB ",
      imageUrl: "/images/signup.png",
      largeImageUrl: [
        "/images/overview.png",
        "/images/login.png",
        "/images/review.png",
        "/images/signup.png",
      ],
      url: "https://asquad.app/",
    },
    {
      id: 2,
      title: "Redux Tool kit demo - shop  ",
      subtitle: "ReactJS, Redux toolkit",
      imageUrl: "/images/ReduxToolKit.jpg",
      largeImageUrl: [
        "/images/Redux Toolkit - Demo.png",
        "/images/Redux Toolkit - Demo.png",
      ],
      url: "https://reduxtoolkit-demo-ecommerce.netlify.app/",
    },
    {
      id: 3,
      title: "Notes App ",
      subtitle: "ReactJS, React Hooks, TypeScript ",
      imageUrl: "/images/notes-app-screen_2.png",
      largeImageUrl: [
        "/images/notes-screen_1.png",
        "/images/notes-app-screen_2.png",
        "/images/notes-app-screen_3.png",
        "/images/notes-app-screen_4.png",
      ],
      url: "https://tsxnotesapp.netlify.app/",
    },
    {
      id: 4,
      title: "Deliveroo Mobile App ",
      subtitle: "React Native - EXPO , Sanity-backend",
      imageUrl: "/images/Deliveroo.gif",
      largeImageUrl: ["/images/Deliveroo.gif", "/images/Deliveroo.gif"],
      url: "https://github.com/NaveenDK/deliveroo-expo",
    },
    {
      id: 6,
      title: "Exercise Tracker",
      subtitle: "MERN - MongoDB, Express, ReactJS, NodeJS",
      imageUrl: "/images/DemoExercise.gif",

      largeImageUrl: ["/images/DemoExercise.gif"],
      url: "https://github.com/NaveenDK/exercise-tracker",
    },

    {
      id: 5,
      title: "Shopping Cart - Ecommerce ",
      subtitle: "ReactJS, React Hooks",
      imageUrl: "/images/shopping-cart.gif",
      largeImageUrl: ["/images/shopping-cart.gif", "/images/shopping-cart.gif"],
      url: "https://github.com/NaveenDK/ecommerce-front",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2021 Nov - Present",
        position: "Technical QA",
        company: "Datacom Systems",
        details: "Work as a QA consultants",
        Clients: [

          {
            clientName: "Smartly ",
            clientPeriod: "2024 Feb - present",
            role: "Technical QA",
            responsibilities: [
              "Work within an agile team, participating in agile ceremonies perform functional/UI testing, mastering Azure Devops for test management. ",
              "Work closely with Team members including Business Analysts to refine the user stories to fill gaps. ",
              "Work closely with developers when testing, making sure what needs to be tested is tested ",
              "Deliver under tight deadlines before sprint end. ",
              "Perform Demos for Stakeholders for each story released. ",
            ],
          },


          {
            clientName: "Westpac NZ",
            clientPeriod: "2022 April - 2023 Nov",
            role: "Technical QA",
            responsibilities: [
              "Work within an agile team, participating in agile ceremonies perform functional testing, use tools like JIRA & Zephyr. ",
              "Work with DB2 Database and SQL to perform Database testing. ",
              "Work closely with developers and other team members to refine stories. ",
              "Deliver under pressure. ",
              "Perform Demos for Stakeholders before stories released. ",
            ],
          },
          {
            clientName: "UDC Finance NZ",
            clientPeriod: "2021 Nov - 2022 March",
            role: "Test Analyst",
            responsibilities: [
              "In addition to reporting bugs, suggest solutions to save developer time. ",
              "Work with MySQL Database to perform Database testing. ",
              "Conduct stakeholder demos prior to the release of stories. ",
              "Foster close collaboration with developers and fellow team members to enhance story refinement. ",
            ],
          },
        ],
      },

      {
        id: 4,
        year: "2018 March - 2021 Nov",
        position: "Tech Lead & QA Analyst",
        company: "Digital Collab",
        details:
          "Work on different web-based projects for small to medium businesses - Wordpress, HTML, CSS3, PHP ",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2014 - 2017",
        graduation: "Bachelor of Information 0Sciences",
        university: "Massey University",
      },
      // {
      //   id: 2,
      //   year: "2016 - 2018",
      //   graduation: "Bachelor of Science",
      //   university: "Abc University",
      //   details:
      //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      // },
      // {
      //   id: 3,
      //   year: "2015 - 2016",
      //   graduation: "Higher Schoold Graduation",
      //   university: "Abc College",
      //   details:
      //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      // },
    ],
    relevantCourses: [
      {
        id: 1,
        year: "2020 Sept - 2020 Aug",
        courseName: "Advanced React ",
        courseDetails:
          "128 interactive screencasts spread across 9 modules. Completed Reusability, Performance, React Context, Hooks, React Router and Capstone Project with an introduction to Redux",
        certificate: "https://scrimba.com/certificate/uDR6xbSg/greact",
      },
      // {
      //   id: 2,
      //   year: "2017 Oct - 2017 Nov",
      //   courseName: "Pluralsight Courses ",
      //   courseDetails:
      //     "Completed few courses related to ReactJS, Functional programming ",
      //   multicertificates: [
      //     {
      //       id: 1,
      //       name: "React 17 Getting Started",
      //       url: "https://app.pluralsight.com/achievements/share/f42fa01a-cb54-424a-aaf7-88bc13dbbd25",
      //     },
      //     {
      //       id: 2,
      //       name: "React The Big Picture",
      //       url: "https://app.pluralsight.com/achievements/share/96722e68-38ce-45e9-96a4-cab9af65bc2b",
      //     },
      //     {
      //       id: 3,
      //       name: "Fundamentals of Functional Programming",
      //       url: "https://app.pluralsight.com/achievements/share/2fd2bb07-4e76-4063-971a-d5426949b817",
      //     },
      //   ],
      // },
      // {
      {
        id: 2,
        year: "2019 Aug - 2019 Sept ",
        courseName: "Spotify Clone ",
        courseDetails: "Spotify clone built with SQL, JavaScript, PHP",
        certificate: "https://www.udemy.com/certificate/UC-DLZQJHP3/",
      },
      {
        id: 3,
        year: "2014 Feb - 2017 March",
        courseName: "Bachelor of Information Sciences  - Massey University ",
        courseDetails:
          "Completed courses varying from Programming fundamentals to Advanced Software Engineering Project",
      },
    ],
    relevantProjects: [
      {
        id: 1,
        year: "2014 Feb - 2017 March",
        graduation: "Bachelor of Information 2Sciences",
        university: "Massey University",
      },
      {
        id: 2,
        year: "2014 - 2017",
        graduation: "Bachelor of Information 3Sciences",
        university: "Massey University",
      },
    ],
  },

  blogs: [
    {
      id: 1,
      title: "Accountability for goal setting.",
      featuredImage: "/images/asquad-blog.jpg",
      filesource: "../../blog/accountability-in-goal-setting.md",
      createDay: "30",
      createMonth: "March",
      createYear: "2024",
    }
  ],
  contactInfo: {
    phoneNumbers: ["+6420-40807364"],
    emailAddress: ["naveenkolambage@gmail.com"],
    address: "Auckland,  New Zealand",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
