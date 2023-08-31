import Link from "next/link";
import Hero from "../components/hero";
import Home_1 from "../components/home_1";
import Home_2 from "../components/home_2";
import Home_3 from "@/components/home_3";
import Home_4 from "@/components/home_4";
import Home_5 from "@/components/home_5";

export default function Home() {
  return (
    <div>
      <Hero />
      <Home_1 />
      <Home_2 />
      <Home_3 />
      <Home_4 />
      <Home_5 />
    </div>
  );
}
