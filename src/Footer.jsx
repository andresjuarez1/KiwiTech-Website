import React from 'react'
import KiwiFooter from '../src/public/assets/kiwi-footer.png'
import TextFooter from '../src/public/assets/footerText.png'
import SocialMedia from '../src/public/assets/social-media.png'

const Footer = () => {
    return (
        <>
            <section id='contact' className='bg-[#6E6E6E] pt-5 font-josefin'>
                <div className='flex justify-center'>
                    <img src={KiwiFooter} alt="estrella" className='h-10' />
                </div>
                <div className='flex justify-center pt-6'>
                    <img src={TextFooter} alt="estrella" className='h-5' />
                </div>
                <div className='flex justify-center pt-8'>
                    <img src={SocialMedia} alt="estrella" className='h-5' />
                </div>
                <p className='text-center text-white text-lg font-extralight mt-5 pb-3'>Todos los derechos reservados</p>
            </section>
        </>
    )
}

export default Footer