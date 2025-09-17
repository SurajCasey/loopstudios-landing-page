import AboutUs from "./sections/AboutUs"
import Creations from "./sections/Creations"
import Hero from "./sections/Hero"
import OurCreations from "./sections/OurCreations"


function App() {

  return (
    <div className="flex flex-col gap-24">
     <Hero/>
     <AboutUs/>
     <Creations/>
     <OurCreations/>
    </div>
  )
}

export default App
