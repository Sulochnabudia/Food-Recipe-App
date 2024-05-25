import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const Navigate = useNavigate()
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {      //for search input
        e.preventDefault();
        Navigate(`/search/${input}`)
    }


    return (
        < >
            <div className='nav'>
                <div className='left'>
                    <Link to="/" className='link'>
                        <h2>Food Recipe App</h2>
                    </Link>
                </div>

                {/* for search input   */}
                <div className="search">
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={(e) => setInput(e.target.value)} />
                    </form>
                </div>

                <div className="right">
                    <Link to={`/category/indian`} className='link' >
                        <div>Indian</div>
                    </Link>

                    <Link to={`/category/american`} className='link'>
                        <div>American</div>
                    </Link>

                    <Link to={`/category/spanish`} className='link'>
                        <div>Spanish</div>
                    </Link>

                    <Link to={`/category/chinese`} className='link'>
                        <div>Chinese</div>
                    </Link>

                    <Link to={`/category/italian`} className='link'>
                        <div>Italian</div>
                    </Link>

                </div>
            </div>
        </ >
    )
}

export default Navbar