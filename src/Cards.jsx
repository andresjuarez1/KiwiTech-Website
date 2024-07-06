import React from 'react';
import Vision from '../src/public/assets/vision.png';
import Mision from '../src/public/assets/mision.png';

const Cards = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] pt-24 lg:pt-32 font-josefin'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4'>
                    <div className='relative'>
                        <img src={Mision} alt="software" className='h-auto md:h-[400px] w-full object-cover' />
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-4'>
                            <h2 className='text-4xl md:text-7xl font-light mb-6 mt-12'>MISIÓN</h2>
                            <p className='text-center text-lg md:text-2xl font-light w-[90%] md:w-[80%]'>"KiwiTech” es una empresa chiapaneca fundada en el año 2024 para la realización de proyectos de software.</p>
                        </div>
                    </div>
                    <div className='relative mt-6 lg:mt-0'>
                        <img src={Vision} alt="software" className='h-auto md:h-[400px] w-full object-cover' />
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-4'>
                            <h2 className='text-4xl md:text-7xl font-light mb-6 mt-12'>VISIÓN</h2>
                            <p className='text-center text-lg md:text-2xl font-light w-[90%] md:w-[80%]'>"KiwiTech” es una empresa chiapaneca fundada en el año 2024 para la realización de proyectos de software.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
