import React from "react";

const menu = [
  { id: 1, name: "About", href: "/about" },
  { id: 2, name: "Help", href: "/about" },
  { id: 3, name: "Press", href: "/about" },
  { id: 4, name: "API", href: "/about" },
  { id: 5, name: "Jobs", href: "/about" },
  { id: 6, name: "Privacy", href: "/about" },
  { id: 7, name: "Term", href: "/about" },
  { id: 8, name: "Locations", href: "/about" },
  { id: 9, name: "Top Accounts", href: "/about" },
  { id: 10, name: "Hashtag", href: "/about" },
  { id: 11, name: "Languages", href: "/about" },
];

export default function Footer() {
  return (
    <main className={"mt-4 ml-10 w-full"}>
      <section
        className={"flex flex-row flex-wrap text-gray-300 text-sm gap-x-3"}
      >
        {menu.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </section>
      <p className={"mt-4 text-gray-300 text-sm"}>
        © 2022 Simple Instagram from{" "}
        <span
          className={"cursor-pointer hover:underline"}
          onClick={() => window.open("https://rd-portofolio.vercel.app")}
        >
          kakido
        </span>
      </p>
    </main>
  );
}
