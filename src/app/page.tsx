import Skills from "@/components/skill"
import Project from "@/components/project"
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
    <Header />

      <section className="w-full h-screen mt-36 md:mt-0">
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 p-0 md:p-16 text-center">
            <h1 className="text-2xl sm:text-2xl md:text-[32px] text-primary font-semibold">Hi👋, I’m a </h1>
            <span className="text-2xl sm:text-3xl md:text-5xl text-primary font-semibold">Software Developer</span>
            <p className="text-base sm:text-lg md:text-[18px] pt-4 sm:pt-6">I’m <b className="font-bold">John Doe</b>, a developer 
            dedicated to making the world a better place one line of code at a time.</p>
            <button className="bg-alert w-[90px] h-[42] p-2 mt-8 text-white border border-red">Hire Me</button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <Image
            src={"/images/profile.png"}
            alt=""
            width={390}
            height={495}
            className="w-[550px] h-[500px] md:w-[390px] md:h-[495px] ml-0 md:ml-[130px]"
          />
        </div>
        </div>
      </section>

      <Skills />
      <Project />
      <section className="w-full h-auto md:h-[495px] mb-48 sm:p-4">
            <h1 className="text-4xl font-semibold text-center text-alert mt-20">Contact me</h1>

        <div className="w-full md:w-[1235px] sm-w-1/2 h-[414px] flex flex-col sm:flex-row mt-24">
          <div className="w-full md:w-[50%] sm:w-[30%] sm:pl-[60px] mb-10 flex justify-center">
          <Image src={"/images/contact.png"} alt='contact' width={350} height={312} className="sm-w-full"/>
          </div>

          <div className="w-full md:w-1/2 sm:w-[30%]  sm:pl-[60px]">
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
  );
}
