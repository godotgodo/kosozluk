import React from 'react'
import Entrynonimage from '../Entrynonimage'

function İsilanlari({isilanlari}) {
  console.log(isilanlari)
  return (
    <div>
        <h1 className='text-3xl ml-12 mt-6 text-darklighttext'>İş İlanları</h1>
        <ul>
          {isilanlari.map(isilani=>
            <Entrynonimage  />
            )}
        </ul>
    </div>
  )
}

export default İsilanlari