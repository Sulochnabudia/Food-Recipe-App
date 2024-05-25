import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { Link, useParams } from 'react-router-dom'

const SearchElement = () => {

    // console.log(useParams())

    const { searchTerm } = useParams();

    const [data, setData] = useState([])


    //fetch data through mealDB api
    useEffect(() => {

        const fetchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`) //using js in ``
            const data = await api.json();

            // console.log(data.meals);
            setData(data.meals)
            // console.log(data)
        }

        fetchData();
    }, [searchTerm]) //searchTerm update when we click

    return (

        < >
            <Navbar />

            <div style={{
                // width: '90px',
                margin: 'auto',
                marginTop: '2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(4 ,1fr)', //fr frengment
                gridGap: '1rem',
            }}>
                {
                    data.map((d) => {
                        // if (searchTerm !== null) {
                        //     // Use the map method
                        // } else {
                        //     console.error('Variable is null');
                        // }
                        return (
                            <Link to={`/${d.idMeal}`} key={d.idMeal} className='link'>
                                <div style={{ textAlign: 'center' }}>
                                    <div className='img'>
                                        <img src={d.strMealThumb} alt="" style={{ width: '13rem' }} />
                                    </div>
                                    <h3>{d.strMeal}</h3>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

            <TrendingSlider />
        </ >
    )
}

export default SearchElement