// Projects information
// As there are only few projects, external backend database is not required.
const projects = [
  {
    id: 1,
    title: "Easy Logistics",
    description: "A full-stack web-based logistics parcel management system designed for small freight companies. Features included data import and management, smart zoning and printable delivery slips, and customizable cost calculations, aiming to enhance operational efficiency and provide an easy management solution.",
    stack: ["Vue", "Express.js", "MongoDB", "AWS"],
    category: "Client Project",
    github_url: "",
    external_url: "",
    screenshots: [
      { id: 1, url: "assets/images/easy_logistics/image_1.png", type: "image" },
      { id: 2, url: "assets/images/easy_logistics/image_2.png", type: "image" },
      { id: 3, url: "assets/images/easy_logistics/image_3.png", type: "image" },
      { id: 4, url: "assets/images/easy_logistics/image_4.png", type: "image" },
      { id: 5, url: "https://youtu.be/_ESfWyyb4jc", type: "video" }
    ],
    createdAt: "07/2023",
  },
  {
    id: 2, 
    title: "Arithmetic Game",
    description: "A web game that designed to test users ability to solve arithmetic equations under time pressure. It offers multiple levels of questions on basic arithmetic operations (additions, substractions, multiplications, and divisions).",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Personal Project",
    github_url: "https://github.com/wcquantech/arithmetic_game",
    external_url: "https://wcquantech.github.io/arithmetic_game/",
    screenshots: [
      { id: 1, url: "assets/images/arithmetic_game/image_1.png", type: "image" },
      { id: 2, url: "assets/images/arithmetic_game/image_2.png", type: "image" },
      { id: 3, url: "assets/images/arithmetic_game/image_3.png", type: "image" },
      { id: 4, url: "https://youtu.be/IUggiGApBVc", type: "video" }
    ],
    createdAt: "02/2024"
  },
  {
    id: 3,
    title: "GW Glitch Classifier",
    description: "A web app that enables users to upload gravitational wave signal files and classifies them into one of the 23 glitch classes using deep learning image classification models. This web app was initially developed as part of my final year college project but the UI has been recently re-created.",
    stack: ["Python", "PyTorch", "Dash", "HTML", "CSS", "Heroku"],
    category: "Personal Project",
    github_url: "",
    external_url: "https://desolate-hamlet-01034-a86b0d0a8c18.herokuapp.com",
    screenshots: [
      { id: 1, url: "assets/images/glitch_classifier/image_1.png", type: "image" },
      { id: 2, url: "assets/images/glitch_classifier/image_2.png", type: "image" },
      { id: 3, url: "assets/images/glitch_classifier/image_3.png", type: "image" },
    ],
    createdAt: "03/2024"
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "This personal portfolio website showcases my work and serves as a platform to practice my web design and development skills. It also aims to document my projects and facilitate connections with individuals interested in my professional endeavors.",
    stack: ["React", "Next.js", "Tailwind CSS"],
    category: "Personal Project",
    github_url: "",
    external_url: "",
    screenshots: [
      { id: 1, url: "assets/images/personal_portfolio/image_1.png", type: "image" }
    ],
    createdAt: "03/2024"
  }
];

export default projects;