import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'

const SocialMedia = () => {
  return (
    <div>
       <div className='flex gap-4'>
                <img src={Facebook} alt="Facebook" className='w-6 h-6'/>
                <img src={Twitter} alt="Twitter" className='w-6 h-6'/>
                <img src={Pinterest} alt="Pinterest" className='w-6 h-6'/>
                <img src={Instagram} alt="Instagram" className='w-6 h-6'/>
            </div>
    </div>
  )
}

export default SocialMedia
