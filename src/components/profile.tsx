import DarkMode from "./darkmode";

export default function profile() {

    return (
        <div className="col-span-12 px-36 h-full w-full  ">
            <div className="relative">
                <div className="bg-gradient-to-r from-black to-gray-600 items-center justify-center h-32 flex rounded-b-sm shadow-lg">
                    <h1 className="text-white text-2xl font-bold ">Web Developer</h1>
                </div>

                {/* Profile Section */}
                <div className="bg-gray-100 flex gap-4 pt-2 px-12">
                    <div className="w-54 h-48 flex items-center relative -mt-26 p-1">
                        <div className="inline-block rounded-full border-4 border-white shadow-lg">
                            <img src="jake.jpg" alt="Profile" className="w-full h-auto rounded-full border-4 border-blue-600" />
                        </div>
                            {/* green dot  */}
                            <span className="h-5 w-5 bg-green-500 rounded-full absolute bottom-7 right-7 border-2 border-white"></span>
                    </div>

                    <div className="grid grid-cols-12 w-full gap-1">
                        {/* info  */}
                        <div className="col-span-5 flex flex-col items-start justify-center gap-1">
                            <h2 className="text-3xl font-bold flex items-center justify-center gap-3">Jervy Jake O. Morales
                                <span className="material-icons text-blue-600  ">verified</span>
                            </h2>
                            <h3 className="flex items-start font-semibold text-gray-600"><span className="material-icons text-gray-600 scale-75">location_on</span>Albay, Philippines</h3>
                        </div>
                        {/* buttons  */}
                        <div className="col-span-6 flex justify-center gap-2 py-6">
                            <button type="button" className="text-white bg-gray-900 px-4  rounded-lg text-sm flex items-center  ">
                                <span className="material-icons-outlined text-white scale-70">description</span>View Resume</button>
                            <button type="button" className="text-gray-900 border border-gray-400  px-4  rounded-lg text-sm flex items-center  ">
                                <span className="material-icons text-gray-900 scale-70">email</span>Send Email</button>
                            <button type="button" className="text-gray-900 border border-gray-400  px-4  rounded-lg text-sm flex items-center ">
                                <span className="material-icons text-gray-900 scale-70">phone</span>Call/Text</button>                          
                        </div>
                            <DarkMode/>
                    </div>
                </div>
            </div>
        </div>
    );
}