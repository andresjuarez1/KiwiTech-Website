import React from 'react'

const Cards = () => {
    return (
        <>
            <div className='bg-[#F3F3F4] pt-32'>
                <div className='grid grid-cols-2 justify-items-center'>
                    <div>
                        <img src="./src/assets/mision.png" alt="software" className='h-[400px]'/>
                    </div>
                    <div>
                        <img src="./src/assets/vision.png" alt="software" className='h-[400px]'/> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards