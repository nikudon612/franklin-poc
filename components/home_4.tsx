import React from "react";
import Link from "next/link";
import Image from "next/image";

function hero_4() {
  return (
    <div className="h-[585px] flex items-center justify-center ">
      <div className="flex flex-row items-center justify-center">
        <div className="w-1/2 flex flex-col justify-center pr-20 p-20">
          <div className="w-[565px] ">
            <div className="font-bold text-3xl">Verify</div>
            <div className="text-sm text-left pt-6 pb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique.
            </div>
            <Link
              href={"/"}
              className="bg-brand-yellow rounded-full text-black font-bold px-4 py-3 hover:bg-[#ffeb77] hover:text-[#454545]"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-1/2 pl-20 ">
          <div className="drop-shadow">
            <Image
              src={"/verify.png"}
              width={500}
              height={500}
              alt="screenshots of c2pa tool"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero_4;
