import React from 'react'
import Hero from '../src/public/assets/hero-image.png'

const HeroSection = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] grid grid-cols-2 font-josefin'>
                <div className='pt-[250px] ml-[13%] pb-36'>
                    <p className='text-4xl font-light py-5 font-regular tracking-[0.3em]'>TRANSFORMANDO</p>
                    <p className='text-8xl py-2 text-[#64AA6D] font-medium tracking-[0.3em]'>IDEAS</p>
                    <p className='text-4xl font-light py-5 tracking-[0.3em]'>EN TECNOLOGÍA</p>
                </div>
                <div> 
                    <img src={Hero} alt="hero image" className='h-[500px] w-[580px] mt-24 ml-[160px]' /> 
                </div>
            </div>

            <div className='bg-[#F3F3F4] grid grid-cols-2 pb-20 pt-10 font-josefin '>
                <div className='w-[620px] ml-[13%]'>
                    <p className='text-2xl text-[#14110F] font-light'>Somos una empresa orgullosamente chiapaneca que busca aportar para transformar a la sociedad día con díaz</p>
                </div>
                <div className='ml-[270px] mt-5'>
                    <a href='#services' className='bg-[#64AA6D] px-12 py-5 rounded-full text-white text-xl font-semibold hover:bg-[#416b47]'>¡Conocenos!</a>
                </div>
            </div>
        </>)
}

export default HeroSection