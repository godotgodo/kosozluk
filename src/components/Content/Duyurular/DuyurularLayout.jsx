import React from 'react'
import { Outlet } from 'react-router-dom'

function DuyurularLayout() {
  return (
    <div className='w-full h-full min-h-screen bg-darkendark'>
        <Outlet/>
    </div>
  )
}

export default DuyurularLayout