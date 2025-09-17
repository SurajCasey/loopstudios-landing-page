import InteractiveMobile from '../assets/mobile/image-interactive.jpg'
import InteractiveDesktop from '../assets/desktop/image-interactive.jpg'


const AboutUs = () => {
  return (
    <div
        className='mx-6 md:mx-20 flex flex-col items-center relative lg:mx-0 xl:mx-[164px]
          lg:w-screen lg:flex-row lg:items-end'
    >
        <div>
            <img 
                className='sm:hidden max-h-[224px]'
                src={InteractiveMobile} 
                alt="Man using Vr" 
            />
            <img 
                className='hidden sm:block w-[608px] h-[284px] lg:w-[731px] lg:h-[500px] '
                src={InteractiveDesktop} 
                alt="Man using Vr" 
            />
        </div>
        <div
            className='mt-12 mx-6 text-center  lg:bg-white
                lg:text-left lg:w-[541px] lg:h-[317px] lg:pt-24 lg:pl-24 lg:-ml-[70px]
                '
        >
            <h1 className="uppercase mb-4 font-light text-3xl leading-[100%]">
                The leader in <br className='hidden lg:block'/> interactive VR
            </h1>
            <p className='leading-[165%] opacity-50'>
                Founded in 2011, Loopstudios has been producing world-class 
                virtual reality projects for some of the best companies around 
                the globe. Our award-winning creations have transformed businesses 
                through digital experiences that bind to their brand.
            </p>
        </div>
    </div>
  )
}

export default AboutUs
