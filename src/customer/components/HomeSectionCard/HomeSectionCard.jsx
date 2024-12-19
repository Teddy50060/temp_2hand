import React from 'react'

const HomeSectionCard = ()=> {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hiddent w-[15 rem] mx-3 border border-black'>
            <div className='h-[5rem] w-[3rem]'>
                <img className='object-cover object-top w-full h-full' src="/./images/1.png" alt="" />

            </div>
            <div className='p-4'>
                <h3>
                    random shirt
                </h3>
                <p>
                    Solid Pure white
                </p>
            </div>
        </div>
    )
}

export default HomeSectionCard