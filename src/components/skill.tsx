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
      {/* <section className="w-full md:w-[1280px] h-auto md:h-[495px] mt-20 md:mt-0 mb-40 md:mb-0">
            <h1 className="text-[32px] font-semibold text-center text-alert">Skills</h1>

        <div className="w-full h-[414px] flex justify-center flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="mt-36 w-full h-auto md:w-[518px] md:h-[177.16px]  flex md:flex-col sm:flex-row md:justify-center items-center flex-col text-center md:ml-0">
              <p className="text-[#818080] text-center md:mt-0">I have a vast experience in the following web technologies:</p>

              <div className="h-[111.16px] w-full md:w-[518px]  flex justify-center items-center">
                <Image src={"/images/skill.png"} alt='HTML 5' width={75} height={102} className='p-3'/>
                <Image src={"/images/css3.png"} alt='CSS 3' width={75} height={102} className='p-3'/>
                <Image src={"/images/js.png"} alt='JS' width={75} height={102}/>
                <Image src={"/images/bootstrap.png"} alt='Bootstrap' width={75} height={102}/>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
          <Image src={"/images/skills.png"} alt='' width={411} height={414} className='md:ml-40 mt-10'/>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default skill
