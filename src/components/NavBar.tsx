import Logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <div className='hidden lg:flex justify-between'>
      <div>
        <img src={Logo} alt="loopstudios logo" className='cursor-pointer'/>
      </div>
      <div>
        <ul className='flex gap-8 text-white leading-relaxed'>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
