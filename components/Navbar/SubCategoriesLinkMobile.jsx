"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function SubCategoriesLinkMobile({ categories, isOpen }) {
  return (
    <div
      className={`
    ${isOpen ? "flex" : "hidden"}  
    flex-col
    gap-2
    text-white
    pl-20
    
    
    `}
    >
      {categories?.map((category) => (
        <Link
          className="
          hover:bg-secondary"
          key={category.id}
          href={category.route}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
