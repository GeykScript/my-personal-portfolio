import Profile from "./components/profile";
import About from "./components/about";
import TechStack from "./components/tech-stack";
import Projects from "./components/projects";
import Education from "./components/education";
import Experience from "./components/experience";
import Certifications from "./components/certifications";

function App() {
  return (
      <div className="grid grid-cols-12 gap-1 bg-gray-100 dark:bg-black/92 min-h-screen">
          <Profile />
          <div className="col-span-12 grid grid-cols-3  w-full px-4  md:px-12 lg:px-30 gap-6 sm:gap-2 mt-2 mb-4">
            <div className="col-span-3 2xl:col-span-2 grid grid-rows-[0.5fr_0.5fr_1fr] gap-4 sm:gap-2">
                  <About />
                  <TechStack />
                  <Projects />

            </div>
            <div className="col-span-3 2xl:col-span-1 grid grid-rows-[0.4fr_1fr_0.6fr] gap-4 sm:gap-3 ">
                <Education />
                <Experience />
                <Certifications />                                        
            </div>
          </div>
      </div>
  )
}

export default App
