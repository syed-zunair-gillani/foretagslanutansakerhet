import React, { useState } from "react";
import { NavLinks } from "../../data/navLinks";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="bg-primary border-b border-slate-800 text-white pr-3 md:p-5 fixed w-full flex items-center z-50">
      <div className="flex items-center w-full md:justify-start justify-between  gap-4">
        {/* logo */}
        <h2 className="sm:text-[21px] text-lg whitespace-nowrap capitalize inline p-3 md:p-0 font-bold z-50 bg-primary">
          <Link href="/">Företagslån <span className="text-yellow-500">utan</span> Säkerhet</Link>
        </h2>
        <ul
          className={`flex flex-col md:flex-row gap-4 font-medium fixed w-full left-0 p-10 md:p-0 transition-all duration-300 ease-linear bg-primary md:relative ${
            isMobile ? "top-12" : "-top-[100%]"
          }`}
        >
          {NavLinks.map((nav, idx) => (
            <li className="hover:opacity-70" key={idx}>
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
        <div className="text-3xl hidden md:block cursor-pointer hover:scale-105"><IoIosSearch/></div>
        <div
          className="text-3xl md:hidden cursor-pointer hover:scale-105"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <RxCross2 /> : <TbMenu2 />}
        </div>
      </div>
    </header>
  );
};

export default Header;
