const About = () => {
  return (
    <div className="h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>
      <div className="flex flex-col gap-6">
        {/* Self Image */}
        <div className="flex justify-center">
          <img src="assets/images/lowry.jpeg" alt="Lowry Wong" className="w-48 h-48 rounded-full sm:w-60 sm:h-60 lg:w-72 lg:h-72" />
        </div>
        {/* Self introduction */}
        <div className="text-sm sm:text-base space-y-4">
          <p>Hello, my name is Lowry. I am a self taught full stack web developer living in the beautiful city of Hong Kong. </p>
          <p>Upon completing my degree at the University of Hong Kong, I joined a local bank in the digital banking department as a product management intern. 
            This role ignited my passion about building products, web applications and solving problems.
            Driven by this enthusiasm, I commenced my journey in web development in June 2023 and started building web applications. </p> 
          <p>Let's connect and make something great together!</p>
        </div>
        {/* Tech stack */}
        <div className="flex overflow-x-auto gap-8 scrollbar-hide">
          <img src="assets/icons/html-5.svg" alt="HTML5" className="w-10 h-10 grayscale hover:grayscale-0" />
          <img src="assets/icons/tailwindcss-icon.svg" alt="Tailwind CSS" className="w-10 h-10 grayscale hover:grayscale-0" />
          <img src="assets/icons/javascript.svg" alt="JavaScript" className="w-10 h-10 grayscale hover:grayscale-0" />
          <img src="assets/icons/react.svg" alt="React" className="w-10 h-10 grayscale hover:grayscale-0" />
          <img src="assets/icons/nextjs-icon.svg" alt="Next.js" className="w-10 h-10 grayscale hover:grayscale-0" />
          <img src="assets/icons/vue.svg" alt="Vue.js" className="w-10 h-10 grayscale hover:grayscale-0" />
          <img src="assets/icons/mongodb-icon.svg" alt="MongoDB" className="w-10 h-10 grayscale hover:grayscale-0" />
          <img src="assets/icons/express.svg" alt="Express" className="w-10 h-10 grayscale hover:grayscale-0" />
          <img src="assets/icons/postgresql.svg" alt="PostgreSQL" className="w-10 h-10 grayscale hover:grayscale-0" />
          <img src="assets/icons/python.svg" alt="Python" className="w-10 h-10 grayscale hover:grayscale-0" />
          <img src="assets/icons/pytorch-icon.svg" alt="PyTorch" className="w-10 h-10 grayscale hover:grayscale-0" />
        </div>
      </div>

    </div>


  );
};

export default About;

