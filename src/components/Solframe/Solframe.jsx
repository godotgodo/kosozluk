import React from 'react';
import { NavLink } from 'react-router-dom';

function Solframe({ bugun }) {
  return (
    <div className='w-80 min-h-[42.3rem] py-2 bg-darkendark maxlg:hidden text-white'>
      <ul>
        {
          bugun.map(baslik =>
            <li className='px-4 py-4 font-light text-sm ' key={baslik.baslikid}>
              <NavLink to={`baslik/${baslik.baslikid}`} className="flex justify-between items-center">
                  {baslik.baslikname}
                  <p>5</p>
              </NavLink>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Solframe