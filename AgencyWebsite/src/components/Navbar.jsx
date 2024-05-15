import React, { useEffect, useState } from 'react'
import Icon from "../assets/Icon.png"
import { Link } from 'react-scroll';
import { FaXmark,FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
}

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else setIsSticky(false);
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }, []);

    //navItems array
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonal", path: "testimonal" },
        { link: "FAQ", path: "faq" },
        
    ];

  return (
      <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 '>
         <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white" : ""}`}>

              <div className='flex  justify-between items-center text-base gap-8'>
                  <a href="" className='text-2xl font-semibold items-center space-x-3'><img src={Icon} alt="" className='w-10 inline-block items-center'/>
                      <span className='text-[#263238]'>Nexcent</span></a>
                  {/* for large devices screen */}
                  <ul className='md:flex space-x-12 hidden'>
                      {
                          navItems.map(
                              ({ link, path }) => <Link spy={true} smooth={true} key={path} to={path} offset={-100} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer'>{link}</Link>)
                      }
                  </ul>
                  <div className='space-x-12  hidden lg:flex items-center '>
                      <Link href="/" className='lg:flex items-center text-brandPrimary hover:text-gray900'>Login</Link>
                      <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey'>Sign Up</button>

                  </div>
                  {/* menu btn for mobile devices*/}
                  <div className='md:hidden'>
                      <button
                      onClick={toggleMenu}
                          className='focus:outline-none focus:text-gray-500'>
                          {
                              isMenuOpen?(<FaXmark className='h-6 w-6 '/>):(<FaBars className='h-6 w-6 '/>)
                          }
                      </button>
                  </div>
                 
              </div>
              {              /* nav itme sfor mobiel screen  */}   
              <div className={`space-y-4 mt-16 px-4 py-7 md:hidden bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>

                      {
                          navItems.map(({ link, path }) => <Link spy={true} smooth={true} key={path} to={path} offset={-100}className='block text-base text-white first:font-medium hover:text-brandPrimary'>
                            {link}
                        </Link>)  
                      }
                      
                 </div>
          </nav>
        
       
    </header>
  )
}

export default Navbar
