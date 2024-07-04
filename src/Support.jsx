import React from 'react'

const Support = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] pt-32 pb-32 font-josefin'>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col ml-[20%] mt-[7%]'>
                        <p className='text-6xl'>¡APOYANOS!</p>
                        <p className='text-2xl font-light mt-6'>Si te gusta lo que realizamos y quieres seguir apoyando a la innovación social, ¡Invitanos un kiwi! para seguir apoyando nuestro trabajo y poder llegar a más personas</p>
                    </div>
                    <div className='ml-[30%] mt-[14%]'>
                        <button className='bg-[#64AA6D] px-20 py-6 rounded-full text-white text-xl font-semibold hover:bg-[#416b47]'>¡Donatiwi!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support