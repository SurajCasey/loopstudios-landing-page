import Logo from '../assets/logo.svg'
import SocialMedia from './SocialMedia'
const Footer = () => {
  return (
    <div className="bg-black flex flex-col p-14 md:px-20 md:py-[43.5px] lg:px-[165px] items-center gap-10 md:gap-0">
        <div className='w-full flex justify-center md:justify-between'>
            <div>
                <img src={Logo} alt="loopstudios logo" className='w-[144px] h-6'/>
            </div>
            <div className='hidden md:flex'>
                <SocialMedia/>
            </div>
        </div>
        <div 
            className='w-full text-white flex flex-col md:flex-row items-center mt-6 
                md:justify-between'
        >
            <ul className='flex gap-8 flex-col md:flex-row mb-10 md:mb-0'>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
            <div className='flex md:hidden'>
                <SocialMedia/>
            </div>
            <p className='opacity-50 mt-4 md:mt-0'>
                © 2021 Loopstudios. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
