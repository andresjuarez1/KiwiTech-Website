    import React from 'react'
    import KiwiFooter from '../src/public/assets/kiwi-footer.png'
    import TextFooter from '../src/public/assets/footer-text.png'
    import SocialMedia from '../src/public/assets/social-media.png'

    const Footer = () => {
        return (
            <>
                <section id='contact' className='bg-[#6E6E6E] pt-3 lg:pt-5 font-josefin'>
                    <div className='flex justify-center'>
                        <img src={KiwiFooter} alt="kiwi footer" className='h-8 lg:h-10' />
                    </div>
                    <div className='flex justify-center pt-4 lg:pt-6 mx-3 lg:mx-0'>
                        <img src={TextFooter} alt="text footer" className='lg:h-5' />
                    </div>
                    <div className='flex justify-center pt-6 lg:pt-8 mx-20 lg:mx-0'>
                        <img src={SocialMedia} alt="social media" className='h-4 lg:h-5' />
                    </div>
                    <p className='text-center text-white text-sm lg:text-lg font-extralight mt-4 lg:mt-5 pb-3'>Todos los derechos reservados</p>
                </section>
            </>
        )
    }

    export default Footer