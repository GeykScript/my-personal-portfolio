        import { useState } from "react";

        // Define the Project type
        type Project = {
        title: string;
        desc: string;
        demo?: string;
        code: string;
        image?: string;
        techStack?: string[];
        };


        export default function Projects() {
        const projects: Project[] = [
            {
            title: "iBiteCare+",
            desc: "Web-Based Management System for Dr.Care Animal Bite Center-Guinobatan",
            demo: "https://www.youtube.com/embed/jO6xdcLhd-U",
            code: "https://github.com/GeykScript/iBiteCare",
            image: "/ibitecare.png", 
            techStack: ["https://img.shields.io/badge/php-%236C78AF.svg?style=for-the-badge&logo=php&logoColor=white", 
                "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
                "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
                "https://img.shields.io/badge/tailwindcss-%2306B6D4.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
                "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
                "https://img.shields.io/badge/node.js-%235FA04E?style=for-the-badge&logo=node.js&logoColor=white",
                "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
                "https://img.shields.io/badge/figma-%23ED1965.svg?style=for-the-badge&logo=figma&logoColor=white",
                "https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white",
                "https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white",
            
            ]
            },
            {
            title: "FurrHUB",
            desc: "Web-based E-Commerce Platform for Pet Supplies and Services",
            demo: "https://www.youtube.com/embed/_hugjLNzqcc",
            code: "https://github.com/GeykScript/FurrHUB-Admin",
            image: "/furrhub.png",
            techStack: ["https://img.shields.io/badge/php-%236C78AF.svg?style=for-the-badge&logo=php&logoColor=white", 
                "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
                "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
                "https://img.shields.io/badge/tailwindcss-%2306B6D4.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
                "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
                "https://img.shields.io/badge/node.js-%235FA04E?style=for-the-badge&logo=node.js&logoColor=white",
                "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
                "https://img.shields.io/badge/figma-%23ED1965.svg?style=for-the-badge&logo=figma&logoColor=white",
                "https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white",
                "https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white",
                "https://img.shields.io/badge/canva-%238A2BE2.svg?style=for-the-badge&logo=chai&logoColor=white",
            
            ]
            },
            {
            title: "YourLaughterBlog",
            desc: 'Blog Website about "Your Laughter" poem by Pablo Neruda',
            demo: "https://yourlaughterblog.infinityfreeapp.com/?i=1",
            code: "https://github.com/GeykScript/Your-Laughter-Blog",
            image: "/yourlaughter.png",
            },
            {
            title: "iStud",
            desc: "Student Information System made using C# and MySQL",
            demo: "https://www.youtube.com/embed/8yarblHrkqw",
            code: "https://github.com/GeykScript/Your-Laughter-Blog",
            image: "/istud.png",
            techStack: ["https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
                "https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white",
                "https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white",  
                "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",]
            },
        ];

        // Check if the demo link is a YouTube, if not href link
        const isYouTubeEmbed = (url?: string) => {
            if (!url) return false;
                return url.includes("youtube.com/embed") || url.includes("youtu.be");
            };
        // Num of visible cards
        const visibleCards = 3;

        // State to track the current index of the slider
        const [index, setIndex] = useState(0);
        // State to track the active project for modal
        const [activeProject, setActiveProject] = useState<Project | null>(null);

        const maxIndex = Math.max(projects.length - visibleCards, 0);

        return (
            <div className="border border-gray-200 rounded-lg flex flex-col p-6 shadow-sm">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h3 className="flex items-center font-bold text-gray-800 text-lg">
                        <span className="material-icons scale-80">folder_copy</span>
                        Projects
                    </h3>

                    {/* Controls */}
                    <div className="flex gap-1 px-2">
                        <button
                            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                            disabled={index === 0}
                            className="flex items-center hover:cursor-pointer justify-center border rounded p-1 disabled:opacity-40 hover:border-sky-600 hover:text-sky-600">
                                <span className="material-icons scale-70">keyboard_arrow_left</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
                            disabled={index === maxIndex}
                            className="flex items-center hover:cursor-pointer justify-center border rounded p-1 disabled:opacity-40 hover:border-sky-600 hover:text-sky-600">
                                <span className="material-icons scale-70">keyboard_arrow_right</span>
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div className="overflow-hidden mt-3 px-4 py-2">
                    <div className={`flex gap-2 transition-transform duration-300 
                        ${index === 0 && "translate-x-[-0.5%]"}
                        ${index === 1 && "-translate-x-[35.6666%]"}
                        ${index === 2 && "-translate-x-[70.6667%]"}
                        ${index === 3 && "-translate-x-[100%]"} `} >

                        {/* Projects */}
                        {projects.map((p, i) => (
                            <div
                                key={i}
                                className="w-1/3 shrink-0 p-4 rounded-md shadow-md border border-gray-200 ">

                                <div className="h-40 bg-gray-50 ">
                                    {p.image && <img src={p.image} alt={p.title} className="w-full h-full object-contain rounded-md" />}
                                </div>
                                    <h2 className="mt-2 font-semibold text-sm">{p.title}</h2>
                                    <p className="py-1 text-sm">{p.desc}</p>

                                <div className="flex justify-between items-center mt-2 text-xs">
                                    <div className="flex gap-2">

                                        {p.demo &&
                                            (isYouTubeEmbed(p.demo) ? (
                                                // if video
                                                <button
                                                    onClick={() => setActiveProject(p)}
                                                    className="flex items-center hover:text-sky-600">
                                                        <span className="material-icons scale-70">launch</span>
                                                    Demo
                                                </button>
                                            ) : (
                                                // if not video
                                                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-sky-600">
                                                    <span className="material-icons scale-70">launch</span>
                                                    Demo
                                                </a>
                                        ))}

                                         {/* source code  */}
                                        <a href={p.code} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-sky-600">
                                            <span className="material-icons scale-70">code</span>
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                    {/* Modal */}
                    {activeProject &&  (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setActiveProject(null)}>
                            <div className="bg-white rounded-lg w-[90%] max-w-4xl p-4" onClick={(e) => e.stopPropagation()}>
                                    {/* // video section */}
                                    <div className="relative pt-[56.25%]">
                                        <iframe className="absolute inset-0 w-full h-full rounded-md"
                                            src={`${activeProject.demo}?autoplay=1&mute=1`}
                                            allow="autoplay; fullscreen"
                                            allowFullScreen
                                            title={`${activeProject.title} demo video`}/>
                                    </div>

                                        {/* tools used section */}
                                        {activeProject.techStack && (
                                            <div className="mt-4 px-6 ">
                                                <h3 className="flex items-center font-bold text-gray-800 text-lg">
                                                    <span className="material-icons scale-80 mr-1">layers</span>
                                                    Tools 
                                                </h3>

                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {activeProject.techStack.map((tech, i) => (
                                                        <img
                                                            key={i}
                                                            src={tech}
                                                            alt="tech stack badge"
                                                            className="h-6"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            onClick={() => setActiveProject(null)}
                                            className="px-4 py-2 text-sm rounded-md bg-sky-600 text-white hover:bg-sky-700">
                                            Close
                                        </button>
                                    </div>
                            </div>
                        </div>
                    )}
            </div>
        );
        }
