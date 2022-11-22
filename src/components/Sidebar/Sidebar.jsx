import React from 'react'
import Duyurubar from './Duyurubar';
import İsilanibar from './İsilanibar';

function Sidebar({duyurular,isilani}) {
  return (
    <div className='w-1/6 bg-darkendark maxlg:hidden'>
      <Duyurubar duyurular={duyurular}/>
      <İsilanibar isilani={isilani}/>
    </div>
  )
}

export default Sidebar