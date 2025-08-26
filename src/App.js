import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./pages/header/Header"
import LoginAdmin from "./users/loginAdmin";
import Pages from "./pages/pages/Pages"
import Data from "./pages/Data"
import Cart from "./pages/Cart/Cart"
import Sdata from "./pages/shops/Sdata"
import Footer from "./pages/footer/Footer"
import Register from "./users/register"
import MainTypeproduct from "./users/fashionFiles";
import Login from "./auth/Login";
import UserUpdate from "./auth/UserUpdate";
import UserCreate from "./auth/UserCreate";
import UsersProducts from "./auth/UsersProducts";
import ProductsCreate from "./auth/ProductsCreate";
import ProductsUpdate from "./auth/ProductsUpdate";
import Users from './auth/Users';
import AllProduct from "./products/AllProduct"
import Payment from "./users/payment"
import ProductType from "./users/eachPro";
// import Apps from "./Apps"

//////users
function App() {

  const { productItems } = Data
  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
        <Route path='/Allpro' exact>
            <AllProduct/>
          </Route>
          <Route path='/login' >
            <Login/>
          </Route>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/register' >
            <Register productType="mom_and_kids"/>
          </Route>
          <Route path='/admin'>
            <Users/>
          </Route>
          <Route path="/mainType/IT_and_computer" >
            <MainTypeproduct productType="IT_and_computer"/>
          </Route>
          <Route path="/mainType/pet">
            <MainTypeproduct productType="pet"/>
          </Route>
          <Route path="/mainType/beauty">
            <MainTypeproduct productType="beauty"/>
          </Route>
          <Route path="/mainType/electronic" >
            <MainTypeproduct productType="electronic"/>
          </Route>
          <Route path="/mainType/mom_and_kids" >
            <MainTypeproduct productType="mom_and_kids"/>
          </Route>
          <Route path="/mainType/HnG" >
            <MainTypeproduct productType="HnG"/>
          </Route>
          <Route path="/mainType/fashionW" >
            <MainTypeproduct productType="fashionW" />
          </Route>
          <Route path="/mainType/fashionM" >
            <MainTypeproduct productType="fashionM"/>
          </Route>
          <Route path="/mainType/book_and_office">
            <MainTypeproduct productType="book_and_office"/>
          </Route>
          <Route path="/mainType/SME_product" >
            <MainTypeproduct productType="SME_product"/>
          </Route>
          <Route path="/mainType/healthy" >
            <MainTypeproduct productType="healthy"/>
          </Route>
          <Route path="/login!" >
            <LoginAdmin/>
          </Route>
          <Route path="/Products" >
              <UsersProducts/>
            </Route>
            <Route path="/productsU/:id" >
               <ProductsUpdate/>
            </Route>
            <Route path="/productsC" >
              <ProductsCreate/>
            </Route>
            <Route path="/update/:id" >
              <UserUpdate/>
            </Route>
            <Route path="/create" >
              <UserCreate/>
            </Route>
            <Route path="/produc/:id" >
              <ProductType CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
            </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path="/payments" >
            <Payment/>
          </Route>
        </Switch>
      </Router>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <Footer />
    </>
  )
}

export default App
