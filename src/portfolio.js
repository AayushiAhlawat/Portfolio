/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// //SEO Related settings
const seo = {
  title: "Aayushi Ahlawat Portfolio",
  description:
    "Dynamic full-stack developer passionate about creating sustainable tech solutions, using end-to-end expertise to drive transformative outcomes.",
  og: {
    title: "Aayushi Ahlawat Portfolio",
    type: "website",
    url: "http://aayushiahlawat.com/",
  },
};

//Home Page
const greeting = {
  title: "Aayushi Ahlawat",
  logo_name: "Aayushi Ahlawat",
  subTitle:
    "Dynamic full-stack developer passionate about creating sustainable tech solutions, using end-to-end expertise to drive transformative outcomes.",
  resumeLink:
    "https://shorturl.at/TZuTD",
  portfolio_repository: "https://github.com/AayushiAhlawat/masterPortfolio",
  githubProfile: "https://github.com/AayushiAhlawat",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/AayushiAhlawat",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aayushi-ahlawat/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ahlawataayushi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D30001", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/aashii_ahlawat",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/aayushi.ahlawat.3/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/aayushii_ahlawat/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built scalable RESTful APIs and microservices to optimize performance and integration across projects",
        "⚡ Expert in AngularJS and Bootstrap, creating responsive and user-friendly web interfaces",
        "⚡ Proficient in Spring Boot, delivering robust and scalable back-end solutions for enterprise-grade applications",
      ],
      softwareSkills: [
        {
          skillName: "JAVA",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "currentColor",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "REST API",
          fontAwesomeClassname: "mdi:api",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "devicon:bootstrap",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Shell Scripting",
          fontAwesomeClassname: "devicon:powershell",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Architecture and Data Solutions",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deployed and managed cloud solutions on Google Cloud Platform, ensuring high availability and scalability for enterprise apps",
        "⚡ Optimized database performance and security with MongoDB, SQL, and Oracle Cloud for robust data handling",
        "⚡ Streamlined cloud deployments using Docker, maintaining consistent environments across development and production",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed predictive models and advanced analytics using Python & machine learning techniques to drive data-driven decision making",
        "⚡ Engineered statistical dashboards and ad hoc reports in Tableau and Power BI, enhancing data visibility and actionable insights",
        "⚡ Managed and processed large datasets using PostgreSQL and data cleaning techniques, ensuring accurate and reliable analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "skill-icons:pytorch-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "devicon-plain:numpy-wordmark",
          style: {
            color: "currentColor",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon-plain:pandas-wordmark",
          style: {
            color: "currentColor",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "devicon:jupyter-wordmark",
          style: {
            color: "currentColor",
          },
        },
      ],
    },
    {
      title: "Salesforce Administrator",
      fileName: "DesignImg",
      skills: [
        "⚡ Customized and optimized Salesforce platforms, streamlining business processes and improving user efficiency",
        "⚡ Managed user permissions and data integrity, ensuring secure and compliant Salesforce environments",
      ],
      softwareSkills: [
        {
          skillName: "Salesforce",
          fontAwesomeClassname: "logos:salesforce",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Cloud Security",
          fontAwesomeClassname: "carbon:ibm-cloud-security-compliance-center",
          style: {
            color: "currentColor",
          },
        },
        {
          skillName: "DB Management",
          fontAwesomeClassname: "bi:database-fill-gear",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Analytics",
          fontAwesomeClassname: "tdesign:chart-analytics",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#F79F1B",
//       },
//       profileLink: "https://leetcode.com/layman_brother/",
//     },
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "State University of New York at Binghamton",
      subtitle: "M.S. in Computer Science",
      logo_path: "bu_logo.png",
      alt_name: "SUNY Binghamton",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Studied various subjects like Cloud Computing, Cyber Security, Data Science, and Programming Languages, building a strong foundation for designing scalable systems and securing data.",
        "⚡ Applied knowledge through projects, such as developing secure cloud applications and optimizing databases, enhancing my technical skills.",
        "⚡ Engaged in extracurricular activities, like tech clubs and coding competitions, which developed my teamwork and leadership abilities.",
      ],
      website_link: "https://www.binghamton.edu/",
    },
    {
      title: "Guru Gobind Singh Indraprastha University",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "ggsipu_logo.png",
      alt_name: "GGSIPU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Studied Core Computer Science Subjects, including programming, algorithms, and software engineering, laying a solid foundation for advanced technical skills.",
        "⚡ Completed Practical Projects and Assignments, applying theoretical knowledge to real-world problems and gaining hands-on experience in software development.",
        "⚡ Involved in Leadership Roles in Student Organizations, such as leading tech workshops or organizing coding events, which honed my leadership and organizational skills.",
      ],
      website_link: "http://www.ipu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Developer - Associate",
      subtitle: "- AWS",
      logo_path: "download.png",
      certificate_link:
        "",
      alt_name: "aws",
      color_code: "#b8c7ec",
    },
    {
      title: "Full Stack Development",
      subtitle: "- Udemy",
      logo_path: "full_stack.png",
      certificate_link:
        "https://drive.google.com/file/d/1xKIbY-K2SRZJ9Yr4JZd6WwJzTdWmzZzl/view?usp=drive_link",
      alt_name: "udemy",
      color_code: "#8bd9ea",
    },
    {
      title: "Salesforce Certified Administration",
      subtitle: "- Salesforce",
      logo_path: "salesforce.png",
      certificate_link:
        "https://drive.google.com/file/d/1Jf6uwqQetU0oAVq--WSLwx3YecJ7twv0/view?usp=drive_link",
      alt_name: "SCA",
      color_code: "#b8c7ec",
    },
    {
      title: "Developing Web Applications",
      subtitle: "- NIIT",
      logo_path: "web_app.png",
      certificate_link:
        "https://drive.google.com/file/d/1xfcAWj3yvZBraD1ZDTfZ-BMZQv08gkgM/view?usp=drive_link",
      alt_name: "NIIT",
      color_code: "#8bd9ea",
    },
    {
      title: "Developing Android Application",
      subtitle: "- NIIT",
      logo_path: "android.png",
      certificate_link:
        "https://drive.google.com/file/d/16GHuBQXvTF_oJn7BUyCRK1Ecdx__FuvL/view?usp=drive_link",
      alt_name: "NIIT",
      color_code: "#b8c7ec",
    },
    {
      title: "Programming in Java",
      subtitle: "- NIIT",
      logo_path: "java_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1VTVzCvn7KDaacq2XCXSrJKjn4BbY96gg/view?usp=drive_link",
      alt_name: "NIIT",
      color_code: "#8bd9ea",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  //subtitle: "Work, Internship and Volunteership",
  description:
    "I am a Software Engineer with 3+ years of experience in backend and full-stack development, specializing in Python, Java, and Node.js. Skilled in building scalable APIs, microservices, and AI-driven applications. Experienced with PostgreSQL, Redis, AWS, Docker, and Kubernetes, with a strong focus on problem-solving, performance optimization, and Agile collaboration.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "DataGurus LLC",
          company_url: "https://datagurus.org/",
          logo_path: "datagurus.png",
          duration: "September 2024 - Present",
          location: "Raleigh, NC, United States",
          description:
            "Engineered a Retrieval-Augmented Generation (RAG) model using Python, LangChain, and PostgreSQL to enhance AI-driven decision-making with high-quality data.",
          color: "#0879bf",
        },
        {
          title: "Research Assistant",
          company: "State University of New York at Binghamton",
          company_url: "https://www.binghamton.edu/",
          logo_path: "bu_logo.png",
          duration: "September 2024 - Present",
          location: "Raleigh, NC, United States",
          description:
            "Conducted research on personality traits in digital activism using Python and machine learning to analyze online engagement in movements like #MeToo, and developed strategies to prevent online harassment and enhance support for activists.",
          color: "#0879bf",
        },
        {
          title: "Software Engineering Fellow",
          company: "Headstarter AI",
          company_url: "https://headstarter.co/",
          logo_path: "headstarter.jpeg",
          duration: "July 2024 - September 2024",
          location: "Raleigh, NC, United States",
          description:
            "Designed AI apps and APIs using NextJS and OpenAI, achieving high accuracy and reaching thousands of users. Lead projects from design to deployment, mentor fellow engineers, and receive coaching from industry experts on Agile, CI/CD, and microservices.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Infosys Limited",
          company_url: "https://www.infosys.com/",
          logo_path: "infosys.jpg",
          duration: "November 2020 - April 2022",
          location: "Delhi, India",
          description:
            "Developed an automated batch processing system using Salesforce, Apache Airflow, AWS S3, Lambda, EC2, and RDS to streamline data transformation, improve accuracy, and enhance scalability.",
            color: "#0879bf",
        },
        {
          title: "Software Developer Intern",
          company: "NIIT Technologies",
          company_url: "https://www.niit.com/en/learning-outsourcing/",
          logo_path: "niit.png",
          duration: "July 2018 - July 2020",
          location: "Delhi, India",
          description:
            "Developed secure REST APIs and responsive UI components using Java, Spring Boot, React, and JWT authentication, optimizing performance, user engagement, and deployment efficiency.",
            color: "#0879bf",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
  //     ],
  //   },
   ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects have been instrumental in my growth, expanding my technical skills and problem-solving abilities. Each project has refined my expertise and contributed to my overall development.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "a-study-on-image-forgery-detection",
      name: "A Study on Image Forgery Detection",
      createdAt: "October 2020",
      description: "Research Paper published in IJRASET",
      url: "https://drive.google.com/file/d/1WkqK87uQ02m2P7lpYtEi8ASuutRoEVJ9/view?usp=drive_link",
    },
    {
      id: "an-artificial-neural-network-for-bmi-estimation",
      name: "An Artificial Neural Network for BMI Estimation Using Facial Images",
      createdAt: "August 2020",
      description: "Research Paper published in IJRAR",
      url: "https://drive.google.com/file/d/1FwmUrv_byD_r80BYecT-Kty8Eik0FNPT/view?usp=drive_link",
    },
    {
      id: "drowsiness-detection-system-using-opencv",
      name: "Drowsiness Detection System Using OpenCV",
      createdAt: "July 2020",
      description: "Research Paper published in IJCRT",
      url: "https://drive.google.com/file/d/1LsSa5wRTWNhgiFNeHCybKkuIJ6TFjnfD/view?usp=drive_link",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Photo.png",
    description:
      "Actively available on various social media platforms. I can assist with ML, AI, Angular, React, Cloud, Full-Stack, and Open Source Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Wake Forest, NC, USA 27587",
    locality: "Wake Forest",
    country: "USA",
    region: "North Carolina",
    postalCode: "27587",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/zCw14sTWCNjPai4g7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
