import React from 'react'
import { NavLink } from 'react-router-dom'
import Entrywithtitle from './Entrywithtitle'
import MySlider from './MySlider'
import TabPanel from './TabPanel'

function Home({ gundem, tags }) {

    return (
        <div className='w-full bg-darkendark'>
            <div className='pt-4 block'>
                <TabPanel />
            </div>

            <MySlider>
                {
                    gundem.map(gundemitem =>
                        <div>
                            <div className='w-[300px] mx-auto h-[300px] flex flex-col rounded-md ' style={{ backgroundImage: `url(${gundemitem.entryimageurl})`, backgroundSize: "350px 350px", backgroundRepeat: "no-repeat" }}>
                                <ul className='flex h-min ml-1'>
                                    {
                                        gundemitem.tags.map(tag =>
                                            <li className='text-sm bg-gray-800 bg-opacity-40 text-white z-20 rounded-md mt-2 mx-1 px-2 py-1'>
                                                <NavLink to={`tags/${tag.tagid}`}>
                                                    #{tag.tagname}
                                                </NavLink>
                                            </li>
                                        )
                                    }
                                </ul>
                                <h5 className='text-xl capitalize font-bold outline-title text-white mt-auto mb-2 ml-2'>
                                    <NavLink to={`baslik/${gundemitem.baslikid}`}>
                                        {gundemitem.baslikname}
                                    </NavLink>
                                </h5>
                                <div className='w-11/12 mx-auto h-12 mb-4 flex'>
                                    <img className='rounded' src="https://w7.pngwing.com/pngs/931/256/png-transparent-bitstrips-avatar-emoji-graphy-emoticon-avatar-face-heroes-photography.png" alt="" width={"45px"} />
                                    <div className='ml-2'>
                                        <h3 className='text-lg font-bold outline-title text-white'>{gundemitem.entrysahibikullaniciname}</h3>
                                        <h4 className='text-xs outline-title text-white font-bold text-opacity-90'>{gundemitem.entrytarihi}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </MySlider>
            <div className='flex flex-col'>
                <h1 className='text-2xl pl-4 text-darklighttext'>Tags</h1>
                <ul className='flex flex-wrap mx-8'>
                    {tags.map(tag =>
                        <li className='text-xl italic mx-4 hover:underline hover:cursor-pointer font-light'>
                            <NavLink to={`tags/${tag.tagid}`} className="text-darklighttext">
                                #{tag.tagname}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <ul>
                    <Entrywithtitle/>
                    <Entrywithtitle/>
                    <Entrywithtitle/>
                    <Entrywithtitle/>
                </ul>
            </div>
        </div>
    )
}

export default Home