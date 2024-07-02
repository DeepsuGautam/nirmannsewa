import AdminNav from '@/Components/AdminNav/AdminNav'
import React from 'react'

const layout = ({children}) => {
  return (
    <main className='w-full min-h-full pt-[100px]'>
        <AdminNav/>
        {children}
    </main>
  )
}

export default layout
