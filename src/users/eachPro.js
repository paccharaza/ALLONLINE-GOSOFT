import React, { useEffect, useState } from "react";
import Product from "./sup-compo/eachPro/eachPro";
import Form from "./sup-compo/eachPro/eachProForm";
import Button from "./sup-compo/eachPro/eachProButton";
import axios from "axios";
import Footer from "./sup-compo/navbar/Footer";
import { useParams } from "react-router-dom";
import Navbar from "./sup-compo/navbar/navbarMain";
import Navbar2 from "./sup-compo/navbar/navbarTest";
import "./CSS/App.css";

const Products = (productType) => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3002/user!/products/${params.id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [productType]);
  return (
    <>
      <Navbar />
          {products.map((product, index) => (
      <>
      {/* <Navbar2 product={product} /> */}
      <div className="container">
        <h2 className="text-center"></h2>
        <hr />
        <div className="rows">
            <>
              <h1 className="text-center rounded text-bg-success">
                {product.product_name}
              </h1>
              <div className="row new-box">
                <div className="col"><Product product={product} key={product.id} /></div>
                <div className="col"><Form product={product} key={product.id} /></div>
                <div className="col"><Button product={product} key={product.id} /></div>
              </div>
            </>
        </div>
      </div>
      </>
          ))}
    </>
  );
};

export default Products;
