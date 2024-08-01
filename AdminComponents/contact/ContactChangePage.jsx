"use client";
import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactEdit from "./ContactEdit";

const ContactChangePage = ({data}) => {
  const [isContactList, setIsContactList] = useState(true);
  const handleSelection = (e) => {
    setIsContactList(e?.target?.value ==='true');
  };
  
  console.log(isContactList)

  return (
    <section className="w-full py-[20px]">
      <select 
      value={isContactList}
        className="w-fit px-[30px] py-[10px] text-[18px] m-[20px] focus:outline-none"
        onChange={handleSelection}
      >
        <option value={true}>See Contacts</option>
        <option value={false}>Edit Contact Details</option>
      </select>
      <br />
      <br />
      {
        isContactList?<ContactList/>:<ContactEdit data={data}/>
      }
    </section>
  );
};

export default ContactChangePage;
