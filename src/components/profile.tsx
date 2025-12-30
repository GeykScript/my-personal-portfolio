import DarkMode from "./darkmode";
import { useState } from "react";


export default function profile() {
  const [open, setOpen] = useState(false);

    return (
        <div className="col-span-12 px-36 h-full w-full  ">
            <div className="relative">
                <div className="bg-gradient-to-r from-black to-gray-600 items-center justify-center h-32 flex rounded-b-sm shadow-lg">
                    <h1 className="text-white text-2xl font-bold ">Web Developer</h1>
                </div>

                {/* Profile Section */}
                <div className="bg-white flex gap-4 pt-2 px-12">
                    <div className="w-54 h-48 flex items-center relative -mt-26 p-1">
                        <div className="inline-block rounded-full border-4 border-white shadow-lg">
                            <img src="MyPic.png" alt="Profile" className="w-full h-auto rounded-full border-4 border-blue-600" />
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
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-900 px-4  rounded-lg text-sm flex items-center  hover:shadow-lg hover:cursor-pointer hover:bg-sky-600 hover:border-sky-400">
                                <span className="material-icons-outlined scale-70">description</span>View Resume</a>
                            <a rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=jervyjakemorales07@gmail.com" target="_blank" 
                                className="text-gray-900 border border-gray-400  px-4  rounded-lg text-sm flex items-center  hover:shadow-md hover:cursor-pointer hover:text-sky-600 hover:border-sky-600">
                                <span className="material-icons  scale-70">email</span>Send Email</a>
                            <button 
                                type="button"             
                                onClick={() => setOpen(!open)}
                                className="text-gray-900 border border-gray-400  px-4  rounded-lg text-sm flex items-center hover:shadow-md hover:cursor-pointer hover:text-sky-600 hover:border-sky-600 ">
                                    <span className="material-icons  scale-70">call</span>Contact Me</button>                          
                        </div>
                            <DarkMode/>
                    </div>
                </div>
            </div>

               {/* Modal */}
                    {open &&  (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setOpen(false)}>
                            <div className="bg-white rounded-lg p-6 w-96">
                                <div className="flex items-center justify-end">
                                    <button className="flex " onClick={() => setOpen(false)}>
                                        <span className="material-icons text-gray-900 scale-70">close</span>
                                    </button>
                                </div>
                          
                                <h2 className="text-lg text-center text-gray-800 font-bold mb-2">Contact Details</h2>
                                <div className="px-7 flex flex-col  ">
                                <hr className="mb-4 bg-gray-500" />
                                    <p>Call or Message me on:</p>
                                    <div className="flex flex-col mt-2 ">
                                        <div className="flex item-center gap-2  "> 
                                            <div className="flex items-center ">
                                            <img src="PH-Flag.png" alt="PH Flag" className="w-8 h-4 " />
                                            </div>
                                            <a href="tel:+639669892331" className="text-sky-600 hover:underline hover:underline-offset-6 font-semibold"><span className="text-gray-500 ">(+63)</span> 966 989 2331</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="flex item-center gap-2  "> 
                                            <div className="flex items-center ">
                                            <img src="PH-Flag.png" alt="PH Flag" className="w-8 h-4 " />
                                            </div>
                                            <a href="tel:+639916863623" className="text-sky-600 hover:underline hover:underline-offset-6 font-semibold"><span className="text-gray-500 ">(+63)</span> 991 686 3623</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-4 ">
                                    <p>Viber:</p>
                                        <div className="flex item-center gap-2  "> 
                                            <div className="flex item-center  "> 
                                                <img src="viber.svg" alt="PH Flag" className="w-8 h-8 " />
                                            </div>
                                            <p className="text-violet-600  font-semibold"><span className="text-gray-500 ">(+63)</span> 966 986 2331</p>
                                        </div>
                                    </div>
                                        
                                </div>
                                
                            </div>                           
                        </div>
                    )}
        </div>

        
    );
}