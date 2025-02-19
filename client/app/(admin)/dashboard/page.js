"use client";

import React, { useContext } from 'react'
import storeContext from '@/context/storeContext';

export default function page() {
  const { store } = useContext(storeContext)
    console.log(store.userInfo, 'store.userInfo');
  //  const token = localStorage.getItem('newsToken')
  //  console.log(token);
   
    
  return (
    <div>page</div>
  )
}

