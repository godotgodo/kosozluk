import React from 'react'
import { useParams } from 'react-router-dom'
import Entrywithtitle from '.././Entrywithtitle';

function Tag() {
  let params=useParams();
  console.log(params)
  return (
    <div className='w-full'>
      <h1 className='text-4xl ml-12 mt-8 text-darklighttext'>Tag {params.tagid}</h1>
      <Entrywithtitle/>
      <Entrywithtitle/>
    </div>
    
  )
}

export default Tag