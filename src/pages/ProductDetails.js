import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { IoIosAdd, IoMdRemove } from "react-icons/io";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const notify = () => {
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
  };

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 lg:h-[80vh] h-screen flex items-center">
      <div className="container mx-auto">
        {/* //text and image rapper */}

        <div className="flex flex-col lg:flex-row items-center">
          {/* IMAGE  */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>

          {/*  TEXT */}
          <div className="flex-1 text-current lg:text-left ">
            <h1 className="text-[36px] font-medium mb-2 max-w-[450px] mx-auto  left-0 text-center">
              {title}
            </h1>
            <div className="flex gap-1 pl-7 text-[#ffd700] pt-3">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </div>
            <div className="mb-8 p-7">
              <p className="text-lg font-semibold pb-2 mb-2 border-b-2">
                Description
              </p>
              <p className="">{description}</p>
            </div>

            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium ml-7 p-1">
              {/* minus icon */}
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                1
              </div>
              {/* plus icon */}
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoIosAdd />
              </div>
            </div>

            <div className="flex gap-10 justify-between">
              <div className="text-[36px] text-red-500 font-medium pl-7">
                ₹ {price}
              </div>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-primary py-4 px-8 text-white"
              >
                <div onClick={notify}>
                  Add to cart
                  <ToastContainer />
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
