import { useState } from "react";

const techStack = [
  // Frontend
  {
    id: "javascript",
    category: "Frontend",
    src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    alt: "JavaScript",
  },
  {
    id: "html5",
    category: "Frontend",
    src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    alt: "HTML5",
  },
  {
    id: "css",
    category: "Frontend",
    src: "https://img.shields.io/badge/css-%232088FF.svg?style=for-the-badge&logo=css&logoColor=white",
    alt: "CSS",
  },
  {
    id: "react",
    category: "Frontend",
    src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    alt: "React",
  },
  {
    id: "tailwind",
    category: "Frontend",
    src: "https://img.shields.io/badge/tailwindcss-%2306B6D4.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    alt: "Tailwind CSS",
  },
  {
    id: "bootstrap",
    category: "Frontend",
    src: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    alt: "Bootstrap",
  },

  // Backend
  {
    id: "php",
    category: "Backend",
    src: "https://img.shields.io/badge/php-%236C78AF.svg?style=for-the-badge&logo=php&logoColor=white",
    alt: "PHP",
  },
  {
    id: "laravel",
    category: "Backend",
    src: "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
    alt: "Laravel",
  },
  {
    id: "nodejs",
    category: "Backend",
    src: "https://img.shields.io/badge/node.js-%235FA04E?style=for-the-badge&logo=node.js&logoColor=white",
    alt: "Node.js",
  },
  {
    id: "mysql",
    category: "Backend",
    src: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    alt: "MySQL",
  },
  {
    id: "c",
    category: "Backend",
    src: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
    alt: "C",
  },

  // Tools
  {
    id: "git",
    category: "Tools",
    src: "https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white",
    alt: "Git",
  },
  {
    id: "github",
    category: "Tools",
    src: "https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white",
    alt: "GitHub",
  },
  {
    id: "figma",
    category: "Tools",
    src: "https://img.shields.io/badge/figma-%23ED1965.svg?style=for-the-badge&logo=figma&logoColor=white",
    alt: "Figma",
  },
  {
    id: "typescript",
    category: ["Frontend", "Backend"],
    src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    alt: "TypeScript",
  },
  {
    id: "canva",
    category: "Tools",
    src: "https://img.shields.io/badge/canva-%238A2BE2.svg?style=for-the-badge&logo=chai&logoColor=white",
    alt: "Canva",
  },
  {
    id: "vite",
    category: ["Frontend", "Tools"],
    src: "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
    alt: "Vite",
  },
];

export default function TechStack() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);

  const filteredTech =
    filter === "All"
      ? techStack
      : techStack.filter((tech) => tech.category.includes(filter));

  const options = ["All", "Frontend", "Backend", "Tools"];

  return ( 
      // border border-gray-200 shadow-sm 
    <div className=" rounded-lg flex flex-col p-6 relative">
      <div className="flex justify-between items-center">
        <h3 className="flex items-center font-bold text-gray-800 text-lg">
          <span className="material-icons scale-80 mr-1">layers</span>
          Tech Stack
        </h3>

        {/* Custom dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between text-sm px-3 py-1 border rounded-md focus:outline-none border-gray-600 hover:border-sky-600 hover:text-sky-600 hover:cursor-pointer "
            >
            {filter}
            <span className="material-icons scale-70">
              {open ? "expand_less" : "expand_more"}
            </span>
          </button>


          {open && (
            <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => {
                    setFilter(option);
                    setOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-sky-100 hover:cursor-pointer"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        {filteredTech.map((tech) => (
          <img
            key={tech.id}
            src={tech.src}
            alt={tech.alt}
            className="rounded-sm"
          />
        ))}
      </div>
    </div>
  );
}
