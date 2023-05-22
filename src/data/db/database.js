import Mock from "../mock";

const database = {
  information: {
    name: "Naveen Kolambage",
    aboutContent:
      "I currently work at Datacom as a Functional Tester,  I am a fullstack developer at heart I am looking to transition to a role focused on ReactJS, React Native, NodeJS and or other technologies ",
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
      linkedin: "https://www.linkedin.com/in/naveendk/",
      dribbble: "",
      github: "https://github.com/NaveenDK/",
    },
    brandImage: "/images/brand-image.jpg",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: "/files/NaveenCV.pdf",
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
      imageUrl: "/images/AsquadDemo.gif",
      largeImageUrl: ["/images/AsquadDemo.gif"],
      url: "https://asquad.onrender.com/",
    },
    {
      id: 2,
      title: "Shopping Cart - Ecommerce ",
      subtitle: "ReactJS, React Hooks",
      imageUrl: "/images/shopping-cart.gif",
      largeImageUrl: ["/images/shopping-cart.gif", "/images/shopping-cart.gif"],
      url: "https://github.com/NaveenDK/ecommerce-front",
    },
    {
      id: 3,
      title: "Deliveroo Mobile App ",
      subtitle: "React Native - EXPO , Sanity-backend",
      imageUrl: "/images/Deliveroo.gif",
      largeImageUrl: ["/images/Deliveroo.gif", "/images/Deliveroo.gif"],
      url: "https://github.com/NaveenDK/deliveroo-expo",
    },
    {
      id: 4,
      title: "Exercise Tracker",
      subtitle: "MERN - MongoDB, Express, ReactJS, NodeJS",
      imageUrl: "/images/ExerciseTracker.gif",

      largeImageUrl: ["/images/ExerciseTracker.gif"],
      url: "https://github.com/NaveenDK/exercise-tracker",
    },
    {
      id: 5,
      title: "TimeLine Widget - wordpress plugin",
      subtitle: "PHP, JS, HTML and CSS",
      imageUrl: "/images/portfolio-image-temp.jpg",
      largeImageUrl: ["/images/portfolio-image-temp-large"],
      Url: "#",
    },
    {
      id: 6,
      title: "Permissions Module",
      subtitle: "NodeJS, ReactJS, MongoDB, DigitalOcean",
      imageUrl: "/images/portfolio-image-temp.jpg",
      largeImageUrl: ["https://github.com/NaveenDK/permissions-nodebackend"],
      url: "https://github.com/NaveenDK/permissions-nodebackend",
    },
    {
      id: 7,
      title: "Star Wars Responsive Website",
      subtitle: "HTML, CSS",
      imageUrl: "/images/portfolio-image-temp.jpg",
      largeImageUrl: ["/images/portfolio-image-temp-large"],
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
            clientName: "Westpac NZ",
            clientPeriod: "2022 April - present",
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
      {
        id: 2,
        year: "2017 Oct - 2017 Nov",
        courseName: "Pluralsight Courses ",
        courseDetails:
          "Completed few courses related to ReactJS, Functional programming ",
        multicertificates: [
          {
            id: 1,
            name: "React 17 Getting Started",
            url: "https://app.pluralsight.com/achievements/share/f42fa01a-cb54-424a-aaf7-88bc13dbbd25",
          },
          {
            id: 2,
            name: "React The Big Picture",
            url: "https://app.pluralsight.com/achievements/share/96722e68-38ce-45e9-96a4-cab9af65bc2b",
          },
          {
            id: 3,
            name: "Fundamentals of Functional Programming",
            url: "https://app.pluralsight.com/achievements/share/2fd2bb07-4e76-4063-971a-d5426949b817",
          },
        ],
      },
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
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["+6420-40807364"],
    emailAddress: ["naveenkolambage@gmail.com"],
    address: "Glenfield, Auckland,  New Zealand",
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
