import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const TrendingSlider = () => {

    const [data, setData] = useState([])


    //fetch data through mealDB api
    useEffect(() => {

        const fetchData = async () => {
            const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
            const data = await api.json();

            // console.log(data.meals);
            setData(data.meals)
        }

        fetchData();
    }, [])

    //Auto Play React slick silder
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };

    return (
        <>
            {/* Auto Play React slick silder */}
            <div style={{
                height: "26vh",
                width: '99%',
                margin: "auto",
                // overflow: "hidden"
                // backgroundColor: 'yellow'
            }}>


                <Slider {...settings}
                    style={{
                        margin: '2.2rem'
                    }} >

                    {data.map((d) => {
                        return (
                            //idMeal data send to another page ->recipeId using dynmic routing
                            <Link to={`/${d.idMeal}`} key={d.idMeal}>
                                <div className='slider2'>
                                    <img src={d.strMealThumb} alt="" style={{ width: '10rem', height: "7rem" }} />
                                </div>
                            </Link>
                        )
                    })}
                </Slider>
            </div>

        </>
    )
}

export default TrendingSlider