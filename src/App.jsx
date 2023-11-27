import AboutMeSection from "./components/AboutMeSection"
import BannerSection from "./components/BannerSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ProjectsSection from "./components/ProjectsSection"
import TechSection from "./components/TechSection"
import './styles/reset.css'
import './styles/style.css'

function App() {

  return (
    <>
      <Header/>
      <BannerSection/>
      <AboutMeSection/>
      <TechSection/>
      <ProjectsSection/>
      <Footer/>
    </>
  )
}

export default App