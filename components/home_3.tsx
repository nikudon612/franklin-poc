import Image from "next/image";
import Link from "next/link";
import React from "react";

function home_3() {
  return (
    <div className="h-[585px] w-screen bg-brand-yellow/20 flex items-center justify-center">
      <div className="flex flex-row items-center justify-center">
        <div className="w-1/2 flex items-center justify-between">
          <div className="flex items-center justify-center">
            <Image
              src={"/c2patool@2x.png"}
              width={400}
              height={400}
              alt="screenshots of c2pa tool"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-[565px]">
            <div className="font-bold text-3xl">Open-source Tools</div>
            <div className="text-sm text-left pt-6 pb-8">
              Start here for implementation of our off-the-shelf open-source
              tools to integrate content credentials into your site, app, or
              service. Join the ecosystem of secure preservation of provenance
              and attribution data for digital content to counter the rise of
              misinformation.
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
      </div>
    </div>
  );
}

export default home_3;
