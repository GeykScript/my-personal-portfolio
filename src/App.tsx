import Profile from "./components/profile";
import About from "./components/about";
import TechStack from "./components/tech-stack";
import Projects from "./components/projects";

function App() {
  return (
    <section className="min-h-screen bg-gray-100">
      <div className = "grid grid-cols-12 gap-1">
          <Profile />

          <div className="col-span-12 grid grid-cols-3 h-90 w-full px-36 gap-2 mt-2">
            <div className="col-span-2 flex flex-col gap-2">
                  <About />
                  <TechStack />
                  <Projects />
            </div>
            <div className="col-span-1 grid grid-rows-3 gap-2 ">
                <div className="bg-gray-200">
                  Education
                </div>              
                <div className="bg-gray-200">
                  Experience
                </div>              
                <div className="bg-gray-200">
                  Certifications
                </div>              
            </div>
          </div>
      </div>
    </section>
  )
}

export default App
