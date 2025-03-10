"use client"
import React from 'react'
import moment from 'moment'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import Image from 'next/image'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    // Hide Navbar on Login and Dashboard pages
    if (pathname === "/login" || pathname.startsWith("/dashboard")) return null;
    return (
        <div>
            <div className='px-5 lg:px-8 flex justify-between items-center bg-[#333333] text-[#cccccc]'>
                <span className='text-[13px] font-medium'>{moment().format('LLLL')}</span>
                <div className='flex gap-x-[1px]'>
                    <a className='w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]' href=""><FaFacebookF /></a>
                    <a className='w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]' href=""><AiOutlineTwitter /></a>
                    <a className='w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]' href=""><AiFillYoutube /></a>
                </div>
            </div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/header-bg.jpg')" }}>

                <div className="px-8 py-14">
                    <div className='flex justify-center items-center flex-wrap'>
                        <div className='md:w-4/12 w-full'>
                            <div className='flex flex-col justify-center items-center md:items-start'>
                                <Image width={200} height={200} alt='logo' src={'/logo.png'} />
                                <h2 className='text-[#cccccc]'>NEWS PORTAL MERN STACK NextJs</h2>
                            </div>
                        </div>
                        <div className='md:w-8/12 w-full hidden md:block'>
                            <div className='w-full flex justify-end'>
                                <Image width={600} height={200} alt='logo' src={'/sample-add.jpg'} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <Header_Category /> */}
        </div>
    )
}

export default Navbar