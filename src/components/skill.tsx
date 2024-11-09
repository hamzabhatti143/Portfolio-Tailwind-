import React from 'react'
import Image from "next/image"
function skill() {
  return (
    <>
      <section className="w-full md:w-[1280px] h-auto md:h-[495px] mt-20 md:mt-0 mb-40 md:mb-0">
            <h1 className="text-[32px] font-semibold text-center text-alert">Skills</h1>

        <div className="w-full md:w-[1235px] h-[414px] flex flex-col md:flex-row">
          <div className="w-[50%]">
            <div className="mt-36 w-full h-auto md:w-[518px] md:h-[177.16px]  flex md:flex-col sm:flex-row md:justify-center items-center flex-col ml-20 md:ml-0">
              <p className="text-[#818080] text-center mt-[-100px] md:mt-0">I have a vast experience in the following web technologies:</p>

              <div className="h-[111.16px] w-full md:w-[518px]  flex md:justify-center items-center">
                <Image src={"/images/skill.png"} alt='HTML 5' width={75} height={102} className='p-3'/>
                <Image src={"/images/css3.png"} alt='CSS 3' width={75} height={102} className='p-3'/>
                <Image src={"/images/js.png"} alt='JS' width={75} height={102}/>
                <Image src={"/images/bootstrap.png"} alt='Bootstrap' width={75} height={102}/>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
          <Image src={"/images/skills.png"} alt='' width={411} height={414} className='md:ml-40 mt-10'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default skill
