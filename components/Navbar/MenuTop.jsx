import React from "react";
import { BiX } from "react-icons/bi";

export default function MenuTop({ setIsOpen }) {
  return (
    <div
      className="
        flex
        justify-between
        p"
    >
      {/* logo */}
      <div
        className="
          text-white
          text-xl
          font-extrabold"
      >
        Bazzar
      </div>
      <BiX
        className="
          text-white
          text-2xl
          cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}
