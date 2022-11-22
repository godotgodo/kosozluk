import React from 'react'
import Home from './Home'

function Content({gundem,tags,popentries}) {
  return (
    <div className='w-full bg-slate-300'>
        <Home tags={tags} popentries={popentries} gundem={gundem}/>
    </div>
  )
}

export default Content