import React from "react";
import Image from "next/image";
function footer() {
  return (
    <>
    
      <div className="bg-[url('/images/wave.svg')] h-auto md:h-[390px] w-full bg-no-repeat bg-fill flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2 lg:w-[100%] flex justify-center items-center flex-col pt-32">
          <p className="text-white">My social media links:</p>
          <div className="w-[315px] p-2 flex justify-center items-center">
            <a href="https://www.linkedin.com/in/hamzabhatti143/">
              <Image
                src={"/images/linkedin-svgrepo-com 1.svg"}
                alt="LindedIn"
                width={50}
                height={50}
                className="p-3"
              />
            </a>
            <a href="https://web.whatsapp.com/">
              <Image
                src={"/images/whatsapp-svgrepo-com 1.svg"}
                alt="Whatsapp"
                width={50}
                height={50}
                className="p-3"
              />
            </a>
            <a href="https://twitter.com/">
              <Image
                src={"/images/twitter-svgrepo-com 1.png"}
                alt="Twitter"
                width={50}
                height={50}
                className="p-3"
              />
            </a>
            <a href="mailto:bhatti3993@gmail.com">
              <Image
                src={"/images/gmail-svgrepo-com 1.svg"}
                alt="Gmail"
                width={50}
                height={50}
                className="p-3"
              />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-center items-center flex-col pt-24">
          <p className="text-white">More Project I have worked on</p>
          <p className="flex items-center text-white">
            <Image
              src={"/images/github-svgrepo-com 1.png"}
              alt="Github"
              width={50}
              height={50}
              className="p-3"
            />
            <a href="https://github.com/hamzabhatti143/">@hamza-bhatti </a> <span> </span> on
            github
          </p>
        </div>
      </div>
    </>
  );
}

export default footer;
