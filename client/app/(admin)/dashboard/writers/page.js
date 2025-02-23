'use client'

import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import { FaEye } from 'react-icons/fa'
import storeContext from '@/context/storeContext'
import { base_url } from '@/config/config'

const Writers = () => {
  const { store } = useContext(storeContext)
  const [writers, setWriters] = useState([])

  const getWriters = async () => {
    try {
      const res = await fetch(`${base_url}/api/news/get-writers`, {
        headers: {
          Authorization: `${store.token}`
        },
        cache: 'no-store' 
      })
      const data = await res.json()
      setWriters(data.writers)
    } catch (error) {
      console.error('Error fetching writers:', error)
    }
  }

  useEffect(() => {
    getWriters()
  }, [])

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Writers</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' href='/dashboard/writer/add'>
          Add Writer
        </Link>
      </div>
      <div className='relative overflow-x-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>No</th>
              <th className='px-7 py-3'>Name</th>
              <th className='px-7 py-3'>Category</th>
              <th className='px-7 py-3'>Role</th>
              <th className='px-7 py-3'>Image</th>
              <th className='px-7 py-3'>Email</th>
              <th className='px-7 py-3'>Active</th>
            </tr>
          </thead>
          <tbody>
  {writers?.length > 0 ? (
    writers.map((r, i) => (
      <tr key={r._id} className='bg-white border-b'>
        <td className='px-6 py-4'>{i + 1}</td>
        <td className='px-6 py-4'>{r.name}</td>
        <td className='px-6 py-4'>{r.category}</td>
        <td className='px-6 py-4'>{r.role}</td>
        <td className='px-6 py-4'>
          <img className='w-[40px] h-[40px]' src={r.imageUrl} alt={r.name} />
        </td>
        <td className='px-6 py-4'>{r.email}</td>
        <td className='px-6 py-4'>
          <div className='flex justify-start items-center gap-x-4 text-white'>
            <Link href={`/dashboard/writer/${r._id}`} className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'>
              <FaEye />
            </Link>
          </div>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td className="px-6 py-4 text-center" colSpan="7">No writers found.</td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  )
}

export default Writers