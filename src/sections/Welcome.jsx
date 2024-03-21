import Link from "next/link";
import resume from "../contents/resume";

const Welcome = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <p className="text-lg sm:text-xl">Greetings, I'm</p>
      <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-gradient-to-r from-[#4c10ff] to-[#d7a8f0] bg-clip-text py-2">Lowry Wong.</h1>
      <p className="text-lg sm:text-xl">Welcome to my journey as a</p>
      <p className="text-2xl sm:text-3xl font-semibold">Full Stack Software Developer.</p>
      {/* Resume and Contact buttons */}
      <div className="flex space-x-4 mt-4">
        <Link href={resume.url} ><button className="bg-indigo-600 font-semibold text-sm sm:text-base px-4 py-2 rounded-md text-white border border-gray-200 dark:border-gray-700 hover:bg-indigo-800 hover:text-white active:transform active:scale-90 duration-200">Download Resume</button></Link>
        <Link href={"/#contact"}><button className="bg-white dark:bg-slate-800 font-semibold text-sm sm:text-base px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-slate-200 dark:hover:bg-slate-700 active:transform active:scale-90 duration-200">Contact Me!</button></Link>
      </div>
    </div>
  );
};

export default Welcome;