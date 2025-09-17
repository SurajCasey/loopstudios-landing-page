import Logo from '../assets/logo.svg'
import Close from '../assets/icon-close.svg'

interface MenuProps {
  onClose: () => void
}

const Menu = ({onClose}: MenuProps) => {
  return (
    <div className='min-lg:hidden w-screen h-screen bg-black p-6 min-sm:p-24'>
        <div className='flex justify-between items-center gap-2.5'>
            <div><img src={Logo} alt="loopstudios logo" /></div>
            <button
              onClick={onClose}
              className='cursor-pointer'
            >
              <img src={Close} alt="close icon" />
            </button>
        </div>
        <div className='text-white mt-40 min-sm:mt-32'>
            <ol className='flex flex-col gap-6 text-2xl font-light'>
                <li>ABOUT</li>
                <li>CAREERS</li>
                <li>EVENTS</li>
                <li>PRODUCTS</li>
                <li>SUPPORT</li>
            </ol>
        </div>
    </div>
  )
}

export default Menu