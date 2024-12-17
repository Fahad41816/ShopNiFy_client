/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

// Context Provider
const CartAlertShowProvider = ({ children }: any) => {
  const [IsOpen, setIsOpen] = useState(false);
  const [ProductData, setProductData] = useState({});

  const handleModalShow = (productData: any) => {
    setIsOpen(true);
    setProductData(productData);
  };

  const handleModalHide = () => {
    setIsOpen(false);
  };

  const contextValue = {
    IsOpen,
    handleModalShow,
    handleModalHide,
    ProductData,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCartAlertShow = () => useContext(CartContext);

export default CartAlertShowProvider;
