import Image from "next/image";
import Link from "next/link";
import React from "react";

function home_2() {
  const diagramItems = [
    {
      image: "",
      label: "Creation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "",
      label: "Editing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "",
      label: "Publishing And Sharing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "",
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
            <div className="font-bold text-3xl pb-4">How it Works</div>
            <div className="text-center pb-4">
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
          <div>
            {diagramItems.map((item) => (
              <div className="flex flex-col items-center justify-center">
                {/* <Image src={item.image} /> */}
                <div className="font-bold text-3xl pb-4">{item.label}</div>
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
