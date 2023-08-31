import Link from "next/link";

function header() {
  const navItems = [
    { label: "How it Works", url: "/how-it-works" },
    { label: "Our Members", url: "/our-members" },
    { label: "Resources", url: "/resources" },
    { label: "Open-Source Tools", url: "/open-source-tools" },
    { label: "Verify", url: "/verify" },
  ];
  return (
    <div className="w-screen h-[100px] relative">
      <div className="flex flex-row items-center justify-between px-10 py-6">
        <div className="">logo</div>
        <div className="">
          <ul className="flex flex-row items-center">
            {navItems.map((item) => (
              <li className="px-4">
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default header;
