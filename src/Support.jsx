import React from 'react'

const Support = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] font-josefin pt-24 sm:pt-28 pb-16 lg:pt-32 lg:pb-32'>
                <div className='lg:grid lg:grid-cols-2'>
                    <div className='flex flex-col lg:ml-[13%] lg:mt-[7%]'>
                        <p className='text-4xl text-center pb-4 md:text-5xl lg:pb-0 lg:text-start lg:text-6xl'>¡APOYANOS!</p>
                        <p className='font-light text-xl text-center mx-5 mt-4 md:text-xl lg:mx-0 lg:text-start lg:text-2xl lg:mt-6'>Si te gusta lo que realizamos y quieres seguir apoyando a la innovación social, ¡Invitanos un kiwi! para seguir apoyando nuestro trabajo y poder llegar a más personas</p>
                    </div>

                    <div className='flex justify-center'>
                        <div className=' mt-10 lg:ml-[30%] lg:mt-[14%]'>
                            <a href='https://buymeacoffee.com/wicare' className='text-white text-lg bg-[#64AA6D] px-10 py-3 font-normal rounded-full lg:px-20 lg:py-6 lg:font-semibold hover:bg-[#416b47]'>¡Donatiwi!</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support