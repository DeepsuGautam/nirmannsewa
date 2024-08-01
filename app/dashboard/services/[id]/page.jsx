import Editor from '@/AdminComponents/Reusables/Editor'
import Footer from '@/Components/Footer/Footer'
import { getSoloData } from '@/requests/GetDatas'
import React from 'react'

const page = async({params}) => {

  const data = await getSoloData("services", params?.id);
  return (
    <section className='w-full min-h-screen'>
        <Editor oldData={data?.data} type={"services"} request={"put"}/>
        <Footer/>
    </section>
  )
}

export default page