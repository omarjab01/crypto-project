import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to="/">
        <div className='navbar flex flex-row justify-center items-center gap-4 my-8'>
            <FaCoins className='icon text-purple-600 text-3xl' />
            <h1 className='text-3xl font-bold text-purple-600'>Coinz</h1>
        </div>
    </Link>
  )
}

export default Navbar