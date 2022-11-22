import React from 'react'
import { NavLink } from 'react-router-dom';
import data from '../../data.json';

function Entrywithtitle() {
  const entries = data.tagbasliklari;
  console.log(entries)
  return (
    <ul>
      {entries.map(entry =>
        <li className='shadow-md my-4 p-5 w-11/12 mx-auto flex relative'>
          <img src={entry.entryimage} alt="" className='w-48 h-48 rounded maxsm:w-32 maxsm:h-32' />
          <div className='flex flex-col'>
            <h3 className='text-2xl ml-4 text-darklighttext'>
              <NavLink to={`baslik/${entry.entryid}`}>
                {entry.entrybaslik}
              </NavLink>
            </h3>
            <p className='ml-8 text-darklighttext overflow-hidden maxsm:text-xs'>{entry.entry}</p>
          </div>
          <div className='mt-auto flex self-end absolute top-[10.5rem] right-6 justify-self-end'>
            <div className='ml-auto'>
              <p className='ml-2 text-darklighttext'>{entry.entrysahibikullaniciname}</p>
              <p className='ml-2 text-gray-500'>{entry.entrytarihi}</p>
            </div>
            <img className='rounded ml-1' src="https://w7.pngwing.com/pngs/931/256/png-transparent-bitstrips-avatar-emoji-graphy-emoticon-avatar-face-heroes-photography.png" alt="" width={"45px"} />
          </div>
        </li>
      )}
    </ul>
  )
}

export default Entrywithtitle