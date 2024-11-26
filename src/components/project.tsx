import React from 'react'
import Image from "next/image"
import Link from "next/link"
function project() {
  return (
    <>
    
      <section className="w-full bg-primary h-auto md:h-[591px]">
        <div className="text-white flex flex-col justtify-center items-center pt-6">
          <h1 className="text-2xl md:text-4xl">Projects</h1>
          <p className="text-xl md:text-2xl">A select number of projects</p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-center">

        <div className="w-full   p-4 md:p-8">
          <Image src={"/images/port-1.png"} alt='Portfolio-1' width={381} height={276} className='p-3 mx-auto'/>
            <p className="text-center p-4 text-white">Made a social media manager template using HTML 5, CSS and JS.</p>
            <Link href="" className="flex justify-center items-center">
            <button className="text-white border-2 border-slate-900 p-2 w-24">Hire Me</button>
            </Link>
        </div>

        <div className="w-full  p-4 md:p-8">
          <Image src={"/images/port-2.png"} alt='Portfolio-2' width={381} height={276} className='p-3 mx-auto'/>
            <p className="text-center p-4 text-white ">Made a social media manager template using HTML 5, CSS and JS.</p>
            <Link href="" className="flex justify-center items-center">
            <button className="text-white border-2 border-slate-900 p-2 w-24">Hire Me</button>
            </Link>
        </div>

        <div className="w-full p-4 md:p-8">
          <Image  src={"/images/port-3.png"} alt='Portfolio-3' width={381} height={276} className="p-3 mx-auto"/>
            <p className="text-center p-4 text-white mt-[20px]">Made an I.P address tracking website.</p>
            <Link href="" className="flex justify-center items-center">
            <button className="text-white border-2 border-slate-900 p-2 w-24">Hire Me</button>
            </Link>
        </div>

        </div>
      </section>
    </>
  )
}

export default project
