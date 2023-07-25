import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT liens */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Accueil</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">FOOD</Link>
      </div>
      {/* Menu TEL */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT liens */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        {!user ? (
          <Link href="/login">Connexion</Link>
        ) : (
          <Link href="/commandes">Commander</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
