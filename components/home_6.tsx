import React from "react";
import Image from "next/image";

function home_6() {
  const Priciples = [
    {
      image: "/Frame.png",
      title: "Privacy",
      description:
        "CAI work respects the privacy of creators, journalists, publishers, and consumers.",
    },
    {
      image: "/Frame2.png",
      title: "Accessibility",
      description:
        "We strive to ensure that secure provenance is readily available to anyone, regardless of location or technical proficiency.",
    },
    {
      image: "/Frame3.png",
      title: "Interoperability",
      description:
        "We’re fostering an ecosystem of tools that work together seamlessly for people to create, maintain, and communicate content provenance.",
    },
    {
      image: "/Frame4.png",
      title: "Simplicity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "/Frame5.png",
      title: "Extensibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "/Frame6.png",
      title: "Openness",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
    <div className="h-[875px] w-screen flex flex-col  ">
      <div className="font-bold text-3xl text-left w-screen pl-20 pt-20">
        Our Guiding Priciples
      </div>
      <div className="flex items-center justify-center pt-20 ">
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap flex-row items-center justify-center ">
            {Priciples.map((principle) => (
              <div className="w-[33%] px-6 py-6 flex flex-col items-center justify-center">
                <Image
                  src={principle.image}
                  width={88}
                  height={88}
                  alt="logo"
                />
                <div className="text-left font-bold text-xl py-4">
                  {principle.title}
                </div>
                <div className="w-[350px] text-sm text-center">
                  {principle.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default home_6;
