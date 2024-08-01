import ChangeLogo from '@/AdminComponents/settings/ChangeLogo'
import ChangePassword from '@/AdminComponents/settings/ChangePassword'
import Footer from '@/Components/Footer/Footer'
import React from 'react'

const page = async() => {
  return (
    <section className='w-full min-h-[100vh-100px] pt-[50px] bg-slate-100'>
        <div className='w-full max-w-[600px] bg-white py-[25px] mb-[50px] rounded-xl shadow-lg mx-auto px-[20px] text-gray-700'>
          <ChangeLogo/>
          <br /><hr /><br />
           <ChangePassword/>
        </div>
        <Footer/>
    </section>
  )
}

export default page