/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  cartData: [], 
  vendorId: null, // Keep track of the vendor
};

const CardSlice = createSlice({
  name: "CardSlice",
  initialState,
  reducers: {
    AddProductToCart: (state, action) => {
      const product = action.payload;
      const { shops, id } = product;
      console.log("Shp", shops) 
      // Check if the cart already has products from a different vendor
      if (state.vendorId && state.vendorId !== shops.vendorId) {
        // Trigger a warning or take further action
        return {
          ...state,
          warning: {
            message: "Your cart contains products from another vendor. Would you like to replace the cart or retain the current items?",
            product,
          },
        };
      }

      // If vendor matches or the cart is empty, proceed
      const existingProduct = state.cartData.find((data: any) => data.id === id);

      if (existingProduct) {
        // If product exists, update its quantity
        state.cartData = state.cartData.map((data: any) =>
          data.id === id ? { ...data, Qty: data.Qty + 1 } : data
        );
      } else {
        // If product does not exist, add it
        state.cartData.push({ ...product, Qty: 1 }); 
        if (!state.vendorId) {
          state.vendorId = shops.vendorId; // Set the vendor ID
        }
      }
    },
    replaceCartWithNewProducts: (state, action) => {
      // Replace the current cart with the new products
      state.cartData = [{ ...action.payload, Qty: 1 }];
      state.vendorId = action.payload.vendorId; // Update the vendor ID
      delete state.warning; // Remove any existing warnings
    },
    retainCurrentCart: (state) => {
      // Retain the current cart and cancel the addition
      delete state.warning; // Remove the warning
    },
    deleteProductToCart: (state, action) => {
      // Remove the product from the cart
      state.cartData = state.cartData.filter(
        (pdt: any) => pdt.id !== action.payload.id
      );

      // If the cart becomes empty, reset the vendor ID
      if (state.cartData.length === 0) {
        state.vendorId = null;
      }
    },
  },
});

export const {
  AddProductToCart,
  deleteProductToCart,
  replaceCartWithNewProducts,
  retainCurrentCart,
} = CardSlice.actions;
export default CardSlice;
