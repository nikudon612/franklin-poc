import Image from "next/image";

function footer() {
  const footerIcons = [
    { image: "/Facebook.png", url: "/facebook" },
    { image: "/Vector.png", url: "/instagram" },
    { image: "/Twitter.png", url: "/twitter" },
    { image: "/Linkedin.png", url: "/linkedin" },
  ];
  return (
    <div className="h-[600px] w-screen inset-x-0 bottom-0 bg-black text-white flex justify-center ">
      <div className="p-[80px] w-full">
        <div className="w-full flex justify-between py-6 pb-20">
          <div>
            <div className="font-bold text-2xl">Join our Newsletter</div>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div>
              <input
                type="text"
                placeholder="Enter your Email"
                className=" border-solid border-2  border-[#FCE458] bg-black/50  text-white/80 rounded-full focus:outline-none w-[80%] h-[48px] px-4 placeholder:text-white/80"
              />
              <button className="border bg-[#FCE458] rounded-full text-black font-bold px-4 py-2 hover:bg-[#ffeb77] hover:text-[#454545]">
                Subscribe
              </button>
            </div>
            <p className="text-xs font-400 px-2 pt-4">
              By subscribing you agree to with our{" "}
              <span className="underline">Privacy Policy</span> and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>
        <hr className="py-4 pb-6" />
        <div className="pt-6 pb-14">
          <div className="flex flex-row justify-between items-center">
            <div>
              <div className="py-4 pb-10">
                <Image
                  src={"/CAI_White.png"}
                  width={200}
                  height={200}
                  color="white"
                />
              </div>
              <div className="flex flex-row">
                {footerIcons.map((item) => (
                  <div className="px-4">
                    <Image
                      src={item.image}
                      width={20}
                      height={20}
                      color="white"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="px-6">
                <div className="py-2">How it Works</div>
                <div className="py-2">Our Members</div>
                <div className="py-2">Join Us</div>
              </div>
              <div className="px-6">
                <div className="py-2">Brand Assets</div>
                <div className="py-2">Blogs</div>
                <div className="py-2">Case Studies</div>
              </div>
              <div className="px-6">
                <div className="py-2">Open-Source Tools</div>
                <div className="py-2">Verify</div>
                <div className="py-2">FAQ</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="pt-4 pb-2" />
        <div className="">
          <div className="flex flex-row justify-between items-center">
            <div>Copyright © 2023 Adobe. All rights reserved.</div>
            <div className="flex flex-row">
              <div className="px-4">Privacy Policy</div>
              <div className="px-4">Terms of Use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
