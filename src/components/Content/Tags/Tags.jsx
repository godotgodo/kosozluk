import React from 'react'
import { Outlet } from 'react-router-dom'


function Tags() {
  return (
    <div className='w-full text-9xl'>
      <h1 className="text-9xl text-darklighttext">Tags</h1>
      <Outlet/>
    </div>
  )
}

export default Tags