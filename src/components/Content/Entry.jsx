import React from 'react'
import { useState } from 'react';

function Entry() {
    const [openAll, setOpenAll] = useState(false);

    return (
        <div className='w-full'>
            <li className='shadow-md my-4 p-5 w-11/12 mx-auto  flex relative'>
                <div >
                    <img className='w-64 h-64 maxsm:w-32 maxsm:h-32 float-left mr-4' src="https://images.mubicdn.net/images/cast_member/1039/cache-4-1337461025/image-w856.jpg?size=800x" alt="" />
                    <p className={`text-darklighttext ml-8 ${openAll ? ' ' : 'max-h-64 overflow-hidden'}`} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <button className='w-full mt-2' onClick={() => (setOpenAll(!openAll))}>{openAll ? "yetti gari" : "devamını okuyayım..."}</button>
                </div>
                <div className='mt-auto flex self-end absolute -bottom-6 right-6 justify-self-end'>
                    <div className='ml-auto'>
                        <p className='ml-2 text-darklighttext'>yılmaz sözdinlemez</p>
                        <p className='ml-2 text-gray-500'>18.11.2022</p>
                    </div>
                    <img className='rounded ml-1' src="https://w7.pngwing.com/pngs/931/256/png-transparent-bitstrips-avatar-emoji-graphy-emoticon-avatar-face-heroes-photography.png" alt="" width={"45px"} />
                </div>
            </li>
        </div>
    )
}

export default Entry