import React from 'react'
import Image from "next/image";

import Header from "@/components/header";
import Footer from "@/components/footer";
function page() {
  return (
    <>
          <Header />

          <section className="w-full h-auto md:h-[495px] mb-48 sm:p-4">
            <h1 className="text-4xl font-semibold text-center text-alert mt-20">Contact me</h1>

        <div className="w-full md:w-[1235px] sm-w-1/2 h-[414px] flex flex-col sm:flex-row mt-24">
          <div className="w-full md:w-[50%] sm:w-[30%] sm:pl-[60px] mb-10">
          <Image src={"/images/contact.png"} alt='' width={350} height={312} className="sm-w-full"/>
          </div>

          <div className="w-full md:w-[50%] sm:w-[30%]  sm:pl-[60px]">
          <input type='text' placeholder='Enter email address' className='p-2 border-2 border-grey-500 w-full md:w-[513px] sm:w-full'/>
          <textarea placeholder='Enter Your Message' className='p-2 border-2 border-grey-500 w-full md:w-[513px] sm:w-full h-[158px] mt-6'/>
          <div className='mx-auto md:ml-36 sm:ml-auto sm-mb-28 mt-6 mb-10 flex justify-center items-center w-[213.47px] h-[50px] border-2 bg-primary'>
            <button className='w-full md:w-[213px] h-[50px] text-white'>Send Message</button>
            <Image src={"/images/paper plane 1.png"} alt='' width={21} height={24}/>
          </div>
          </div>
        </div>
      </section> 
          <Footer />


    </>
  )
}

export default page
