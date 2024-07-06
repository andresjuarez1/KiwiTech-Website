import React from 'react';
import WicareLogo from '../src/public/assets/wicare-logo.png';
import App from '../src/public/assets/app.png';

const OurJob = () => {
    return (
        <>
            <section id='projects' className='bg-[#F3F3F4] pt-32 font-josefin'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 lg:px-32'>
                    <div className='flex items-center'>
                        <img src={WicareLogo} alt="estrella" className='h-[110px] ml-[13%] md:ml-0 md:mt-16' />
                    </div>
                    <div className='flex flex-col items-center md:items-end mt-8 md:mt-0'>
                        <p className='text-4xl mb-4 text-center md:text-6xl md:text-right'>NUESTRO TRABAJO</p>
                        <p className='text-lg font-light mt-6 text-center md:text-2xl md:text-end md:w-[full]'>WiCare “Conectando para cambiar vidas” Es una aplicación móvil para motivar a las personas a ayudar a las asociaciones a cumplir sus objetivos y poder realizar eventos para la ayuda social.</p>
                    </div>
                </div>

                <div className='px-6 mt-10 md:px-20 lg:px-32 lg:mt-20'>
                    <img src={App} alt="app images" className='w-full lg:h-auto lg:w-full lg:px-6 md:px-0 lg:py-10' />
                </div>
            </section>
        </>
    );
}

export default OurJob;
