"use client"
import NewContent from '@/components/NewContent'
import storeContext from '@/context/storeContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const News = () => {

    const { store } = useContext(storeContext)
    return (
        <div className='bg-white rounded-md'>
            <div className='flex justify-between p-4'>
                <h2 className='text-xl font-medium'>News</h2>
                {
                    store.userInfo && store.userInfo.role !== 'admin' && <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' href='/dashboard/news/create'>Create News</Link>
                }

            </div>
            <NewContent/>
        </div>
    )
}

export default News