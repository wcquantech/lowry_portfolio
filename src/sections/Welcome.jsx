const Welcome = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <p className="text-lg sm:text-xl">Greetings, I'm</p>
      <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-gradient-to-r from-[#4c10ff] to-[#d7a8f0] bg-clip-text py-2">Lowry Wong.</h1>
      <p className="text-lg sm:text-xl">Welcome to my journey as a</p>
      <p className="text-2xl sm:text-3xl font-semibold">Full Stack Web Developer.</p>
      {/* Resume and Contact buttons */}
      <div className="flex space-x-4 mt-4">
        <button className="bg-white font-semibold text-sm sm:text-base px-2 py-1 rounded-md text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white active:transform active:scale-90 duration-200">Download Resume</button>
        <button className="bg-white font-semibold text-sm sm:text-base px-2 py-1 rounded-md text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white active:transform active:scale-90 duration-200">Contact Me!</button>
      </div>
    </div>
  );
};

export default Welcome;