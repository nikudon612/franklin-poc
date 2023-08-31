import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center flex-wrap max-w-[720px]">
          <div className="font-bold text-6xl ">
            Authentic Storytelling Through Digital Content Provenance
          </div>
          <p>
            Promote adoption of an open industry standard for content
            authenticity and provenance.
          </p>
        </div>
        <div className="flex flex-row items-center justify-between w-[250px]">
          <Link
            className="bg-[#FCE458] rounded-full text-black font-bold px-4 py-2 hover:bg-[#ffeb77] hover:text-[#454545]"
            href={"/"}
          >
            Join Us
          </Link>
          <Link className="font-bold" href={"/"}>
            How it Works
          </Link>
        </div>
      </div>
    </div>
  );
}
