import React from "react";
import { BsHandbag } from "react-icons/bs";

export default function CartBag() {
  return (
    <div
      className="
  w-11
  h-11
  border
  border-gray-300
  text-gray-500
  bg-secondary/20
  flex
  items-center
  justify-center
  rounded-full
  relative
  "
    >
      <BsHandbag
        className="
    text-xl"
      />

      <div
        className="
      absolute
      w-5
      h-5
      rounded-full
      bg-secondary
      text-white
      font-extrabold
      -top-1
      -right-1
      flex
      items-center
      justify-center
      text-xs
      "
      >
        <span>3</span>
      </div>
    </div>
  );
}
