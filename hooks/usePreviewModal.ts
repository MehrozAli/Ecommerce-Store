import { create } from "zustand";
import { Product } from "@/types";

interface PreviewModal {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

export const usePreviewModal = create<PreviewModal>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (prod) => set({ data: prod, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
