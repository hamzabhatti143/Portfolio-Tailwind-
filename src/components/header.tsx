import React from 'react'
import Image from "next/image"
import Link from "next/link"
function Header() {
  return (
    <>
      <nav className="h-[83px] w-full flex">
        <div className="w-[70%]">
           <Image src={"/images/logo.png"} alt='' width={90} height={35} className="p-5 ml-4 "/>
        </div>
        <div className="w-full md:w-[350px] h-[26px] p-8 md:p-6 mt-0 md:mt-2 flex flex-col md:flex-row justify-around items-center ">
            <Link href="/skill">Skills</Link>
            <Link href="">Projects</Link>
            <Link href="">Contact me</Link>
        </div>
      </nav>
    </>
  )
}

export default Header
