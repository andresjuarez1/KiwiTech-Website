import React from 'react'

const Footer = () => {
    return (
        <>
            <section id='contact' className='bg-[#6E6E6E] pt-5 font-josefin'>
                <div className='flex justify-center'>
                    <img src="./src/assets/kiwi-footer.png" alt="estrella" className='' />
                </div>
                <div className='flex justify-center pt-6'>
                    <img src="./src/assets/footerText.png" alt="estrella" className='h-5' />
                </div>
                <div className='flex justify-center pt-8'>
                    <img src="./src/assets/social-media.png" alt="estrella" className='h-5' />
                </div>
                <p className='text-center text-white text-lg font-extralight mt-5 pb-3'>Todos los derechos reservados</p>
            </section>
        </>
    )
}

export default Footer