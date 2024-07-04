import React from 'react'

const OurServices = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] font-josefin flex flex-col items-center  pt-10'>
                <div className='text-4xl w-[500px] text-center pb-10'>
                    Ofrecemos una increible solución para tus problemas
                </div>
                <div className='grid grid-cols-4 gap-40 text-center pt-5'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="./src/assets/software.png" alt="software" className='h-16 w-16' />
                        <p className='text-2xl font-regular pt-8'>Software</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="./src/assets/pencil.png" alt="diseño" className='h-16 w-16' />
                        <p className='text-2xl font-regular pt-8'>Diseño de interfaces </p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="./src/assets/Headset.png" alt="consultoria" className='h-16 w-16' />
                        <p className='text-2xl font-regular pt-8'>Consultorías</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src="./src/assets/Star.png" alt="estrella" className='h-16 w-16' />
                        <p className='text-2xl font-regular pt-8'>Servicio premium</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OurServices