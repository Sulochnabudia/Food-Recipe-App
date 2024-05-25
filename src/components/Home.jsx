import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TrendingSlider from './TrendingSlider'


const Home = () => {
    return (
        < >
            <div className='main'>
                <Navbar />
            </div>
            <PopularSlider />
            <TrendingSlider />
        </ >
    )
}

export default Home