import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6';
const Navbar = () => {
  const[ismenuOpen, setIsmenuOpen] = React.useState(false);

    const handleMenuToggler = () => {
        setIsmenuOpen(!ismenuOpen)
    }
    const navItems = [
      {path: "/", title: "Start a Search"},
      {path: "/my-job", title: "My Jobs"},
      {path: "/salary", title: "Salary Estimate"},
      {path: "/post-job", title: "Post A Job"},
  ]
  return (
   <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    <nav className='flex justify-between items-center py-6'>
      <a href='/' className='flex item-center gap-2 text-2x1 text-black'>
      <svg width="30" height="30" viewBox="0 0 258 257" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="146.895" cy="145.56" rx="110.895" ry="110.56" fill="#2C7EDD"/>
      <ellipse cx="110.895" cy="104.019" rx="110.895" ry="104.019" fill="#6BAFEE"/>
      </svg>
        <span>JobPortal</span>
      </a>

      {/* nav items for large devices */}
      <ul className='hidden md:flex gap-12'>
        {navItems.map(({path,title}) => (
                <li key={path}   className='text-base text-primary'>
                <NavLink
                to={path}
                className={({ isActive }) =>
                isActive  ? "active"  : ""
                }
            >
                {title}
            </NavLink></li>
                
        ))} 
      </ul>

      {/* sign up and login button */}
      <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
        <Link to="/login" className='py-2 px-5 border rounded'> Log In</Link>
        <Link to="/sign-up" className='py-2 px-5 border rounded bg-blue text-white'> Sign Up</Link>       
      </div>
      {/*mobile menu*/}
      <div className='md:hidden block'>
          <button onClick={handleMenuToggler}>
           {
                ismenuOpen ? <FaXmark className='w-5 h-5 text-primary'/> : <FaBarsStaggered  className='w-5 h-5 text-primary'/>
          }
          </button>
      </div>
    </nav>
    {/* mobile nav items */}
    <div className={`px-4 bg-black py-5 rounded-sm ${ ismenuOpen ? "" : "hidden" }`}>
      <ul>
      {navItems.map(({path,title}) => (
                <li key={path}   className='text-base text-white first:text-white py-1'>
                <NavLink
                to={path}
                className={({ isActive }) =>
                isActive  ? "active"  : ""
                }
            >
                {title}
            </NavLink></li>
                
        ))} 
          <li className='text-white py-1'> <Link to="/login" className='py-2 px-5 border rounded'> Log In</Link></li>
      </ul>
    </div>
  </header>
  )
}

export default Navbar