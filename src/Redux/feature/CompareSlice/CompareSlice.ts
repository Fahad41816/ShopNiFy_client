/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  comparisonData: [],
  comparisonCategory: null,
  warning: null,
};

const compareSlice = createSlice({
  name: "CompareSlice",
  initialState,
  reducers: {
    addProductToCompare: (state : any, action : any) => {
      if (state.comparisonData.length >= 3) {
        state.warning = "You can only compare up to three products.";
        toast.error("You can only compare up to three products.")
        return;
      }

      if (
        state.comparisonCategory &&
        state.comparisonCategory !== action.payload.Category.name
      ) {
        state.warning = "You can only compare products from the same category.";
          toast.error("You can only compare products from the same category.")
        return;
      }

      const isProductAlreadyInComparison = state.comparisonData.some(
        (product : any) => product.id === action.payload.id
      );

      if (isProductAlreadyInComparison) {
        state.warning = "This product is already in the comparison list.";
        toast.error("This product is already in the comparison list.")
        return;
      }
      toast.success("Added Product in Compare!.")
      state.comparisonData.push(action.payload);
      state.comparisonCategory = action.payload.Category.name;
      state.warning = null; // Clear any previous warnings
    },
    removeProductFromComparison: (state : any, action : any) => {
      // Remove the product from the comparison list
      state.comparisonData = state.comparisonData.filter(
        (pdt: any) => pdt.id !== action.payload.id
      );

      // If no products left, reset the category
      if (state.comparisonData.length === 0) {
        state.comparisonCategory = null;
        state.warning = null;
      }
    },
  },
});

export const  {addProductToCompare, removeProductFromComparison} = compareSlice.actions
export default compareSlice
