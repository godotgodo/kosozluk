import React from 'react'
import { useParams } from 'react-router-dom'
import Entrynonimage from '../Entrynonimage';


function Duyuru() {
  let params = useParams();

  return (
    <div className='w-full'>
      <Entrynonimage  />
    </div>
  )
}

export default Duyuru