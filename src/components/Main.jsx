import Footer from "./Footer"
import Intro from "./Intro"
import Navbar from "./Navbar"
import Project from "./Project"
import Skills from "./Skills"

const Main = () => {
  return (
    <div className="bg-indigo-500">
      <Navbar></Navbar>
      <Intro></Intro>
      <Project></Project>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  )
}

export default Main
