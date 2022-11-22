import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import CampaignIcon from '@mui/icons-material/Campaign';
import { NavLink } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';

function Navbar() {
  return (
    <div className='w-full h-16 bg-darkdark bg-gradient-to-r from-darknormal to-darkendark flex justify-between'>
      {/* <div className='my-auto ml-4'>
        <span className='italic text-2xl text-gray-700'>
          <NavLink to="/">aaaaSözlük</NavLink>
        </span>
      </div>
      <div className='my-auto'>
        <input type="search" className='bg-transparent border rounded-xl p-2 flex-shrink' placeholder='search...' />
      </div>
      <div className='my-auto flex'>
        <div className='mx-2'>
          <CreateIcon className='mx-1 !text-3xl' />
          <p>Başlık</p>
        </div>
        <div className='mx-2'>
          <EditNotificationsIcon className='mx-1 !text-3xl' />
          <p>Duyuru</p>
        </div>
        <div className='mx-2'>
          <CampaignIcon className='mx-1 !text-3xl' />
          <p>İş ilanı</p>
        </div>
      </div>
      <div className='my-auto mr-4'>
        <img className='w-12 h-12 rounded-full' src="https://w7.pngwing.com/pngs/931/256/png-transparent-bitstrips-avatar-emoji-graphy-emoticon-avatar-face-heroes-photography.png" alt="" />
      </div> */}
      <ResponsiveAppBar/>
    </div>
  )
}

export default Navbar