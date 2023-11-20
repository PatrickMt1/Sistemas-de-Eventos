import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create()(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,
      toggleCart: () =>
        set((state) => ({
          isOpen: !state.isOpen,
        })),
      addEventToCart: (event) =>
        set((state) => {
          const eventExists = state.cart.find((item) => item?.id === event.id);

          if (eventExists) {
            return {
              cart: state.cart.map((c) => ({
                ...c,
                ...(c.id === eventExists.id && {
                  quantity: c.quantity ? (c.quantity += 1) : 1,
                }),
              })),
            };
          }

          return { cart: [...state.cart, { ...event, quantity: 1 }] };
        }),
      removeEventFromCart: (item) =>
        set((state) => {
          const existingEvent = state.cart.find((p) => p.id === item.id);

          if (existingEvent && existingEvent.quantity > 1) {
            const updatedCart = state.cart.map((p) => {
              if (p.id === item.id) {
                return { ...p, quantity: p.quantity - 1 };
              }
              return p;
            });
            return { cart: updatedCart };
          } else {
            const filterdCart = state.cart.filter((p) => p.id !== item.id);
            return { cart: filterdCart };
          }
        }),
    }),
    { name: "cart-storage" }
  )
);
