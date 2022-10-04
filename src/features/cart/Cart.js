import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getByTitle } from '@testing-library/react';
export default function Cart({ openCart, setOpenCart }) {
  const navigate = useNavigate();
  const cancelButtonRef = useRef(null);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const onBtnBackToShop = () => {
    setOpenCart(false);
    navigate('/');
  };
  return (
    <Transition.Root show={openCart} as={Fragment}>
      <Dialog
        as="div"
        classNameName="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpenCart}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="transform rounded-lg w-[1011px] min-w-[1011px] bg-white text-left shadow-xl transition-all sm:my-8">
                <div className="bg-white sm:p-2 sm:pb-2 flex">
                  <div className="sm:flex justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer hover:bg-red-500 text-white border-[1px] font-bold border-indigo-500 top-[-12px] right-[-10px] absolute z-2 bg-black flex justify-center"
                      onClick={() => setOpenCart(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex justify-center items-center text-center p-[10px] ">
                  <h1 className="font-serif text-[20px] text-lg text-black justify-center border-b-[2px] w-[512px] mt-[2px] border-gray-400">
                    The following items have been added to your cart :
                  </h1>
                </div>
                <div className="bg-gray-100">
                  <div className="container mx-auto mt-10">
                    <div className="flex shadow-md my-10">
                      <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                          <h1 className="font-semibold text-2xl">Your Cart</h1>
                          <h2 className="font-semibold text-2xl">{}</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                            Product Details
                          </h3>
                          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                            Quantity
                          </h3>
                          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                            Price
                          </h3>
                          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                            Total
                          </h3>
                        </div>
                        {cartItems.map((items) => {
                          return (
                            <div className="flex items-center justify-center hover:bg-gray-100 -mx-8 px-6 py-5">
                              <div className="flex w-2/5">
                                <div className="w-[80%] flex justify-center p-2">
                                  <img
                                    className="h-24 object-fit"
                                    src={items.image}
                                    alt="item"
                                  />
                                </div>
                                <div className="flex flex-col justify-between w-[90%]">
                                  <span className="font-bold text-sm hover hover:text-teal-500 cursor-pointer">
                                    {items.title}
                                  </span>
                                  <span className="text-red-500 text-xs">
                                    {items.category}
                                  </span>
                                  <a
                                    href="#"
                                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                  >
                                    Remove
                                  </a>
                                </div>
                              </div>
                              <div className="flex justify-center w-1/5">
                                <button className="w-[1.5rem] items-center flex justify-center border-[2px] border-gray-400 hover:bg-gray-300">
                                  <svg
                                    className="fill-current text-gray-600 w-3"
                                    viewBox="0 0 448 512"
                                  >
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </button>

                                <input
                                  className="mx-2 border text-center w-8"
                                  type="text"
                                  value="1"
                                  disabled
                                />
                                <button className="w-[1.5rem] items-center flex justify-center border-[2px] border-gray-400 hover:bg-gray-300">
                                  <svg
                                    className="fill-current text-gray-600 w-3"
                                    viewBox="0 0 448 512"
                                  >
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </button>
                              </div>
                              <span className="text-center w-1/5 font-semibold text-sm">
                                ${items.price}
                              </span>
                              <span className="text-center w-1/5 font-semibold text-sm">
                                $400.00
                              </span>
                            </div>
                          );
                        })}

                        <button
                          onClick={onBtnBackToShop}
                          className="flex font-semibold text-indigo-600 text-sm mt-10"
                        >
                          <svg
                            className="fill-current mr-2 text-indigo-600 w-4"
                            viewBox="0 0 448 512"
                          >
                            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                          </svg>
                          Continue Shopping
                        </button>
                      </div>

                      <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">
                          Order Summary
                        </h1>
                        <div className="flex justify-between mt-10 mb-5">
                          <span className="font-semibold text-sm uppercase">
                            Items 3
                          </span>
                          <span className="font-semibold text-sm">590$</span>
                        </div>
                        <div className="border-t mt-8">
                          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                          </div>
                          <button className="bg-red-400 font-semibold hover:bg-teal-600 py-3 text-sm text-white uppercase w-full">
                            Proceed To Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
