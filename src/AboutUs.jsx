import React from 'react'
import Who from '../src/public/assets/who.png'


const AboutUs = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] font-josefin pt-20 lg:grid lg:grid-cols-2 lg:pt-32'>
                <div className='flex flex-col px-7 lg:ml-[10%] lg:mt-[7%]'>
                    <p className='text-4xl lg:text-5xl xl:text-6xl'>¿QUIENES SOMOS?</p>
                    <p className='font-light mt-3 sm:text-lg md:text-xl lg:text-2xl lg:mt-6 lg:w-[90%] xl:text-3xl'>“KiwiTech” es una empresa chiapaneca fundada en el año 2024 para la realización de proyectos de software </p>
                </div>
                <div className='flex justify-center mt-5 lg:mt-14 xl:mt-0 lg:px-0 xl:ml-[35%]'>
                    <img src={Who} alt="estrella" className='h-[250px] sm:h-[270px] md:h-[300px] lg:h-[280px] xl:h-[300px]' />
                </div>
            </div>
        </>
    )
}

export default AboutUs