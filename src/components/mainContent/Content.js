import React, { useEffect, useState } from "react";
import "./Content.css";
import axios from "axios";

//    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

const Content = () => {
  const [products, setProducts] = useState([]);

  const productData = async () => {
    const request = await axios.get("https://fakestoreapi.com/products");

    setProducts(request.data);
  };

  useEffect(() => {
    productData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "" : str;
  };

  return (
    <>
      <section>
        <div className="products">
          {products.map((product) => {
            const { id } = product;
            return (
              <div className="product-items" key={id}>
                <img src={product.image} alt="" />
                <p>{truncate(product?.title, 20)}</p>
                <p>
                  <span>Price : </span>
                  <span>{"$" + product.price}</span>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Content;
