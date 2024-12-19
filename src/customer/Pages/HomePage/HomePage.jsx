import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel.jsx'

const HomePage = () => {
    return(
        <div>
            <MainCarousel/>
            <div className='space-y-10 py-20'>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
            </div>

        </div>

    )
}

export default HomePage