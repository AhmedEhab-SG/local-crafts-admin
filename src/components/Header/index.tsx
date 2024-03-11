"use client";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="
      sticky 
      top-0 
      right-0
      z-1 
      flex 
      flex-1
      w-full
      bg-white
      max-h-20
      drop-shadow-1
      dark:bg-boxdark
      dark:drop-shadow-none"
    >
      <Navbar />
    </header>
  );
};

export default Header;
