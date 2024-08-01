import ContactChangePage from '@/AdminComponents/contact/ContactChangePage'
import CoverEditor from '@/AdminComponents/Reusables/CoverEditor'
import { getLists } from '@/requests/GetDatas';
import React from 'react'

const page = async() => {
  const res = await getLists("contact", 0, 0);
  const data = await res?.data;
  return (
   <section className='w-full min-h-screen'>
    <CoverEditor img={"contactCover.jpg"} title="CONTACT US"/>
    <ContactChangePage data={data}/>
   </section>
  )
}

export default page