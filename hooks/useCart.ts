import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

import { Product } from "@/types";

interface Cart {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<Cart>(
    (set, get) => ({
      items: [],
      addItem: (prod: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === prod.id);

        if (existingItem) {
          return toast("Item already exist in cart!");
        }

        set({ items: [...currentItems, prod] });
        toast.success("Item added to cart!");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from the cart");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
