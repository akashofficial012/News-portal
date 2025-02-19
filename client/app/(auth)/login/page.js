'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import { base_url } from '@/config/config'
import storeContext from '@/context/storeContext'

const Login = () => {
  const router = useRouter()
  const { dispatch } = useContext(storeContext)
  const [loader, setLoader] = useState(false)

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const submit = async (e) => {
    e.preventDefault()
    try {
      setLoader(true)
      const { data } = await axios.post(`${base_url}/api/login`, state)
      
      localStorage.setItem('newsToken', data.token)
      toast.success(data.message)

      dispatch({
        type: 'login_success',
        payload: { token: data.token }
      })

      router.push('/dashboard') 
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Login failed')
    } finally {
      setLoader(false)
    }
  }

  return (
    <div className="min-w-screen min-h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[340px] text-slate-600 shadow-md">
        <div className="bg-white h-full px-7 py-8 rounded-md">
          <div className="w-full justify-center items-center flex">
            <img 
              src="https://news-portal-mern.onrender.com/assets/logo-00ebaab6.png" 
              alt="logo" 
              width={200} 
              height={50} 
            />
          </div>
          <form onSubmit={submit} className="mt-8">
            <div className="flex flex-col gap-y-2">
              <label className="text-md font-medium text-gray-600" htmlFor="email">Email</label>
              <input 
                value={state.email} 
                required 
                onChange={inputHandle} 
                type="email" 
                placeholder="Email" 
                name="email" 
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10" 
                id="email" 
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
              <label className="text-md font-medium text-gray-600" htmlFor="password">Password</label>
              <input 
                onChange={inputHandle} 
                required 
                value={state.password} 
                type="password" 
                placeholder="Password" 
                name="password" 
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10" 
                id="password" 
              />
            </div>
            <div className="mt-4">
              <button 
                disabled={loader} 
                className="px-3 py-[6px] w-full bg-purple-500 rounded-sm text-white hover:bg-purple-600 disabled:opacity-50"
              >
                {loader ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
