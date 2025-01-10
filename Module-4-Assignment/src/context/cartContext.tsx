// import { createContext, ReactNode, FC, useContext } from "react";
  
//   // buat context initial value
//   const CartContext = createContext<any>(null);
  
  
//   export const CartProvider: any = ({ children }:any) => {
//     const cartData: any = {
//       username: "mr bean",
//       role: "user",
//       lastLogin: "2024-01-08",
//     };
  
//     return (
//       <CartContext.Provider value={{ cartData }}>{children}</CartContext.Provider>
//     );
//   };
  
//   export const useCart = () => {
//     const context = useContext(CartContext);
//     if (context === null) {
//       throw new Error("useCart must be used within CartProvider ");
//     }
  
//     return context;
//   };