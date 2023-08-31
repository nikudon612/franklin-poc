import Link from "next/link";
import Hero from "../components/hero";
import Home_1 from "../components/home_1";
import Home_2 from "../components/home_2";

export default function Home() {
  return (
    <div>
      <Hero />
      <Home_1 />
      <Home_2 />
    </div>
  );
}
