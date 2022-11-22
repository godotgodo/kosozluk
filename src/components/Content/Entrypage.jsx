import React from 'react'
import { useParams } from 'react-router-dom'
import Entry from './Entry';

function Entrypage() {
    let params=useParams();
  return (
    <div className='w-full'>
      
      Entry {params.entryid}
      <Entry/>
    </div>
  )
}

export default Entrypage