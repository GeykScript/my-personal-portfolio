import Profile from "./components/profile";
import About from "./components/about";
import TechStack from "./components/tech-stack";
import Projects from "./components/projects";
import Education from "./components/education";
import Experience from "./components/experience";
import Certifications from "./components/certifications";

function App() {
  return (
      <div className="grid grid-cols-12 gap-1">
          <Profile />

          <div className="col-span-12 grid grid-cols-3  w-full px-36 gap-2 mt-2 mb-4">
            <div className="col-span-2 flex flex-col gap-2">
                  <About />
                  <TechStack />
                  <Projects />
            </div>
            <div className="col-span-1 grid grid-rows-[0.4fr_1fr_0.7fr] gap-2 ">
                <Education />
                <Experience />
                <Certifications />                                        
            </div>
          </div>
      </div>
  )
}

export default App
