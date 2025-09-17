import LogoImg from '../assets/logo.svg'
import HamburgerImg from '../assets/icon-hamburger.svg'
import HeroImgMobile from '../assets/mobile/image-hero.jpg';
import HeroImgDesktop from '../assets/desktop/image-hero.jpg';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import Menu from '../components/Menu';

const Hero = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
      {/* Mobile background */}
      <div
        className="md:hidden py-10 px-6 h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImgMobile})` }}
      >
        <HeroContent open={open} setOpen={setOpen} />
      </div>

      {/* Desktop background */}
      <div
        className="hidden md:block py-10 px-6 lg:py-[64px] lg:px-[165px] h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImgDesktop})` }}
      >
        <HeroContent open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

interface HeroContentProps{
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const HeroContent = ({open, setOpen}: HeroContentProps) => (
  <>
    <div className='flex justify-between items-center lg:hidden'>
        <img className='w-[144px] h-6' src={LogoImg} alt="loop Studios" />

        <button 
            onClick={() => setOpen(true)}
            className='cursor-pointer'
        >
            <img className='w-6 h-4' src={HamburgerImg} alt="click for menu" />
        </button>
    </div>
    <NavBar/>

    <div 
        className='lg:w-[650px] text-white font-light text-[40px] 
        py-4.5 min-xs:px-6 md:p-10 border-2 leading-[100%] mt-[163px]'
        >
      IMMERSIVE <br /> EXPERIENCES <br /> THAT <br className='sm:hidden'/> DELIVER
    </div>

    {/* Overlay Menu */}
    {open && <Menu onClose={() =>setOpen(false)}/>}
  </>
);

export default Hero;
