import React from 'react'
import Image from "next/image"
function skill() {
  return (
    <>
    <div className='w-full mt-80 md:mt-0 mb-20'>
        <h1 className="text-6xl text-center text-alert font-semibold">Skill</h1>
      <div className="w-full flex justify-center flex-col md:flex-row items-center">
        <div className="w-full mt-12 md:mt-0 mb-8 md:mb-0 md:w-1/2 flex flex-col">
          <p className="text-center">I have a vast experience in the following web technologies:</p>
          <div className="flex justify-around items-center w-full">
          <Image src={"/images/skill.png"} alt='HTML 5' width={75} height={102} className='p-3'/>
          <Image src={"/images/css3.png"} alt='CSS 3' width={75} height={102} className='p-3'/>
          <Image src={"/images/js.png"} alt='JS' width={75} height={102}/>
          <Image src={"/images/bootstrap.png"} alt='Bootstrap' width={75} height={102}/>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image src={"/images/skills.png"} alt='' width={411} height={414} className='md:ml-40 mt-10'/>
          </div>
      </div>
    </div>
    </>
  )
}

export default skill
