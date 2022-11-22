import React from 'react';
import PushPinIcon from '@mui/icons-material/PushPin';
import { NavLink } from 'react-router-dom';

function Duyurubar({ duyurular }) {
  return (
    <div className='w-full bg-darklight rounded h-64 p-2 my-8 relative shadow-md bg-opacity-40'>
      <h4 className='text-xl'>
        <NavLink to="duyurular" className="text-darklighttext">Duyurular</NavLink>
      </h4>
      <PushPinIcon className='absolute right-4 -top-[18px]' />
      <ul className='ml-4'>
        {
          duyurular.map(duyuru =>
            <li className='text-white text-lg font-medium my-4' key={duyuru.duyuruid}>
              <NavLink to={`duyurular/${duyuru.duyuruid}`}>
                !{duyuru.duyuruname}
              </NavLink>

            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Duyurubar