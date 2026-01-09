export default function Education() {
    return (
         <div className="border border-gray-200 rounded-lg flex flex-col justify-center p-4 shadow-sm dark:bg-gray-700/10 dark:shadow-gray-100/10   dark:border-gray-800/30 ">
            <div className="flex justify-between items-center">
                <h3 className="flex items-center font-bold text-gray-800 dark:text-white text-lg">
                <span className="material-icons scale-80 mr-1">school</span>
                Education
                </h3>
            </div>
            <div className="mt-2 p-2 border-t-2 border-gray-100 dark:border-gray-100/10">
                <h2 className="font-bold text-gray-600 dark:text-gray-200 mt-1 text-[16.8px]">Bachelor of Science in Information Technology</h2>
                <a href="https://bicol-u.edu.ph" rel="noopener noreferrer" target="_blank" className="flex items-center gap-1 mt-1 w-39 rounded-md  shadow-md p-2 hover:scale-102 hover:opacity-90 transition-transform">
                     <img src="BU-ICON.png" alt="Bicol University Logo" className="w-full h-full " />
                    {/* <h3 className="font-bold text-md  text-[#009BDE] ">Bicol <span className="text-[#F29137]">University</span></h3> */}
                </a>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1 px-1"><span className="material-icons scale-70 text-gray-500 dark:text-gray-400">calendar_month</span>
                   2022-Present</p>
            </div>
        </div>
    );
}