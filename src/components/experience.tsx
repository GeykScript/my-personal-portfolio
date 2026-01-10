

const experiences = [
  {
    title: "Full-Stack Web Developer | UI/UX Designer",
    project: "iBiteCare+",
    year: "2025",
    description: "Developed a full-stack web system for Dr. Care Animal Bite Center-Guinobatan."
  },
  {
    title: "Web Developer",
    project: "YourLaughterBlog",
    year: "2025",
    description: "Built a blog website for a client, themed around Pablo Neruda’s “Your Laughter” poem."
  },
  {
    title: "Full-Stack Web Developer | UI/UX Designer",
    project: "FurrHUB",
    year: "2025",
    description: "Developed a full-stack web-based E-Commerce platform for pet products and services."
  }, 

];

export default function Experience() {
  return (
    <div className="border border-gray-100 rounded-lg flex flex-col justify-center p-4 shadow-sm dark:bg-gray-700/10 dark:shadow-gray-100/10   dark:border-gray-800/30">
        <div className="flex justify-between items-center">
            <h3 className="flex items-center font-bold text-gray-800 dark:text-white text-lg">
            <span className="material-icons scale-90 mr-1">cases</span>
            Experience
            </h3>
        </div>

        <div className="mt-3 pt-3  border-t border-gray-200  md:px-2 flex flex-col overflow-y-auto max-h-96 scrollbar-design pb-2">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="flex gap-2 md:gap-4 group cursor-default" 
            id="experience"
            >
          
            {/* Timeline Column */}
            <div className="flex flex-col items-center">
                {/* Timeline Outer Dot */}
                <div 
                  className="p-1 bg-gray-200 rounded-full border border-gray-300 shadow-md 
                            transition-colors duration-300
                            group-hover:bg-sky-200 group-hover:border-sky-300" 
                >
                {/* Timeline Inner Dot */}
                <div 
                  className="w-3 h-3 bg-gray-700 rounded-full shrink-0 
                            transition-colors duration-300
                            group-hover:bg-sky-500" ></div>
                </div>

                {/* Vertical Line (timeline3) */}
                {index !== experiences.length - 1 && (
                  <div 
                    className="w-0.5 flex-grow bg-gray-200 my-1 
                              transition-colors duration-300
                              group-hover:bg-sky-200" 
                  ></div>
                )}
            </div>

            {/* Content Column */}
            <div className="flex flex-col gap-1 pb-6 w-full">
              <div className="flex items-start justify-between">
                
                {/* Title & Project */}
                <h4 
                  className="font-bold text-gray-700 dark:text-gray-400 text-sm 
                            transition-colors duration-300
                            group-hover:text-sky-600" 
                  id="title"
                >
                  {exp.title} <br />
                  <span 
                    className="font-semibold text-gray-600 dark:text-gray-300 italic
                              transition-colors duration-300
                              group-hover:text-sky-500" 
                    id="project"
                  >
                    {exp.project}
                  </span>
                </h4>

                {/* Year Badge */}
                <span 
                  className="text-sm font-bold text-gray-500 dark:text-gray-400 py-1 px-4 border border-gray-200 rounded whitespace-nowrap shadow-sm 
                            transition-all duration-300
                            group-hover:text-sky-600 group-hover:border-sky-200 dark:group-hover:bg-black/10 group-hover:bg-sky-50 group-hover:shadow-md" 
                  id="year"
                >
                  {exp.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 dark:text-gray-50 leading-relaxed">
                {exp.description}
              </p>
            </div>
        </div>
      ))}
      </div>
    </div>
);
}

