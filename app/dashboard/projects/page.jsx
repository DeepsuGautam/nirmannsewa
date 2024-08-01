import CardHolder from '@/AdminComponents/Reusables/CardHolder'
import CoverEditor from '@/AdminComponents/Reusables/CoverEditor'
import Footer from '@/Components/Footer/Footer'
import { getLists } from '@/requests/GetDatas'
import React from 'react'

const page = async() => {
  const data = await getLists("projects", 0, 20, "all")
  console.log(data)
  return (
    <section className='w-full'>
        <CoverEditor img={"projectsCover.jpg"} title={"ALL PROJECTS"}/>
        <CardHolder initial={data?.data} type={"projects"}/>
        <Footer/>
    </section>
  )
}

export default page