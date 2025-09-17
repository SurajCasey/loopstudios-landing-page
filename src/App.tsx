import Footer from "./components/Footer"
import AboutUs from "./sections/AboutUs"
import Hero from "./sections/Hero"
import OurCreations from "./sections/OurCreations"


function App() {

  return (
    <div className="flex flex-col gap-24">
     <Hero/>
     <AboutUs/>
     <OurCreations/>
     <Footer/>
    </div>
  )
}

export default App
