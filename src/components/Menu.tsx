import Logo from '../assets/logo.svg'
import Close from '../assets/icon-close.svg'

const Menu = () => {
  return (
    <div className='min-lg:hidden h-screen bg-black p-6 min-sm:p-24'>
        <div className='flex justify-between items-center gap-2.5'>
            <div><img src={Logo} alt="loopstudios logo" /></div>
            <div><img src={Close} alt="close icon" /></div>
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