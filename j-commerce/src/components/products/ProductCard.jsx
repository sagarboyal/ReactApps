import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";

const ProductCard = ({
  id: productId,
  productName,
  image,
  description,
  quantity,
  price,
  discount,
  specialPrice,
  about,
}) => {
  const [productViewModal, setProductViewModal] = useState(false);
  const btnLoader = false;
  const [selectedProductViewModal, setSelectedProductViewModal] = useState({});
  const isAvailable = quantity && Number(quantity) > 0;

  const handleProductViewModal = (product) => {
    setProductViewModal(true);
    setSelectedProductViewModal(product);
  };

  return (
    <div className='border rounded-lg overflow-hidden shadow-xl transition-shadow duration-300'>
      {/* Product Image Section */}
      <div
        onClick={() =>
          handleProductViewModal({
            productId,
            productName,
            image,
            description,
            quantity,
            price,
            discount,
            specialPrice,
            about,
          })
        }
        className='w-full overflow-hidden aspect-[3/2]'
      >
        <img
          className='w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105'
          src={image}
          alt={productName}
        />
      </div>

      {/* Product Details Section */}
      <div className='p-4'>
        <h2
          onClick={() =>
            handleProductViewModal({
              productId,
              productName,
              image,
              description,
              quantity,
              price,
              discount,
              specialPrice,
              about,
            })
          }
          className='text-lg font-semibold text-slate-800 mb-2 cursor-pointer'
        >
          {productName}
        </h2>
        <div className='text-sm text-slate-600 mb-4'>{description}</div>

        {/* Pricing Section */}
        <div className='flex flex-col'>
          {specialPrice ? (
            <div className='justify-between flex items-center w-full'>
              <span className='text-gray-400 line-through text-sm'>
                ₹{Number(price).toFixed(2)}
              </span>
              <span className='text-green-600 text-sm font-semibold'>
                {discount}% Off
              </span>
            </div>
          ) : (
            <div className='mb-5'></div>
          )}

          {/* Final Price and Button Section */}
          <div className='flex items-center justify-between w-full'>
            <span className='text-slate-700 font-bold text-xl'>
              ₹{(specialPrice || price).toFixed(2)}
            </span>
            <button
              disabled={!isAvailable || btnLoader}
              onClick={() => {}}
              className={`bg-blue-500 rounded-lg px-5 mt-1 py-2 text-white font-semibold ${
                isAvailable
                  ? "opacity-100 hover:bg-blue-400"
                  : "opacity-70 cursor-not-allowed"
              }`}
            >
              <span className='flex items-center'>
                <FaShoppingCart className='mr-2' />
                {isAvailable ? "Add to Cart" : "Stock Out"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <ProductViewModal
        open={productViewModal}
        setOpen={setProductViewModal}
        product={selectedProductViewModal}
        isAvailable={isAvailable}
      />
    </div>
  );
};

export default ProductCard;
