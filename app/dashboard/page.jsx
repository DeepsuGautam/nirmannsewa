import AbtSection from '@/AdminComponents/home/AbtSection';
import TopSection from '@/AdminComponents/home/TopSection';
import Footer from '@/Components/Footer/Footer';
import { getLists } from '@/requests/GetDatas'
import React from 'react'

const page = async() => {

  const top = await getLists("home",0 , 0 ,"");
  const abt = await getLists("home/about", 0, 0 , "")
  return (
    <section className='w-full'>
        <TopSection item={top?.data}/>
        <AbtSection item={abt?.data}/>
        <Footer/>
    </section>
  )
}

export default page