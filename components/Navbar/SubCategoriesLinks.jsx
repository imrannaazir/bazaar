import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SubCategoriesLinks({ categories }) {
  return (
    <div
      className="
  hidden    
  absolute
  inset-x-0
  group-hover:grid
  grid-cols-3
  gap-3
  max-w-screen-xl
  mx-auto
  p-4
  
  rounded-md
  left-0
  border
  shadow-md
  bg-white
  z-20"
    >
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.route}
          className="
          flex
          gap-3
          items-center
          justify-center
                "
        >
          <Image
            className="
          rounded-md
          border
          border-primary"
            src="/shared/chilis.jpg"
            alt="sub category"
            width={80}
            height={80}
          />
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
}
