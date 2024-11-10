import Header from '@/components/header'
import Skill from "@/components/skill"
import Footer from '@/components/footer'
import Image from "next/image"
import React from 'react'

function page() {
  return (
    <>
        <Header />
        <section className="w-full h-[593px] mt-36 md:mt-0">
        <div className="w-full md:w-[1245px] h-[495px] flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 p-0 md:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-primary font-semibold">Skills That Drive Success</h2>
            <p className="text-base sm:text-lg md:text-[18px] pt-4 sm:pt-6">This keeps it short and impactful, aligning 
            well with the tagline! Let me know if you’d like any adjustments.</p>
            <button className="bg-alert w-[90px] h-[42] p-2 mt-8 text-white border border-red">Hire Me</button>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={"/images/skill-port.jpg"}
            alt=""
            width={590}
            height={495}
            className="w-[600px] h-[400px] md:w-[490px] md:h-[495px] ml-0 md:ml-[70px]"
          />
        </div>
        </div>
      </section><Skill />
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
