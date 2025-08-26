  import React from "react"
  import Home from "../MainPage/Home"
  import Shop from "../shops/Shop"


  const Pages = ({ addToCart, CartItem, shopItems }) => {
    
    return (
      <>
        <Home CartItem={CartItem} />
        <Shop shopItems={shopItems} addToCart={addToCart} />
      </>
    )
  }

  export default Pages
