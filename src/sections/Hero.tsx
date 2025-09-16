import LogoImg from '../assets/logo.svg'
import HamburgerImg from '../assets/icon-hamburger.svg'
import HeroImgMobile from '../assets/mobile/image-hero.jpg';
import HeroImgDesktop from '../assets/desktop/image-hero.jpg';
import NavBar from '../components/NavBar';

const Hero = () => {
  return (
    <>
      {/* Mobile background */}
      <div
        className="md:hidden py-10 px-6 h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImgMobile})` }}
      >
        <HeroContent />
      </div>

      {/* Desktop background */}
      <div
        className="hidden md:block py-10 px-6 h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImgDesktop})` }}
      >
        <HeroContent />
      </div>
    </>
  );
};

const HeroContent = () => (
  <>
    <div className='flex justify-between items-center lg:hidden'>
        <img className='w-[144px] h-6' src={LogoImg} alt="loop Studios" />
        <img className='w-6 h-4' src={HamburgerImg} alt="click for menu" />
    </div>
    <NavBar/>

    <div 
        className='lg:w-[650px] text-white font-light text-[40px] 
        py-4.5 min-xs:px-6 md:p-10 border-2 leading-[100%] mt-[163px]'
        >
      IMMERSIVE <br /> EXPERIENCES <br /> THAT <br className='sm:hidden'/> DELIVER
    </div>
  </>
);

export default Hero;
