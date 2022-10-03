import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";

// import { CartContext } from "../context/CartContext";

const Products = () => {
  // const { cart, setCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  const productData = async () => {
    const request = await axios.get("https://fakestoreapi.com/products");
    setProducts(request.data);
  };

  useEffect(() => {
    productData(products);
    // fetch("https://api.escuelajs.co/api/v1/products")
    //   .then((response) => response.json())
    //   .then((products) => {
    //     setProducts(products);
    //     console.log(products);
    //   });
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "" : str;
  };

  // const addToCart = (e, product) => {
  //   let _cart = { ...cart };

  //   if (!_cart.items) {
  //     _cart.items = {};
  //   }

  //   if (_cart.items[product.id]) {
  //     _cart.items[product.id] += 1;
  //   } else {
  //     _cart.items[product.id] = 1;
  //   }

  //   if (!_cart.totalItems) {
  //     _cart.totalItems = 0;
  //   }
  //   _cart.totalItems += 1;
  //   setCart(_cart);
  // };

  return (
    <>
      <div className="max-w-full ">
        <Nav />
        <div className="max-w-full grid grid-cols-6 gap-3 p-2">
          {products.map((product) => {
            const { id } = product;
            return (
              <div
                key={product.id}
                className=" bg-violet-400 hover:bg-violet-500 cursor-pointer rounded"
              >
                <img
                  className="w-full rounded h-40"
                  src={product.image}
                  alt=""
                />
                <div className="product-details">
                  <p className=" text-center text-sm font-bold pt-1">
                    {truncate(product?.title, 15)}
                  </p>
                  <p className="text-xs text-center pb-1">
                    <span>Price : </span>
                    <span>{"$" + product.price}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
