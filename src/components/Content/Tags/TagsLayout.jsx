import React from 'react';
import { Outlet } from 'react-router-dom';

function TagsLayout() {
  return (
    <div className='w-full h-full min-h-screen bg-darkendark'>
        <Outlet/>
    </div>
  )
}

export default TagsLayout