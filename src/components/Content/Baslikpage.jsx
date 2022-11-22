import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Entry from './Entry';
import NewEntry from './NewEntry';

function Baslikpage() {
  let params = useParams();

  return (
    <div className='w-full bg-darkendark'>
      <h1 className='text-3xl ml-12 mt-6 text-darklighttext'>
        Başlık {params.baslikid}
      </h1>
      <Entry/>
      <Entry/>
      <Entry/>
      <Entry/>
      <NewEntry/>
    </div>
  )
}

export default Baslikpage