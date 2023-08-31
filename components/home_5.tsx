import Image from "next/image";
import React from "react";
import Link from "next/link";

function home_5() {
  const companies = [
    {
      image: "/logo.png",
      url: "/",
    },
    {
      image: "/logo2.png",
      url: "/",
    },
    {
      image: "/logo3.png",
      url: "/",
    },
    {
      image: "/logo4.png",
      url: "/",
    },
    {
      image: "/Canon.png",
      url: "/",
    },
    {
      image: "/El-Tiempo.png",
      url: "/",
    },
    {
      image: "/Leica_1-2x.png",
      url: "/",
    },
  ];
  return (
    <div className="h-[685px] w-screen flex flex-col items-center justify-center bg-brand-yellow/30">
      <div className="w-full flex flex-row justify-center items-center">
        <div className="flex items-center justify-center px-20">
          <Image
            src={"/layers2x.png"}
            width={600}
            height={600}
            alt="infographic"
          />
        </div>
        <div className="flex items-center">
          <div className="w-[565px]">
            <div className="font-bold text-3xl">Become a member</div>
            <div className="text-sm text-left pt-6 pb-8">
              Join our growing community of CAI members, including AP, Arm,
              Getty, Microsoft, The New York Times, Qualcomm, Truepic, Twitter,
              WITNESS and many others. Membership is free and includes invites
              to member events and prototype development support.
            </div>
            <div>
              <Link
                href={"/"}
                className="bg-brand-yellow rounded-full text-black font-bold px-4 py-3 hover:bg-[#ffeb77] hover:text-[#454545]"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[165px] w-screen flex items-center justify-center">
        {companies.map((company) => (
          <div className="m-h-[36px] flex items-center justify-center">
            <Image src={company.image} alt="company logo" />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default home_5;
