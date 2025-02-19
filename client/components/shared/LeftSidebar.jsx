'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useContext } from 'react';
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { BiNews } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import storeContext from '@/context/storeContext';

const SidebarItem = ({ href, icon: Icon, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`px-3 py-2 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 ${isActive ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'}`}>  
            <span className='text-xl'><Icon /></span>
            <span>{label}</span>
        </Link>
    );
};

const LeftSidebar = () => {
    const router = useRouter();
    const { store, dispatch } = useContext(storeContext);

    const logout = () => {
        localStorage.removeItem('mewsToken');
        dispatch({ type: 'logout', payload: '' });
        router.push('/login');
    };

    return (
        <div className='w-[250px] bg-white'>
            <div className='h-[70px] flex justify-center items-center'>
                <Link href='/'>
                    <img className='w-[190px] h-[35px]' src='https://news-portal-mern.onrender.com/assets/logo-00ebaab6.png' alt='Logo' />
                </Link>
            </div>
            <ul className='px-3 flex flex-col gap-y-1 font-medium'>
                {store.userInfo?.role === 'admin' ? (
                    <>
                        <SidebarItem href='/dashboard' icon={AiFillDashboard} label='Dashboard' />
                        <SidebarItem href='/dashboard/add-write' icon={AiOutlinePlus} label='Add Writer' />
                        <SidebarItem href='/dashboard/writers' icon={FiUsers} label='Writers' />
                    </>
                ) : (
                    <>
                        <SidebarItem href='/dashboard' icon={AiFillDashboard} label='Dashboard' />
                        <SidebarItem href='/dashboard/add-news' icon={FaPlus} label='Add News' />
                    </>
                )}
                <SidebarItem href='/dashboard/news' icon={BiNews} label='News' />
                <SidebarItem href='/dashboard/profile' icon={ImProfile} label='Profile' />
                <li>
                    <div onClick={logout} className='px-3 py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white cursor-pointer'>
                        <span className='text-xl'><IoLogOutOutline /></span>
                        <span>Logout</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default LeftSidebar;
