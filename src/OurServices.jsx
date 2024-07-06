import React from 'react'
import Software from '../src/public/assets/software.png'
import Pencil from '../src/public/assets/pencil.png'
import Headset from '../src/public/assets/Headset.png'
import Star from '../src/public/assets/Star.png'


const OurServices = () => {
    return (
        <>
            <section id='services' className='bg-[#F3F3F4] font-josefin flex flex-col items-center  pt-10'>
                <div className='text-4xl w-[500px] text-center pb-10'>
                    Ofrecemos una increible solución para tus problemas
                </div>
                <div className='grid grid-cols-4 gap-40 text-center pt-5'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={Software} alt="software" className='h-10 w-10' />
                        <p className='text-2xl font-regular pt-8'>Software</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={Pencil} alt="diseño" className='h-10 w-10' />
                        <p className='text-2xl font-regular pt-8'>Diseño de interfaces </p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={Headset} alt="consultoria" className='h-10 w-10' />
                        <p className='text-2xl font-regular pt-8'>Consultorías</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={Star} alt="estrella" className='h-10 w-10' />
                        <p className='text-2xl font-regular pt-8'>Servicio premium</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default OurServices