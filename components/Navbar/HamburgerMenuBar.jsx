"use client";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import MenuBottom from "./MenuBottom";
import MenuTop from "./MenuTop";
import MobileMenuNav from "./MobileMenuNav";

export default function HamburgerMenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="
    lg:hidden
    text-xl
    "
    >
      <VscMenu
        className="
      cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`
      ${isOpen ? "absolute" : "hidden"} 
      bg-primary
      inset-0
      h-max
      z-20
      p-4
      `}
      >
        {/* top */}
        <MenuTop setIsOpen={setIsOpen} />

        {/* links */}
        <div className="pb-20">
          <MobileMenuNav />
        </div>

        {/* end */}
        <MenuBottom />
      </div>
    </div>
  );
}
