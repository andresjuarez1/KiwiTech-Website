import React from 'react';
import Vision from '../src/public/assets/vision.png';
import Mision from '../src/public/assets/mision.png';

const Cards = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] pt-14 lg:pt-32 font-josefin'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4'>
                    <div className='relative mt-6 lg:mt-0 font-light'>
                        <img src={Mision} alt="software" className='h-auto md:h-[400px] w-full object-cover' />
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-4'>
                            <h2 className='text-3xl sm:text-4xl sm:mb-2 md:text-5xl lg:text-7xl lg:mb-6 lg:mt-12'>MISIÓN</h2>
                            <p className='text-center text-sm sm:text-lg md:text-xl lg:text-2xl w-[90%] md:w-[80%]'>Crear soluciones de software innovadoras y de alta calidad que mejoren la vida de las personas, utilizando la tecnología para el bien común con responsabilidad social y ética.</p>
                        </div>
                    </div>
                    <div className='relative mt-6 lg:mt-0 font-light'>
                        <img src={Vision} alt="software" className='h-auto md:h-[400px] w-full object-cover ' />
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-4'>
                            <h2 className='text-3xl sm:text-4xl sm:mb-2 md:text-5xl lg:text-7xl lg:mb-6 lg:mt-12'>VISIÓN</h2>
                            <p className='text-center text-sm sm:text-lg md:text-xl lg:text-2xl w-[90%] md:w-[80%]'>Ser líderes tecnológicos en Chiapas y un referente global en la creación de soluciones tecnológicas que impacten positivamente en la sociedad, promoviendo un futuro justo y sostenible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
