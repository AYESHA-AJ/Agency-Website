import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Icon from "../assets/Icon.png";

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
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "Service", path: "/service" },
        { link: "About", path: "/about" },
        { link: "Product", path: "/product" },
        { link: "Testimonal", path: "/testimonal" },
        { link: "FAQ", path: "/blog" },
    ];

    return (
        <header className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ${isSticky ? 'border-b' : ''}`}>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? 'bg-white' : ''}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={Icon} alt="Icon" className='w-10 inline-block' />
                        <span className='text-[#263238]'>Nexcent</span>
                    </a>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className='block text-base text-gray-900 hover:text-brandPrimary first:font-medium cursor-pointer'>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <Link to="/login" className='text-brandPrimary hover:text-gray-900'>Login</Link>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey'>Sign Up</button>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
                        </button>
                    </div>
                </div>
                <div className={`space-y-4 mt-16 px-4 py-7 md:hidden bg-brandPrimary ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className='block text-base text-white first:font-medium hover:text-brandPrimary'>
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
