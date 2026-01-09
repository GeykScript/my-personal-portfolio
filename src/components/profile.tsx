import DarkMode from "./darkmode";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';


export default function profile() {
  const [open, setOpen] = useState(false);

    return (
        <div className="col-span-12 md:px-12 lg:px-30 h-full w-full  ">
            <div className="relative">
                <div className="animate-gradient dark:from-black/10 dark:to-gray-600/10 items-center justify-center h-32 flex rounded-b-sm shadow-lg shadow-black/30 dark:shadow-gray-600/40">
                    <div className="text-center">
                        <h3 className="text-white text-md text-style">Aspiring to be a</h3>
                    <TypeAnimation
                        sequence={[
                            'Web Developer',
                            1500, 
                            'UI/UX Designer',
                            1500,
                            'Software Engineer',
                            1500
                        ]}
                        wrapper="h1"
                        speed={50}
                        className="text-white text-2xl xl:text-4xl text-style font-bold"
                        repeat={Infinity}
                        />
                    </div>
                </div>

                {/* Profile Section */}
                <div className="flex xl:flex-row flex-col gap-4 pt-2 px-6  xl:px-12">
                    {/* picture  */}
                    <div className="h-34 w-34 sm:h-40 sm:w-40 xl:w-54 xl:h-48 flex items-center relative -mt-12 sm:-mt-26 p-1">
                        <div className="inline-block rounded-full border-4 border-white dark:border-gray-900 shadow-lg">
                            <img src="MyPic.png" alt="Profile" className="w-full h-auto rounded-full border-4 border-blue-600" />
                        </div>
                            {/* green dot  */}
                            <span className="h-4 w-4 xl:h-5 xl:w-5 bg-green-500 rounded-full absolute bottom-2 right-5  xl:bottom-7 xl:right-6 border-2 border-white"></span>
                    </div>

                    <div className="grid grid-cols-12 w-full gap-1">
                        {/* info  */}
                        <div className="col-span-12 md:col-span-12 xl:col-span-5 flex flex-col items-start justify-center gap-1">
                            <h2 className="text-2xl sm:text-2xl 2xl:text-3xl font-bold flex items-center text-gray-900 dark:text-white gap-3">Jervy Jake O. Morales
                                <span className="material-icons text-blue-600  ">verified</span>
                            </h2>
                            <h3 className="flex items-start font-semibold text-gray-600 dark:text-gray-400"><span className="material-icons text-gray-600 dark:text-gray-400 scale-75">location_on</span>Albay, Philippines</h3>
                        </div>
                        {/* buttons  */}
                        <div className="col-span-12 md:col-span-11  xl:col-span-6 flex justify-center gap-2 xl:py-6 py-4 ">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-900 dark:bg-sky-600 px-2 lg:px-4 py-1 sm:py-2 text-center rounded-lg text-xs 2xl:text-sm flex justify-center items-center  hover:shadow-lg hover:cursor-pointer hover:bg-sky-500 hover:border-sky-500 dark:shadow-gray-100/10">
                                <span className="material-icons-outlined scale-70">description</span>View Resume</a>
                            <a rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=jervyjakemorales07@gmail.com" target="_blank" 
                                className="dark:text-gray-300 text-gray-900 border border-gray-400 dark:border-gray-300 px-2 lg:px-4 py-1 sm:py-2  rounded-lg text-xs 2xl:text-sm flex justify-center text-center items-center  hover:shadow-lg hover:cursor-pointer hover:text-sky-600 hover:border-sky-600 dark:shadow-gray-100/10 ">
                                <span className="material-icons scale-70">email</span>Send Email</a>
                            <button 
                                type="button"             
                                onClick={() => setOpen(!open)}
                                className="dark:text-gray-300 text-gray-900 border border-gray-400  dark:border-gray-300  px-2 lg:px-4 py-1 sm:py-2  rounded-lg text-xs 2xl:text-sm flex justify-center items-center hover:shadow-lg hover:cursor-pointer hover:text-sky-600 hover:border-sky-600 dark:shadow-gray-100/10 ">
                                    <span className="material-icons  scale-70">call</span>Contact Me</button>                          
                        </div>
                            <DarkMode/>
                    </div>
                </div>
            </div>

               {/* Modal */}
                    {open &&  (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setOpen(false)}>
                            <div className="dark:bg-black/90 bg-white rounded-lg p-6 w-94">
                                <div className="flex items-center justify-end">
                                    <button className="flex " onClick={() => setOpen(false)}>
                                        <span className="material-icons dark:text-white text-gray-900 scale-70">close</span>
                                    </button>
                                </div>
                                <h2 className="text-xl text-start dark:text-white text-gray-800 font-bold mb-2 px-6">Get in Touch</h2>
                                <div className="px-7 flex flex-col  ">
                                    <hr className="mb-4 dark:bg-white bg-gray-500" />
                                    <p className="dark:text-white">Call or Message me on:</p>
                                    <div className="flex flex-col mt-2 ">
                                        <div className="flex item-center gap-2  "> 
                                            <div className="flex items-center ">
                                            <img src="PH-Flag.png" alt="PH Flag" className="w-8 h-4 " />
                                            </div>
                                            <a href="tel:+639669892331" className="text-sky-600 hover:underline hover:underline-offset-6 font-semibold"><span className="dark:text-white text-gray-500 ">(+63)</span> 966 989 2331</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="flex item-center gap-2  "> 
                                            <div className="flex items-center ">
                                            <img src="PH-Flag.png" alt="PH Flag" className="w-8 h-4 " />
                                            </div>
                                            <a href="tel:+639916863623" className="text-sky-600 hover:underline hover:underline-offset-6 font-semibold"><span className="dark:text-white text-gray-500 ">(+63)</span> 991 686 3623</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-4 ">
                                    <p className="dark:text-white">Viber:</p>
                                        <div className="flex item-center gap-2 mt-1  "> 
                                            <div className="flex item-center  "> 
                                                <img src="viber.svg" alt="PH Flag" className="w-8 h-8 " />
                                            </div>
                                            <p className="text-violet-600  font-semibold"><span className="dark:text-white text-gray-500 ">(+63)</span> 966 986 2331</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-4 gap-2 ">
                                    <p className="dark:text-white">Socials:</p>
                                        <div className="flex item-center gap-2  "> 
                                            <a href="https://www.facebook.com/jervy.jake.morales/" target="_blank" rel="noopener noreferrer" className="flex item-center hover:scale-102 hover:opacity-90 transition-transform "> 
                                                <img src="https://img.shields.io/badge/facebook-%230866FF.svg?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" className="w-full rounded-md" />
                                            </a>
                                            <a href="https://www.instagram.com/geyykk?igsh=N2xsbjNtNWJicDBn" target="_blank" rel="noopener noreferrer" className="flex item-center hover:scale-102 hover:opacity-90 transition-transform "> 
                                                <img src="https://img.shields.io/badge/instagram-%23FF0069.svg?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" className="w-full rounded-md" />
                                            </a>
                                        </div>
                                    </div>    
                                </div>
                                
                            </div>                           
                        </div>
                    )}
        </div>

        
    );
}