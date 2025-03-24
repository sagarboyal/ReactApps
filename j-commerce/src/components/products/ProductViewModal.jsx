import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Divider } from "@mui/material";
import Status from "./Status";
import { MdClose, MdDone } from "react-icons/md";

function ProductViewModal({ open, setOpen, product, isAvailable }) {
  const {
    id,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    about,
  } = product;

  return (
    <>
      {/* Modal Dialog */}
      <Dialog
        open={open}
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={() => setOpen(false)}
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className='fixed inset-0 bg-black/30' />
        {/* Full-screen container to center the panel */}
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            {/* The actual dialog panel  */}
            <DialogPanel
              transition
              className='relative transform overflow-hidden rounded-lg bg-white shadow-xl max-w-2xl w-full p-4 transition-all md:max-w-[620px] md:min-w-[620px]'
            >
              {/* Product Image */}
              {image && (
                <div className='flex justify-center aspect-[3/2]'>
                  <img
                    className='w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105'
                    src={image}
                    alt={productName}
                  />
                </div>
              )}

              <div className='px-6 pt-10 pb-2'>
                {/* Dialog Title */}
                <DialogTitle
                  as='h1'
                  className='text-lg font-semibold text-gray-800 leading-6 mb-4
                  lg:text-3xl sm:text-2xl '
                >
                  {productName || "Unknown Product"}
                </DialogTitle>

                <div className='space-y-2 text-gray-700 pb-4'>
                  {/* Pricing Section */}
                  <div className='flex items-center justify-between'>
                    {specialPrice ? (
                      <div className='flex items-center gap-2'>
                        <span className='text-gray-400 line-through text-sm'>
                          ₹{Number(price).toFixed(2)}
                        </span>
                        <span className='text-slate-800 font-semibold text-xl'>
                          ₹{Number(specialPrice).toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className='text-xl font-bold'>
                        ₹{Number(price).toFixed(2)}
                      </span>
                    )}
                    {/** Showing status*/}
                    {isAvailable ? (
                      <Status
                        text={"In Stock"}
                        icon={MdDone}
                        bg={"bg-teal-400"}
                        color={"bg-teal-700"}
                      />
                    ) : (
                      <Status
                        text={"Out Of Stock"}
                        icon={MdClose}
                        bg={"bg-rose-400"}
                        color={"bg-rose-700"}
                      />
                    )}
                  </div>
                  <Divider />
                  {/* Description */}
                  <div>
                    <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                      Description
                    </h2>
                    <p className='text-sm text-gray-600'>{description}</p>
                  </div>
                </div>
              </div>
              <div className='flex justify-end px-6 py-4 gap-4'>
                <Button
                  className='px-4 py-2 mt-4 bg-slate-700 text-white font-semibold text-sm border-none rounded-md hover:bg-slate-900'
                  type='button'
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ProductViewModal;
