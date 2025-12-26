import { useState } from "react";

export default function Projects() {
const [index, setIndex] = useState(0);

const projects = [
    {
        title: "iBiteCare+",
        desc: "Web-Based Management System for Dr.Care Animal Bite Center-Guinobatan",
        demo: "#",
        code: "https://github.com/GeykScript/iBiteCare",
    },
    {
        title: "FurrHUB",
        desc: "Web-based E-Commerce Platform for Pet Supplies and Services",
        demo: "#",
        code: "https://github.com/GeykScript/FurrHUB-Admin",
    },
    {
        title: "YourLaughterBlog",
        desc: 'Blog Website about "Your Laughter" poem by Pablo Neruda',
        demo: "https://yourlaughterblog.infinityfreeapp.com",
        code: "https://github.com/GeykScript/Your-Laughter-Blog",
    },
    {
        title: "iStud",
        desc: 'Student Information System made using C# and MySQL',
        demo: "https://yourlaughterblog.infinityfreeapp.com",
        code: "https://github.com/GeykScript/Your-Laughter-Blog",
    },
    //  add more projects as needed
];

const maxIndex = projects.length - 3;

return (
    <div className="border border-gray-200 rounded-lg flex flex-col p-6 shadow-sm">
      {/* Header */}
        <div className="flex justify-between items-center">
            <h3 className="flex items-center font-semibold text-gray-800 text-lg">
                <span className="material-icons scale-80">folder_copy</span>
                Projects
            </h3>

        {/* Controls */}
        <div className="flex gap-1 px-2">
            <button
                type="button"
                onClick={() => setIndex(Math.max(index - 1, 0))}
                disabled={index === 0}
                className="border rounded p-1 disabled:opacity-40 flex items-center hover:cursor-pointer"
                aria-label="Previous"
                title="Previous"
            >
                    <span className="material-icons scale-70">keyboard_arrow_left</span>
            </button>
            <button
                type="button"
                onClick={() => setIndex(Math.min(index + 1, maxIndex))}
                disabled={index === maxIndex}
                className="border rounded p-1 disabled:opacity-40 flex items-center hover:cursor-pointer"
                aria-label="Next"
                title="Next"
            >
                    <span className="material-icons scale-70">keyboard_arrow_right</span>
            </button>
        </div>
    </div>

      {/* Slider */}
    <div className="overflow-hidden mt-3 px-4 py-2">
        <div
            className={`flex gap-2  transition-transform duration-300
            ${index === 0 && "translate-x-[-0.5%]"}
            ${index === 1 && "-translate-x-[35.6666%]"}
            ${index === 2 && "-translate-x-[70.6667%]"}
            ${index === 3 && "-translate-x-[100%]"}
            `}
        >
                {projects.map((p, i) => (
                <div
                    key={i}
                    className="w-1/3 shrink-0 p-4 rounded-md shadow-md border border-gray-100"
                    >
                    <div className="bg-gray-200 h-40 rounded-lg"></div>
                    <h2 className="mt-2 font-semibold text-sm">{p.title}</h2>
                    <p className="py-1 text-sm">{p.desc}</p>

                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center text-xs gap-1">
                            <a href={p.demo} className="flex items-center">
                                <span className="material-icons scale-70">launch</span>
                                Demo
                            </a>
                            <a href={p.code} className="flex items-center">
                                <span className="material-icons scale-70">code</span>
                                Code
                            </a>
                        </div>
                        <span className="material-icons scale-70">info_outline</span>
                    </div>
                </div>
                ))}
        </div>
    </div>
    </div>
    );
}
