import CardHolder from '@/AdminComponents/Reusables/CardHolder'
import CoverEditor from '@/AdminComponents/Reusables/CoverEditor'
import Footer from '@/Components/Footer/Footer'
import { getLists } from '@/requests/GetDatas'
import React from 'react'

const page = async() => {
  const data = await getLists("services", 0, 20, "all")
  console.log(data)
  return (
    <section className='w-full'>
        <CoverEditor img={"servCover.jpg"} title={"SERVICES WE OFFER"}/>
        <CardHolder initial={data?.data} type={"services"}/>
        <Footer/>
    </section>
  )
}

export default page