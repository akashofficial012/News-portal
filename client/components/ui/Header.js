"use client"
import React, { useContext } from 'react'
import storeContext from '../../context/storeContext'

const Header = () => {
  const {store} = useContext(storeContext)

  return (
    <div className='pl-4 shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] top-4 z-50'>
      <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-white'>
        <input type="text" placeholder='search' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />

        <div className='mr-4'>
          <div className='flex gap-x-2'>
            <div className='flex flex-col justify-center items-end'>
              <span>{store.userInfo?.name}</span>
              <span>{store.userInfo?.role}</span>
            </div>
            <img className='w-10 h-10 rounded-full' src={'/profile.png'} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header