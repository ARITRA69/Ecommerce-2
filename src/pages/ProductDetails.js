import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const notify = () =>{
    toast.success(`${product.title} is added`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* //text and image rapper */}

        <div className="flex flex-col lg:flex-row items-center">
          {/* IMAGE  */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>

          {/*  TEXT */}
          <div className="flex-1 text-current lg:text-left ">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto  left-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>

            <div className="flex gap-10 ">
              <button
                onClick={() => addToCart(product, product.id)}
                
                className="bg-primary py-4 px-8 text-white"
              >
                <div onClick={notify}>
                  Add to cart
                  <ToastContainer/>
                </div>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
