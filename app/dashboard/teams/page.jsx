import CardHolder from '@/AdminComponents/Reusables/CardHolder'
import CoverEditor from '@/AdminComponents/Reusables/CoverEditor'
import Footer from '@/Components/Footer/Footer'
import { getLists } from '@/requests/GetDatas'
import React from 'react'

const page = async() => {
  const data = await getLists("teams", 0, 20, "admin")
  return (
    <section className='w-full'>
        <CoverEditor img={"blogCoverImage.jpg"} title={"MEET OUR EXPERTS"}/>
        <CardHolder initial={data?.data} type={"teams"}/>
        <Footer/>
    </section>
  )
}

export default page