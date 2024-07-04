import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] font-josefin grid grid-cols-2 pt-32'>
                <div className='flex flex-col ml-[10%] mt-[7%]'>
                    <p className='text-6xl'>¿QUIENES SOMOS?</p>
                    <p className='text-2xl font-light mt-6 w-[70%]'>“KiwiTech” es una empresa chiapaneca fundada en el año 2024 para la realización de proyectos de software </p>
                </div>
                <div className='ml-[25%]'>
                    <img src="./src/assets/who.png" alt="estrella" className='h-[300px]' />
                </div>
            </div>
        </>
    )
}

export default AboutUs