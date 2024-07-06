import React from 'react'
import Who from '../src/public/assets/who.png'


const AboutUs = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] font-josefin pt-20 lg:grid lg:grid-cols-2 lg:pt-32'>
                <div className='flex flex-col px-7 lg:ml-[10%] lg:mt-[7%]'>
                    <p className='text-4xl lg:text-6xl'>¿QUIENES SOMOS?</p>
                    <p className='font-light mt-3 lg:text-3xl lg:mt-6 lg:w-[90%]'>“KiwiTech” es una empresa chiapaneca fundada en el año 2024 para la realización de proyectos de software </p>
                </div>
                <div className='mt-10 px-7 lg:mt-0 lg:px-0 lg:ml-[35%]'>
                    <img src={Who} alt="estrella" className='h-[270px] lg:h-[300px]' />
                </div>
            </div>
        </>
    )
}

export default AboutUs