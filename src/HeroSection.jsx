import React from 'react'
import Hero from '../src/public/assets/hero-image.png'

const HeroSection = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] font-josefin lg:grid grid-cols-2'>
                <div className='pt-16 ml-6 lg:pt-[250px] lg:ml-[13%] lg:pb-36'>
                    <p className='font-light text-3xl sm:text-4xl lg:text-3xl lg:py-5 lg:tracking-[0.3em] xl:text-4xl'>TRANSFORMANDO</p>
                    <p className='text-[#64AA6D] font-medium text-7xl py-10 lg:py-2 lg:tracking-[0.3em] xl:text-8xl'>IDEAS</p>
                    <p className='font-light text-3xl sm:text-4xl lg:text-3xl lg:py-5 lg:tracking-[0.3em] xl:text-4xl'>EN TECNOLOGÍA</p>
                </div>
                <div className='hidden lg:block'>
                    <img src={Hero} alt="hero image" className='lg:mt-28 lg:h-[400px] lg:w-[480px] xl:ml-[100px] xl:h-[500px] xl:w-[580px]'/>
                </div>
            </div>

            <div className='bg-[#F3F3F4] font-josefin flex flex-col pt-10 lg:grid lg:grid-cols-2 lg:pb-20 lg:pt-10'>
                <div className='text-center px-5 lg:w-[620px] lg:ml-[10%] lg:text-start xl:ml-[11%] '>
                    <p className='text-[#14110F] font-light text-lg lg:text-2xl xl:text-3xl'>Somos una empresa orgullosamente chiapaneca que busca aportar para transformar a la sociedad día con díaz</p>
                </div>
                <div className='flex justify-center '>
                    <div className='mt-8 lg:mt-6 lg:ml-[150px] xl:ml-[120px] xl:mt-10'>
                        <a href='#services' className='rounded-full text-white font-semibold text-md px-6 py-3 bg-[#64AA6D] lg:text-xl lg:px-12 lg:py-5 hover:bg-[#416b47]'>¡Conocenos!</a>
                    </div>
                </div>
            </div>
        </>)
}

export default HeroSection