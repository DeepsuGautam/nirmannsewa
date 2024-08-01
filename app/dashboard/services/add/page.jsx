import Editor from '@/AdminComponents/Reusables/Editor'
import Footer from '@/Components/Footer/Footer'
import React from 'react'

const page =() => {
  return (
    <section className='w-full min-h-screen'>
        <Editor oldData={null} type={"services"} request={"post"}/>
        <Footer/>
    </section>
  )
}

export default page