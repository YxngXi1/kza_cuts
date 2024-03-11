import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='text-left'>
        <Link href="/">
            <img src='/kza_cuts.jpeg' alt='Logo' width='120px' height='120px'/>
        </Link>
    </div>
  )
}

export default Navbar