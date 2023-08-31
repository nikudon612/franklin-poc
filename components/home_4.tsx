import React from "react";
import Link from "next/link";
import Image from "next/image";

function hero_4() {
  return (
    <div className="h-[585px] w-screen flex justify-center">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <div className="w-[565px]">
            <div className="font-bold text-3xl">Verify</div>
            <div className="text-sm text-left pt-6 pb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique.
            </div>
            <div>
              <Link
                href={"/"}
                className="bg-brand-yellow rounded-full text-black font-bold px-4 py-3 hover:bg-[#ffeb77] hover:text-[#454545]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 flex items-center justify-center">
            <div className="flex items-center justify-center">
              <Image
                src={"/verify.png"}
                width={1200}
                height={1200}
                alt="screenshots of c2pa tool"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero_4;
