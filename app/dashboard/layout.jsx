"use server"
import AdminNav from '@/Components/AdminNav/AdminNav'
import React from 'react'

const layout = ({children}) => {
  return (
    <main className='w-full pl-[100px] lg:pl-[250px] pt-[100px]'>
        <AdminNav/>
        {children}
    </main>
  )
}

export default layout