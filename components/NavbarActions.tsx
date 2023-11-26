"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

export const NavbarActions = () => {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 font-medium text-white text-sm">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};
