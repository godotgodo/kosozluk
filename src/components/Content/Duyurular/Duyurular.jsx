import React from 'react'
import Entrynonimage from '../Entrynonimage'

function Duyurular({duyurular}) {
  console.log(duyurular)
  return (
    <div className='bg-darkendark'>
        <h1 className='text-3xl ml-12 mt-6 text-darklighttext'>Duyurular</h1>
        <ul>
          {duyurular.map(duyuru=>
            <Entrynonimage />
            )}
        </ul>
    </div>
  )
}

export default Duyurular