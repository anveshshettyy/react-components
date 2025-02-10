import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    
  return (
    <div>
      <div className='h-[15vh] w-full bg-green-800 flex justify-between items-center p-10 ' >
        <div>
            <h1 className='text-[3.5vh] font-bold'>Anvesh Shetty</h1>
        </div>

        <div className='flex gap-5'>
        <Link to='/about'  >About</Link>
        <Link to='/contact'  >Contact</Link>
        <Link to='/products'  >Products</Link>
        </div>
        

      </div>
    </div>
  )
}

export default Header
