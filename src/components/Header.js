/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { googleProvider, auth } from '../services/firebase';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/icon.jpg';
import { setName } from './headerSlice';
import { setUser } from '../features/Login/LoginSlice';
import { useState } from 'react';
// Import Modal Login
import ModalLogin from '../features/Login/ModalLogin';
import { useNavigate } from 'react-router-dom';
// Import Modal Cart
import Cart from '../features/cart/Cart';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.user);
  const name = useSelector((state) => state.search.name);
  console.log(name);
  console.log(user);
  const dispatch = useDispatch();
  const onInputChage = (e) => {
    dispatch(setName(e.target.value.toLowerCase()));
    console.log(e.target.value);
  };
  //Login with Google

  // Open Modal
  const [openModalLogIn, setOpenModalLogIn] = useState(false);
  const onBtnLogin = () => {
    setOpenModalLogIn(true);
  };
  // Open Cart
  const [openCart, setOpenCart] = useState(false);
  const onBtnOpenCart = () => {
    setOpenCart(true);
  };
  // Logout Google
  const logOutGoogle = () => {
    auth
      .signOut()
      .then((result) => {
        dispatch(setUser(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white w-auto items-center flex justify-center xl:bg-white xl:w-[1329px] xl:min-w-[1329px] mb-0 m-auto">
      <div className="container mx-auto py-0">
        <div className="flex justify-center items-center border-b-2 border-gray-250 py-6">
          <div className="flex justify-start mx-1 lg:flex-1">
            <button
              onClick={() => {
                navigate('/');
              }}
            >
              <img
                className="w-[50%] p-[2px] object-contain rounded-xl lg:w-[50%] xs:w-[100px] md:w-[100px] sm:w-[100px] "
                src={logo}
                alt=""
              />
            </button>
          </div>
          <div className="justify-center items-center w-[40%] xs:w[50%] md:items-center md:w-[60%] xl:items-center xl:[900px] ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative object-fit">
              <div className="flex inset-y-0 left-0 items-center pl-3 pointer-events-none md:flex absolute md:inset-y-0 md:left-0 md:items-center md:pl-3 md:pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-indigo-500 indigo:text-indigo-400 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 font-bold text-[15px] w-full text-sm text-gray-900 bg-white-50 rounded-lg border  focus:ring-blue-500  white:bg-gray-700 border-indigo-600 placeholder-gray-400 text-black "
                placeholder="Search..."
                onChange={onInputChage}
              ></input>
            </div>
          </div>
          <div className="items-center justify-center flex flex-1 w-0 md:flex py-[5px] md:flex-1 lg:w-0 mr-[5px]">
            <button
              onClick={onBtnOpenCart}
              className="whitespace-nowrap hover:text-gray-900 relative"
            >
              <span className="absolute translate-x-[1px] translate-y-[-10px] py-[-3px] px-[6px] rounded-[30%] bg-red-600 text-white font-bold">
                {!cart.cartTotalItems ? null : cart.cartTotalItems}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[35px] h-[35px] stroke-indigo-600 fill-indigo-400 hover:stroke-indigo-500 active:rounded-[40%] focus:outline-offset-2 focus:ring focus:ring-indigo-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
            <div className="px-4 py-2">
              {user ? (
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                      <img
                        className="w-[30px] min-w-[30px] rounded-full"
                        src={user.user.photoURL}
                        alt="Rounded avatar"
                      />
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <p
                              href="#"
                              className="block px-4 py-2 text-sm font-bold"
                            >
                              {user.user.displayName}
                            </p>
                          )}
                        </Menu.Item>

                        <form>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-red-700 text-[20px] font-bold'
                                    : 'text-red-500 text-[20px] font-bold',
                                  'block w-full px-4 py-2 text-center text-sm'
                                )}
                                onClick={logOutGoogle}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <button
                  onClick={onBtnLogin}
                  className="ml-[15px] inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-800"
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalLogin
        openModalLogIn={openModalLogIn}
        setOpenModalLogIn={setOpenModalLogIn}
      />
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
    </div>
  );
}
