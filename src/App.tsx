
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skill from "./components/sections/Skill"
import Project from "./components/sections/Project"
import Experience from "./components/sections/Experience"
import Contact from "./components/sections/Contact"
import Profile from "./components/sections/Profile"

function App(){
  return (
    <>
     <Navbar/>
     <main>
      <Hero/>
      <About/>
      <Skill/>
      <Profile/>
      <Project/>
      <Experience/>
      <Contact/>
     </main>
     <Footer/>
    </>
  )
}
export default App