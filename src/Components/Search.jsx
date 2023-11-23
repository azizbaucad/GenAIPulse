import React from 'react'
import banner from './../assets/Images/banner.jpg'
import { SiMusicbrainz } from "react-icons/si";
import { IoSearchOutline } from 'react-icons/io5';

function Search() {
  return (
    <div className='flex justify-center mt-8 flex-col px-[70] md:px-[150px]'>
        <img src={banner} className='rounded-2xl'/>
        <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
            <IoSearchOutline className='mr-1 mt-1'/>
            <input type='text' placeholder='Search' className='w-[100%] outline-none'/>
            <SiMusicbrainz />


        </div>
    </div>
  )
}

export default Search