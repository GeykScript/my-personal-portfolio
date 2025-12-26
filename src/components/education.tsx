export default function Education() {
    return (
         <div className="border border-gray-200 rounded-lg flex flex-col p-4 shadow-sm ">
            <div className="flex justify-between items-center">
                <h3 className="flex items-center font-bold text-gray-800 text-lg">
                <span className="material-icons scale-80 mr-1">school</span>
                Education
                </h3>
            </div>
            <div className="mt-2 p-2 border-t-2 border-gray-100">
                <h2 className="font-bold text-gray-700 mt-1">Bachelor of Science in Information Technology</h2>
                <div className="flex items-center gap-1 mt-1">
                     <img src="BU-LOGO.jpeg" alt="Bicol University Logo" className="w-6 h-6 rounded-full" />
                    <h3 className="font-bold text-gray-600 text-sm ">Bicol University</h3>
                </div>
                <p className="text-sm text-gray-500 flex items-center gap-1"><span className="material-icons scale-70 text-gray-500">calendar_month</span>
                   4th Year Undergraduate, Expected 2026</p>
            </div>
        </div>
    );
}