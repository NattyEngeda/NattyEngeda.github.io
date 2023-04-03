import React from "react";

export default function Header() {
  return (
    <header className="h-20  flex flex-row gap-20 items-center justify-between px-10 normshad shadow-xl">
      <div>
        <h1 className="text-2xl font-bold font-Alkatra underline">
          Natty Engeda
        </h1>
      </div>
      <div>
        <ul className="flex flex-row gap-10 font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Portolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
