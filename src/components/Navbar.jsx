import { NavLink } from 'react-router-dom';
import { logo_ck } from '../assets/images';
// className='w-10 h-10 rounded-lg bg-white-items-center justify-center flex font-bold shadow-md'
const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo_ck} alt='logo' className='w-[15%] h-[15%] object-contain rounded-lg' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
