import Image from "next/image";
import Link from "next/link";
import React from "react";

function home_2() {
  const diagramItems = [
    {
      image: "/create@2x.png",
      label: "Creation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "/edit@2x.png",
      label: "Editing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "/sharing@2x.png",
      label: "Publishing And Sharing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "/viewing@2x.png",
      label: "Viewing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
    <div className="h-[875px]">
      <div>
        <div className="flex items-center justify-center">
          <div className="w-[720px] flex flex-col items-center justify-center ">
            <div className="font-bold text-3xl pb-6">How it Works</div>
            <div className="text-center pb-10">
              The Content Authenticity Initiative is a group working together to
              fight misinformation and add a layer of verifiable trust to all
              types of digital content, starting with photo and video, through
              provenance and attribution solutions.{" "}
            </div>
            <div>
              <Link
                href="/about"
                className="rounded-full bg-[#FCE458]  text-black font-bold px-4 py-3 hover:bg-[#ffeb77] hover:text-[#454545]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-center pt-[10rem]">
            {diagramItems.map((item, index) => (
              <div
                className="flex flex-col items-center justify-center w-[275px] px-[20px]"
                key={index}
              >
                <Image
                  src={item.image}
                  width={200}
                  height={150}
                  alt="infographics"
                />
                <div className="font-bold text-2xl pb-4 flex flex-wrap items-start justify-start text-center py-10">
                  {item.label}
                </div>
                <div className="text-center pb-4">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default home_2;
