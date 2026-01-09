    import { useState, useEffect } from "react";
    import type { JSX } from "react"

    // Define the Project type
    type Project = {
    title: string;
    desc: string;
    demo?: string;
    code: string;
    image?: string;
    techStack?: string[];
    description?: JSX.Element;
    };

    export default function Projects() {
    const projects: Project[] = [
        {
        title: "iBiteCare+",
        desc: "Web-Based Management System for Dr.Care Animal Bite Center-Guinobatan",
        demo: "https://www.youtube.com/embed/jO6xdcLhd-U",
        code: "https://github.com/GeykScript/iBiteCare",
        image: "/ibitecare.png",
        techStack: [
            "https://img.shields.io/badge/php-%236C78AF.svg?style=for-the-badge&logo=php&logoColor=white",
            "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            "https://img.shields.io/badge/tailwindcss-%2306B6D4.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
            "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
            "https://img.shields.io/badge/node.js-%235FA04E?style=for-the-badge&logo=node.js&logoColor=white",
            "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
            "https://img.shields.io/badge/figma-%23ED1965.svg?style=for-the-badge&logo=figma&logoColor=white",
            "https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white",
            "https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white",
            "https://img.shields.io/badge/hostinger-%23673DE6.svg?style=for-the-badge&logo=hostinger&logoColor=white",

        ],
        description: (
            <>
                <p className="mb-4 text-justify">
                    <b>iBiteCare+</b> is an all-in-one web application designed to modernize Dr.Care Animal Bite Center (Guinobatan). It replaces manual paperwork with a digital system that makes running the clinic faster, safer, and more efficient.
                </p>
                <p className="font-bold mb-2">Key Features:</p>
                <ul className="list-disc pl-8 space-y-2 ">
                    <li>
                        <span className="font-semibold">Visual Patient Records:</span> Stores patient info digitally and features a Body Part Selector that lets staff click a visual map to record exactly where a patient was bitten.
                    </li>
                    <li>
                        <span className="font-semibold">Automated Reminders:</span> Automatically sends SMS text alerts to patients so they never forget their scheduled follow-up vaccine shots.
                    </li>
                    <li>
                        <span className="font-semibold">Digital Vaccination Card:</span> Automatically generates a PDF vaccination card and emails it directly to the patient for easy reference.
                    </li>
                    <li>
                        <span className="font-semibold">Inventory & Sales:</span> Tracks vaccine stock levels to prevent shortages and handles patient billing and payments.
                    </li>
                    <li>
                        <span className="font-semibold">Online Booking:</span> Allows patients to schedule their immunization appointments online.
                    </li>
                    <li>
                        <span className="font-semibold">Reports & Visualization:</span> Provides real-time data visualization and generates detailed quarterly reports for sales, patient data, and inventory.
                    </li>
                </ul>
            </>
        ),
        },
        {
        title: "FurrHUB",
        desc: "Web-based E-Commerce Platform for Pet Supplies and Services",
        demo: "https://www.youtube.com/embed/_hugjLNzqcc",
        code: "https://github.com/GeykScript/FurrHUB-Admin",
        image: "/furrhub.png",
        techStack: [
            "https://img.shields.io/badge/php-%236C78AF.svg?style=for-the-badge&logo=php&logoColor=white",
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
            "https://img.shields.io/badge/hostinger-%23673DE6.svg?style=for-the-badge&logo=hostinger&logoColor=white",

        ],
        description: (
            <>
                <p className="mb-4 text-justify">
                    <b>FurrHUB</b> is a specialized B2C e-commerce platform designed to modernize pet shop operations. It bridges the gap between retail and service, providing a seamless experience for pet owners to shop and book appointments while giving business owners powerful tools to manage their store.
                </p>
                <p className="font-bold mb-2">Key Features:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <span className="font-semibold">One-Stop Shop:</span> A complete online catalog allowing customers to easily browse and order pet supplies, food, and accessories.
                    </li>
                    <li>
                        <span className="font-semibold">Service Booking:</span> Integrated appointment scheduling system for grooming, veterinary checkups, or pet boarding services.
                    </li>
                    <li>
                        <span className="font-semibold">Secure Payments:</span> Seamless online payment processing via Paymongo, supporting GCash, GrabPay, and Credit/Debit cards.
                    </li>
                    <li>
                        <span className="font-semibold">Business Management:</span> Comprehensive backend for managing inventory stock, tracking sales history, and maintaining digital customer records.
                    </li>
                    <li>
                        <span className="font-semibold">Reports & Visualization:</span> Provides real-time data visualization and generates detailed reports for sales performance and inventory health.
                    </li>
                </ul>
            </>
        ),
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
        techStack: [
            "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
            "https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white",
            "https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white",
            "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
        ],
        description: (
            <>
                <p className="mb-4 text-justify">
                    <b>iStud</b> is a simple software application built with C# and MySQL. It is designed to help schools or registrars manage student data, enrollment processes, and academic records efficiently without using manual paper files.
                </p>
                <p className="font-bold mb-2">Key Features:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <span className="font-semibold">Student Records:</span> securely stores personal details and profiles for every student in the system.
                    </li>
                    <li>
                        <span className="font-semibold">Enrollments & Payments:</span> Handles the registration process for new students and tracks tuition fee payments.
                    </li>
                    <li>
                        <span className="font-semibold">Courses:</span> Manages the list of subjects and classes available for enrollment.
                    </li>
                    <li>
                        <span className="font-semibold">Grades:</span> Allows specific users to input, calculate, and view student grades for their subjects.
                    </li>
                    <li>
                        <span className="font-semibold">Reports:</span> Generates simple summaries and lists for enrollment data, grades, and financial records.
                    </li>
                </ul>
            </>
        ),
        },
        
    ];

    // Check if the demo link is a YouTube, if not href link
    const isYouTubeEmbed = (url?: string) => {
        if (!url) return false;
        return url.includes("youtube.com/embed") || url.includes("youtu.be");
    };

    // State to track the current index of the slider
    const [index, setIndex] = useState(0);
    // State to track the active project for modal
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    
    // Dynamic state for visible cards based on screen size
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [videoLoading, setVideoLoading] = useState(true);


    // Effect to update itemsPerPage on window resize
    useEffect(() => {

        
        const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setItemsPerPage(3);
        } else if (window.innerWidth >= 320) {
            setItemsPerPage(2);
        } else {
            setItemsPerPage(1);
        }
        };

        // Set initial value
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // Effect to set video loading state when activeProject changes
    useEffect(() => {
    if (activeProject) {
        setVideoLoading(true);
    }
    }, [activeProject]);

    // Calculate maximum index based on current itemsPerPage
    const maxIndex = Math.max(projects.length - itemsPerPage, 0);

    // Ensure index is within bounds when itemsPerPage changes
    useEffect(() => {
        if (index > maxIndex) {
            setIndex(maxIndex);
        }
    }, [itemsPerPage, maxIndex, index]);

    return (
        <div className="border border-gray-200 dark:border-gray-800/30 rounded-lg flex flex-col p-6  shadow-sm dark:bg-gray-700/10 dark:shadow-gray-100/10">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h3 className="flex items-center font-bold text-gray-800 dark:text-white text-lg">
                <span className="material-icons scale-80">folder_copy</span>
                Projects
                </h3>

                {/* Controls */}
                <div className="flex gap-1 px-2">
                    <button
                        type="button"
                        onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                        disabled={index === 0}
                        className="flex items-center justify-center border rounded p-1 disabled:opacity-40 hover:cursor-pointer  hover:border-sky-600 hover:text-sky-600 dark:text-white"
                    >
                        <span className="material-icons scale-70">keyboard_arrow_left</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
                        disabled={index >= maxIndex}
                        className="flex items-center justify-center border rounded p-1 disabled:opacity-40 hover:cursor-pointer hover:border-sky-600 hover:text-sky-600 dark:text-white"
                    >
                        <span className="material-icons scale-70">
                        keyboard_arrow_right
                        </span>
                    </button>
                </div>
            </div>

            {/* Slider */}
       
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6  animate-elastic" key={index}>
                
                {projects.slice(index, index + itemsPerPage).map((p, i) => (
                    <div
                        key={i}
                        className="p-3 rounded-md shadow-md border border-gray-200 dark:border-gray-800/30 hover:scale-102 transition-transform  dark:shadow-gray-100/10 "
                    >
                        <div className="h-40">
                        {p.image && (
                            <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-full object-cover hover:object-scale-down  rounded-sm shadow-md"
                            />
                        )}
                        </div>
                        <h2 className="px-2  mt-5 font-bold text-md text-gray-700 dark:text-white">{p.title}</h2>
                        <p className="py-1 px-2 text-md mt-2 dark:text-gray-200">{p.desc}</p>

                        {/* // Demo and Code links */}
                        <div className="flex gap-2 px-1 mt-4 py-2 ">
                            {p.demo &&
                                (isYouTubeEmbed(p.demo) ? (
                                    // if video
                                    <button
                                    onClick={() => setActiveProject(p)}
                                    className="flex items-center hover:text-sky-600 text-sm dark:text-white"
                                    >
                                    <span className="material-icons scale-70">launch</span>
                                    Demo
                                    </button>
                                ) : (
                                    // if not video
                                    <a
                                    href={p.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-sky-600 text-sm dark:text-white"
                                    >
                                    <span className="material-icons scale-70">launch</span>
                                    Demo
                                    </a>
                                ))}

                                {/* source code  */}
                                <a
                                href={p.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:text-sky-600 text-sm dark:text-white"
                                >
                                <span className="material-icons scale-70">code</span>
                                Code
                                </a>
                        </div>
                </div>
                ))}
            </div>

            {/* Modal */}
            {activeProject && (
                <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 "
                onClick={() => setActiveProject(null)}
                >
                    <div
                        className="bg-white dark:bg-black rounded-lg w-[90%] max-w-4xl p-4 max-h-[90vh] overflow-y-auto scrollbar-none"
                        onClick={(e) => e.stopPropagation()}
                    >   
                      
                        {/* // video section */}
                        <div className="relative pt-[56.25%]">
                            
                            {/* // Skeleton loader */}
                            {videoLoading && (
                            <div className="absolute inset-0 w-full h-full  bg-gray-300 dark:bg-gray-400 rounded-md animate-pulse flex items-center justify-center">
                                <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>
                            </div>
                            )}
                            <iframe
                                className={`absolute inset-0 w-full h-full rounded-md ${videoLoading ? 'hidden' : ''}`}
                                src={`${activeProject.demo}?autoplay=1&mute=1`}
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                title={`${activeProject.title} demo video`}
                                onLoad={() => setVideoLoading(false)}

                            />
                        </div>

                        {/* tools used section */}
                        {activeProject.techStack && (
                        <div className="mt-4 px-6 ">
                            <h3 className="flex items-center font-bold text-gray-800 dark:text-white text-lg">
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
                        {activeProject.description && (
                            <div className="mt-6 px-6">
                                <h3 className="flex items-center font-bold text-gray-800 dark:text-white text-lg">
                                    <span className="material-icons scale-80 mr-1">info</span>
                                    Details
                                </h3>
                                <div className="flex flex-col mt-4 text-gray-900 dark:text-gray-200 p-4 bg-gray-50 rounded-md dark:bg-gray-800/30 shadow-sm dark:shadow-gray-100/10 ">
                                {activeProject.description}
                                </div>
                            </div>
                        )}  
                        <div className="mt-4 flex justify-start md:justify-end">
                            <button
                                onClick={() => setActiveProject(null)}
                                className="px-4 py-2 text-sm rounded-md bg-sky-600 text-white hover:bg-sky-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
    }