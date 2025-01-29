import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[calc(100vw-220px)] fixed top-0 right-0 bg-blue-400 '>
        <nav className='p-4 flex w-full justify-between'>
            <h1 className='text-white'>Navbar</h1>
            <div className='flex items-center gap-1'>
                <p className='text-white'>Profile</p>
                <p className='text-white'>Username</p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
