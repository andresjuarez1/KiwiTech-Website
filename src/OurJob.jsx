import React from 'react'

const OurJob = () => {
    return (
        <>
            <section id='projects' className='bg-[#F3F3F4] pt-32 font-josefin'>
                <div className=' grid grid-cols-2 pb-16'>
                    <div className='ml-[13%] mt-16'>
                        <img src="./src/assets/wicare-logo.png" alt="estrella" className='h-[110px]' />
                    </div>
                    <div className='flex flex-col items-end mr-[14%]'>
                        <p className='text-6xl mb-4'>NUESTRO TRABAJO</p>
                        <p className='text-2xl font-light mt-6 w-[100%] text-end'>WiCare “Conectando para cambiar vidas” Es una aplicación móvil para motivar a las personas a ayudar a las asociaciones a cumplir sus objetivos y poder realizar eventos para la ayuda social  </p>
                    </div>
                </div>

                <div>
                    <img src="./src/assets/app.png" alt="estrella" className='h-auto w-full px-32 py-10' />
                </div>
            </section>
        </>
    )
}

export default OurJob