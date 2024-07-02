import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import components
const TopComp = dynamic(() => import('@/Components/Landing/TopComp'));
const AbtComp = dynamic(() => import('@/Components/Landing/AbtComp'));
const ServComp = dynamic(() => import('@/Components/Landing/ServComp'));
const NewsComp = dynamic(() => import('@/Components/Landing/NewsComp'));
const BlogHolder = dynamic(() => import('@/Components/Landing/BlogHolder'));
const Footer = dynamic(() => import('@/Components/Footer/Footer'));

const Page = () => {
  return (
    <main className="pageParent">
      <TopComp/>
      <AbtComp/>
      <ServComp/>
      <NewsComp/>
      <BlogHolder/>
      <Footer/>
    </main>
  );
};

export default Page;
