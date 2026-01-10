   import { useState } from "react";

   export default function About() {
   const [showMore, setShowMore] = useState(false);

   return (
      <div className="border border-gray-200 dark:border-gray-800/30 rounded-lg flex flex-col p-6 shadow-sm dark:bg-gray-700/10 dark:shadow-gray-100/10">
         <h3 className="flex items-center font-bold text-gray-800 dark:text-white text-lg">
         <span className="material-icons scale-80 mr-1">info</span>
         About
         </h3>

         <div className="text-gray-600 dark:text-gray-200  p-2 text-justify space-y-2 indent-8">
         <p>
            I am a 4th Year BSIT Student at Bicol University with a passion for web
            development. I have hands-on experience in creating responsive and
            user-friendly websites using PHP, JavaScript, MySQL, and various
            frameworks. I am eager to apply my skills and knowledge in real-world
            projects while continuously learning and growing in the field of
            technology.
         </p>

         <span>
            Currently seeking an internship opportunity where I can contribute to
            a dynamic team, gain hands-on experience, and further develop my skills
            through practical industry exposure.
         </span>

         <p className={`${showMore ? "inline" : "hidden"} sm:inline ml-2`}>
            This internship is a school requirement totaling 480 hours, and I am
            available to commit fully for its duration. An internship with an
            allowance would be appreciated.
         </p>
         </div>

         {/* Button only on small screens */}
         <button
         onClick={() => setShowMore(!showMore)}
         className="mt-2 text-sm text-sky-600 hover:underline md:hidden self-end flex items-center gap-1"
         >
         {showMore ? "Show less" : "Show more"}
         <span className="material-icons">
            {showMore ? "expand_less" : "expand_more"}
         </span>
         </button>
      </div>
   );
   }
