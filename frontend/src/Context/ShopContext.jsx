import { createContext, useState, useEffect } from "react";


// import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);

const getDefaultCart = () => {


  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }

  return cart;

};

const ShopContextProvider = ({ children }) => {



  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());


  useEffect(() => {
    fetch("http://localhost:3000/allProducts")
      .then((res) => res.json())
      .then((data) => setAll_product(data))

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:3000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json"
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data))
    }
  }, [])

  const contextValue = all_product;


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = prev[itemId] + 1;
      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:3000/addtocart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "itemId": itemId })
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
      }
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      const newQuantity = prev[itemId] - 1;
      updatedCart[itemId] = newQuantity > 0 ? newQuantity : 0;

      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:3000/removefromcart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "itemId": itemId })
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    // Assuming cartItems is an object where keys are product IDs and values are quantities
    for (const [itemId, quantity] of Object.entries(cartItems)) {
      if (quantity > 0) {
        // Find the product in contextValue based on the itemId
        const itemInfo = contextValue.find((product) => product.id === Number(itemId));

        // Check if itemInfo is found and has new_price defined
        if (itemInfo && itemInfo.new_price != null) {
          totalAmount += itemInfo.new_price * quantity; // Calculate total for this item
        }
      }
    }

    return totalAmount;
  };


  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  return (
    <ShopContext.Provider
      value={{ contextValue, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
