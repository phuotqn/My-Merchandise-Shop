/* This example requires Tailwind CSS v2.0+ */

import { Popover } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import clothes from '../assets/images/img_550774.png';
import { setName } from './headerSlice';
export default function Header() {
  const name = useSelector((state) => state.search.name);
  console.log(name);
  const dispatch = useDispatch();
  const onInputChage = (e) => {
    dispatch(setName(e.target.value));
    console.log(e.target.value);
  };
  return (
    <div className="bg-white w-[1329px] min-w-[1329px] mt-0 mb-0 m-auto flex justify-center items-center">
      <div className="md:container md:mx-auto py-0">
        <div className="flex items-center border-b-2 border-gray-250 py-6">
          <div className="flex justify-start mx-1 lg:w-0 lg:flex-1">
            <a href="/">
              <img
                className="h-10 w-[50px] mx-3 sm:h-10 "
                src={clothes}
                alt=""
              />
            </a>
          </div>
          <div className="items-center w-[900px]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black  "
                placeholder="Search..."
                required
                onChange={onInputChage}
              ></input>
            </div>
          </div>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 mr-[5px]">
            <button className="whitespace-nowrap    hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[35px] h-[35px] stroke-indigo-700 fill-indigo-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-black"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
