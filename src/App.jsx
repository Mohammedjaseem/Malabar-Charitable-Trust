import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import OtherInstitution from "./components/OtherInstitution"

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <OtherInstitution />
      <ContactUs />
      <Footer/>
    </div>
  )
}

export default App
