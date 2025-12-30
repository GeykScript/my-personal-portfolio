    import { useState } from 'react';

    const certificates = [
    {
        title: "Full-Stack Web Development Bootcamp",
        image: "/certificate/udemy-web.jpg", 
        description: (
        <>
            Certificate of Completion from <b>Udemy</b>, issued on June 15, 2025, for completing "The Complete Full-Stack Web Development Bootcamp."
        </>
        )
    },
    {
        title: "Responsive Web Design",
        image: "/certificate/freecodecamp-web.png", 
        description: (
        <>
            Developer Certification from <b>freeCodeCamp</b>, issued on June 30, 2023, for completing approximately 300 hours of coursework.
        </>
        )
    },
    {
        title: "C Intermediate",
        image: "/certificate/c-intermediate.png",
        description: (
        <>
            Course Certificate from <b>Sololearn</b>, issued on June 22, 2023, for completing the intermediate course in C programming.
        </>
        )
    },
    {
        title: "Learn & Understand Java From Scratch",
        image: "/certificate/learn-java.jpg",
        description: (
        <>
            Certificate of Completion from <b>Udemy</b>, issued on June 18, 2023, for completing "Learn & Understand Java From Scratch."
        </>
        )
    },
    {
        title: "Introduction to Java",
        image: "/certificate/intro-to-java.jpg",
        description: (
        <>
            Course Certificate from <b>Sololearn</b>, issued on June 19, 2023, for completing the introductory course in Java programming.
        </>
        )
    }
    ];

    export default function Certifications() {
    // 2. State to track which image is currently clicked
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleOpenImage = (imagePath: string | null) => {
        if (imagePath) {
        setSelectedImage(imagePath);
        }
    };

    const handleCloseImage = () => {
        setSelectedImage(null);
    };

    return (
        <>
        <div className="border border-gray-200 rounded-lg flex flex-col p-4 shadow-sm relative">
            <div className="flex justify-between items-center">
            <h3 className="flex items-center font-bold text-gray-800 text-lg">
                <span className="material-icons scale-80 mr-1">workspace_premium</span>
                Certifications
            </h3>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200 px-2 gap-4 flex flex-col overflow-y-auto max-h-49 scrollbar-design pb-2">
            {certificates.map((cert, index) => (
                <div key={index} className="flex flex-col gap-1 ">
                <div className="flex items-start justify-between">
                    <h4 className="font-bold text-gray-700 text-sm">
                    {cert.title}
                    </h4>
                    {/* 3. Update button to trigger the open function */}
                    <button 
                    type="button" 
                    onClick={() => handleOpenImage(cert.image)}
                    className="hover:text-sky-600 text-gray-700 hover:cursor-pointer transition-colors"
                    >
                    <span className="material-icons ">fullscreen</span>
                    </button>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{cert.description}</p>
                </div>
            ))}
            </div>
        </div>

        {/* 4. The Modal (Overlay) - Only shows if selectedImage is not null */}
        {selectedImage && (
            <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" 
    onClick={handleCloseImage}
    >
    <div className="w-auto max-w-[95vw] max-h-screen flex flex-col items-end relative">
        
        {/* Close Button */}
        <button 
        onClick={handleCloseImage}
        className="text-gray-100 bg-none hover:cursor-pointer "
        >
        <span className="material-icons text-3xl">close</span>
        </button>
        
        {/* The Image */}
        <img 
        src={selectedImage} 
        alt="Certificate" 
        className="max-h-[85vh] w-auto max-w-full rounded-md shadow-2xl object-contain bg-white"
        onClick={(e) => e.stopPropagation()} 
        />
    </div>
    </div>
        )}
        </>
    );
    }