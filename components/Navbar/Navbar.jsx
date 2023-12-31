import React from "react";
import Container from "../shared/Container";
import { PiCookingPot } from "react-icons/pi";
import Link from "next/link";
import SubCategoriesLinks from "./SubCategoriesLinks";

export default function Navbar() {
  const categories = [
    {
      id: 1,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 2,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 3,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 4,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 5,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 6,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 7,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 8,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 9,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
    {
      id: 10,
      name: "Cooking",
      icon: PiCookingPot,
      route: "",
      sub_categories: [
        {
          id: 1,
          name: "Spices",
          route: "",
        },
        {
          id: 2,
          name: "Spices",
          route: "",
        },
        {
          id: 3,
          name: "Spices",
          route: "",
        },
        {
          id: 4,
          name: "Spices",
          route: "",
        },
        {
          id: 5,
          name: "Spices",
          route: "",
        },
        {
          id: 6,
          name: "Spices",
          route: "",
        },
        {
          id: 7,
          name: "Spices",
          route: "",
        },
        {
          id: 8,
          name: "Spices",
          route: "",
        },
        {
          id: 9,
          name: "Spices",
          route: "",
        },
        {
          id: 10,
          name: "Spices",
          route: "",
        },
      ],
    },
  ];

  function Category({ category }) {
    const { icon: ReactIcon, name, sub_categories } = category || {};
    return (
      <div
        className="
      group
      "
      >
        <Link
          href={`/`}
          className="
        pb-3
        flex
        flex-col
        items-center
        text-gray-400
        hover:text-gray-700
        border-b-[3px]
        border-transparent
        duration-200
        hover:border-primary
        relative
        group
      "
        >
          <ReactIcon className="text-4xl" />
          <p>{name}</p>
        </Link>
        <SubCategoriesLinks categories={sub_categories} />
      </div>
    );
  }

  return (
    <Container>
      <div className="lg:flex justify-between hidden ">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </Container>
  );
}
