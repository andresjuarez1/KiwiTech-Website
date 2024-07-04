import React from 'react';

export const Navbar = () => {
    return (
        <nav className='flex items-center justify-between bg-[#F3F3F4]'>
            <div className='flex items-center pl-14 py-8'>
                <img src="../src/assets/kiwilogo-navbar.png" alt="kiwi-logo" className='h-14 w-[160px]'/>
            </div>
            <div className='px-10'>
                <a href="#services" className='m-10 text-lg text-gray-700 hover:text-gray-900'>Acerca de</a>
                <a href="#contact" className='m-10 text-lg text-gray-700 hover:text-gray-900'>Contáctanos</a>
                <a href="#projects" className='m-10 text-lg text-gray-700 hover:text-gray-900'>Nuestros Proyectos</a>
            </div>
        </nav>
    );
};