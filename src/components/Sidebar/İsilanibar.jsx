import React from 'react';
import PushPinIcon from '@mui/icons-material/PushPin';
import { NavLink } from 'react-router-dom';

function İsilanibar({ isilani }) {
  return (
    <div className='w-full bg-darklight h-64 p-2 my-4 relative shadow-md bg-opacity-40'>
      <h4 className='text-xl'>
        <NavLink to={'isilanlari'} className="text-darklighttext">İş İlanları</NavLink>
      </h4>
      <PushPinIcon className='absolute right-4 -top-[18px]' />
      <ul className='ml-4'>
        {
          isilani.map(isilani =>
            <li className='text-white font-medium my-4' key={isilani.isilanid}>
              <NavLink to={`isilanlari/${isilani.isilanid}`}>
                 >{isilani.isilaniname}
              </NavLink>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default İsilanibar