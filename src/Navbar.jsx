import React from 'react';
import LogoNavbar from '../src/public/assets/kiwilogo-navbar.png'


export const Navbar = () => {
    return (
        <nav className='flex flex-col items-center lg:flex-row lg:items-center lg:justify-between bg-[#F3F3F4]'>
            <div className='pt-5 lg:flex lg:items-center lg:show lg:pl-14 lg:py-8'>
                <img src={LogoNavbar} alt="kiwi-logo" className='h-9 w-[100px] lg:h-14 lg:w-[160px]' />
            </div>
            <div className='flex justify-center lg: gap-5 pt-3 lg:px-10'> 
                <a href="#services" className='text-sm font-semibold lg:font-normal lg:m-10 lg:text-lg text-gray-700 hover:text-gray-900'>Acerca de</a>
                <a href="#contact" className='text-sm font-semibold lg:font-normal lg:m-10 lg:text-lg text-gray-700 hover:text-gray-900'>Contáctanos</a>
                <a href="#projects" className='text-sm font-semibold lg:font-normal lg:m-10 lg:text-lg text-gray-700 hover:text-gray-900'>Nuestros Proyectos</a>
            </div>
        </nav>
    );
};