import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] grid grid-cols-2 font-josefin'>
                <div className='pt-[250px] pl-20 pb-36'>
                    <p className='text-4xl font-light py-5 font-regular tracking-[0.3em]'>TRANSFORMANDO</p>
                    <p className='text-8xl py-2 text-[#64AA6D] font-medium tracking-[0.3em]'>IDEAS</p>
                    <p className='text-4xl font-light py-5 tracking-[0.3em]'>EN TECNOLOGÍA</p>
                </div>
                <div>
                    <img src="../src/assets/hero-image.png" alt="hero image" className='h-[480px] w-[550px] mt-24 ml-20' />
                </div>
            </div>
            <div className='bg-[#F3F3F4] grid grid-cols-2 pb-20 pt-10 font-josefin '>
                <div className='w-[620px]'>
                    <p className='text-2xl text-[#14110F] pl-20 font-light'>Somos una empresa orgullosamente chiapaneca que busca aportar para transformar a la sociedad día con díaz</p>
                </div>
                <div className=''>
                    <button className='ml-[400px] bg-[#64AA6D] px-12 py-4 rounded-full text-white text-xl font-semibold hover:bg-[#416b47]'>¡Conocenos!</button>
                </div>
            </div>
        </>)
}

export default HeroSection