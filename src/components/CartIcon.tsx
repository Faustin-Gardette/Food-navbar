import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/panier" className="flex items-center gap-1">
      <span>Panier (3)</span>
      <div className="relative w-8 h-8">
        <Image src="/cart.png" alt="" fill />
      </div>
    </Link>
  );
};

export default CartIcon;
