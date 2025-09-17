import Card from "../components/Card"
import Button from "../components/Button"

import DeepEarthMobile from '../assets/mobile/image-deep-earth.jpg'
import NightArcadeMobile from '../assets/mobile/image-night-arcade.jpg'
import SoccerTeamMobile from '../assets/mobile/image-soccer-team.jpg'
import GridMobile from '../assets/mobile/image-grid.jpg'
import FromAboveMobile from '../assets/mobile/image-from-above.jpg'
import PocketBorealisMobile from '../assets/mobile/image-pocket-borealis.jpg'
import CuriosityMobile from '../assets/mobile/image-curiosity.jpg'
import FisheyeMobile from '../assets/mobile/image-fisheye.jpg'

import DeepEarthDesktop from '../assets/desktop/image-deep-earth.jpg'
import NightArcadeDesktop from '../assets/desktop/image-night-arcade.jpg'
import SoccerTeamDesktop from '../assets/desktop/image-soccer-team.jpg'
import GridDesktop from '../assets/desktop/image-grid.jpg'
import FromAboveDesktop from '../assets/desktop/image-from-above.jpg'
import PocketBorealisDesktop from '../assets/desktop/image-pocket-borealis.jpg'
import CuriosityDesktop from '../assets/desktop/image-curiosity.jpg'
import FisheyeDesktop from '../assets/desktop/image-fisheye.jpg'


const creations = [
    { mobile:DeepEarthMobile , desktop:DeepEarthDesktop , title:"DEEP EARTH"},
    { mobile:NightArcadeMobile, desktop:NightArcadeDesktop , title:"NIGHT ARCADE" },
    { mobile:SoccerTeamMobile, desktop:SoccerTeamDesktop , title:"SOCCER TEAM VR" },
    { mobile:GridMobile , desktop:GridDesktop , title:"THE GRID" },
    { mobile:FromAboveMobile , desktop:FromAboveDesktop , title:"FROM UP ABOVE VR" },
    { mobile:PocketBorealisMobile , desktop:PocketBorealisDesktop , title:"POCKET BOREALIS" },
    { mobile:CuriosityMobile , desktop:CuriosityDesktop , title:"THE CURIOSITY" },
    { mobile:FisheyeMobile , desktop:FisheyeDesktop , title:"MAKE IT FISHEYE" },
]
       


const OurCreations = () => {
  return (
    <div
        className="w-full flex flex-col justify-center items-center "
    >
        <div className=" mb-12 lg:w-[1120px] lg:flex lg:justify-between">
            <h2 
                className="uppercase font-light text-[32px] leading-[100%] "
            >
                Our Creations
            </h2>
            <div className="hidden lg:block">
                <Button />
            </div>
        </div>
        <div
            className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-4 gap-8"
        >
            {creations.map((item,index) =>(
                <Card
                    key={index}
                    mobile={item.mobile}
                    desktop= {item.desktop}
                    title = {item.title} 
                />
            ))}
        </div>

      <div className="lg:hidden">
        <Button/>
      </div>
    </div>
  )
}

export default OurCreations
