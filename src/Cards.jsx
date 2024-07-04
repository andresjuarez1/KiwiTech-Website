import React from 'react';

const Cards = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] pt-32 font-josefin'>
                <div className='grid grid-cols-2 justify-items-center'>
                    <div className='relative'>
                        <img src="./src/assets/mision.png" alt="software" className='h-[400px] w-full object-cover' />
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-4'>
                            <h2 className='text-7xl font-light mb-6 mt-12'>MISIÓN</h2>
                            <p className='text-center text-2xl font-light w-[80%]'>"KiwiTech” es una empresa chiapaneca fundada en el año 2024 para la realización de proyectos de software.</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="./src/assets/vision.png" alt="software" className='h-[400px] w-full object-cover' />
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-4'>
                            <h2 className='text-7xl font-light mb-6 mt-12'>VISIÓN</h2>
                            <p className='text-center text-2xl font-light w-[80%]'>"KiwiTech” es una empresa chiapaneca fundada en el año 2024 para la realización de proyectos de software.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
