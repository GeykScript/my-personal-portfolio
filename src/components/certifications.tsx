        import { useState } from 'react';

        const certificates = [
        {
            title: "Full-Stack Web Development Bootcamp",
            image: "/certificate/udemy-web.jpg", 
            description: (
            <>
                Certificate of Completion from <span className='font-semibold group-hover:text-sky-500'>Udemy</span>, issued on June 15, 2025, for completing <span className='group-hover:underline underline-offset-3 group-hover:text-sky-500'>"The Complete Full-Stack Web Development Bootcamp."</span>
            </>
            )
        },
        {
            title: "Responsive Web Design",
            image: "/certificate/freecodecamp-web.png", 
            description: (
            <>
                Developer Certification from <span className='font-semibold group-hover:text-sky-500'>freeCodeCamp</span>, issued on June 30, 2023, for <span className='group-hover:underline underline-offset-3 group-hover:text-sky-500'> Completing approximately 300 hours of coursework.</span>
            </>
            )
        },
        {
            title: "C Intermediate",
            image: "/certificate/c-intermediate.png",
            description: (
            <>
                Course Certificate from <span className='font-semibold group-hover:text-sky-500'>Sololearn</span>, issued on June 22, 2023, for <span className='group-hover:underline underline-offset-3 group-hover:text-sky-500'>Completing the intermediate course in C programming.</span>
            </>
            )
        },
        {
            title: "Learn & Understand Java From Scratch",
            image: "/certificate/learn-java.jpg",
            description: (
            <>
                Certificate of Completion from <span className='font-semibold group-hover:text-sky-500'>Udemy</span>, issued on June 18, 2023, for completing <span className='group-hover:underline underline-offset-3 group-hover:text-sky-500'>"Learn & Understand Java From Scratch."</span>
            </>
            )
        },
        {
            title: "Introduction to Java",
            image: "/certificate/intro-to-java.jpg",
            description: (
            <>
                Course Certificate from <span className='font-semibold group-hover:text-sky-500'>Sololearn</span>, issued on June 19, 2023, for <span className='group-hover:underline underline-offset-3 group-hover:text-sky-500'>Completing the introductory course in Java programming.</span>
            </>
            )
        }
        ];

    export default function Certifications() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageLoading, setImageLoading] = useState(true);

    const handleOpenImage = (imagePath: string | null) => {
        if (imagePath) {
        setImageLoading(true); // 1. Reset loading immediately
        setSelectedImage(imagePath);
        }
    };

    const handleCloseImage = () => {
        setSelectedImage(null);
        setImageLoading(true);
    };

    return (
        <>
        <div className="border border-gray-200 rounded-lg flex flex-col justify-center p-4 shadow-sm relative dark:border-gray-800/30 dark:bg-gray-700/10 dark:shadow-gray-100/10">
            <div className="flex justify-between items-center">
            <h3 className="flex items-center font-bold text-gray-800 dark:text-white text-lg">
                <span className="material-icons scale-80 mr-1">workspace_premium</span>
                Certifications
            </h3>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200 px-1 gap-4 flex flex-col overflow-y-auto max-h-48 scrollbar-design pb-2">
            {certificates.map((cert, index) => (
                <div
                key={index}
                className="flex flex-col gap-1 group cursor-default p-1 rounded hover:bg-sky-50 dark:hover:bg-sky-700/10 hover:cursor-pointer"
                onClick={() => handleOpenImage(cert.image)}
                >
                <div className="flex items-start justify-between">
                    <h4 className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-sky-600 text-sm">
                    {cert.title}
                    </h4>
                    <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleOpenImage(cert.image);
                    }}
                    className="group-hover:text-sky-500 text-gray-700 dark:text-gray-200 hover:cursor-pointer transition-colors"
                    >
                    <span className="material-icons">fullscreen</span>
                    </button>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-50 leading-relaxed">
                    {cert.description}
                </p>
                </div>
            ))}
            </div>
        </div>

        {/* Modal */}
        {selectedImage && (
            <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={handleCloseImage}
            >
                <div className="w-auto max-w-[95vw] max-h-screen flex flex-col items-end relative">
                    
                    {/* Close Button - Only renders when NOT loading */}
                    {!imageLoading && (
                    <button
                        type="button"
                        onClick={(e) => {
                        e.stopPropagation();
                        handleCloseImage();
                        }}
                        className="text-gray-100 bg-none hover:cursor-pointer mb-2"
                    >
                        <span className="material-icons text-3xl">close</span>
                    </button>
                    )}

                    <div className="relative max-h-[85vh] w-auto max-w-full flex items-center justify-center">
                        
                        {/* Skeleton Loader */}
                        {imageLoading && (
                            <div 
                            className="h-50 md:h-70 w-xl bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse flex items-center justify-center"
                            >
                            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            </div>
                        )}

                        {/* Image */}
                        <img
                            key={selectedImage} 
                            src={selectedImage}
                            alt="Certificate"
                            // Keeps the image in the DOM but hidden until loaded to prevent layout jumps
                            className={`max-h-[85vh] w-auto max-w-full rounded-md shadow-2xl object-contain bg-white transition-opacity duration-300 ${
                            imageLoading ? 'hidden' : 'block'
                            }`}
                            onLoad={() => setImageLoading(false)}
                        />
                    </div>
                </div>
            </div>
        )}
        </>
    );
    }