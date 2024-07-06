import React from 'react'
import Hero from '../src/public/assets/hero-image.png'

const HeroSection = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] font-josefin lg:grid grid-cols-2'>
                <div className='pt-16 ml-6 lg:pt-[250px] lg:ml-[13%] lg:pb-36'>
                    <p className='font-light text-4xl lg:text-4xl lg:py-5 font-regular lg:tracking-[0.3em]'>TRANSFORMANDO</p>
                    <p className='text-[#64AA6D] font-medium text-7xl py-10 lg:text-8xl lg:py-2 lg:tracking-[0.3em]'>IDEAS</p>
                    <p className='font-light text-4xl lg:text-4xl lg:py-5 lg:tracking-[0.3em]'>EN TECNOLOGÍA</p>
                </div>
                <div className='hidden lg:block'>
                    <img src={Hero} alt="hero image" className='h-[500px] w-[580px] mt-24 ml-[160px]' /> 
                </div>
            </div>

            <div className='bg-[#F3F3F4] font-josefin flex flex-col pt-10 lg:grid lg:grid-cols-2 lg:pb-20 lg:pt-10'>
                <div className='text-center px-5 lg:w-[620px] lg:ml-[11%] lg:text-start'>
                    <p className='text-[#14110F] font-light text-lg lg:text-3xl'>Somos una empresa orgullosamente chiapaneca que busca aportar para transformar a la sociedad día con díaz</p>
                </div>  
                <div className='mt-8 ml-[35%] lg:ml-[270px]'>
                    <a href='#services' className='rounded-full text-white font-semibold text-md px-6 py-3 bg-[#64AA6D] lg:text-xl lg:px-12 lg:py-5 hover:bg-[#416b47]'>¡Conocenos!</a>
                </div>
            </div>
        </>)
}

export default HeroSection