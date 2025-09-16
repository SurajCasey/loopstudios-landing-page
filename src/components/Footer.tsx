import Logo from '../assets/logo.svg'
import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'


const Footer = () => {
  return (
    <div className="bg-black">
        <div className='flex justify-between'>
            <div>
                <img src={Logo} alt="loopstudios logo" className='w-[144px] h-6'/>
            </div>
            <div className='flex gap-4'>
                <img src={Facebook} alt="Facebook" className='w-6 h-6'/>
                <img src={Twitter} alt="Twitter" className='w-6 h-6'/>
                <img src={Pinterest} alt="Pinterest" className='w-6 h-6'/>
                <img src={Instagram} alt="Instagram" className='w-6 h-6'/>
            </div>
        </div>
        <div className='text-white flex justify-between mt-6'>
            <ul className='flex gap-8'>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
            <p className='opacity-50'>
                © 2021 Loopstudios. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
