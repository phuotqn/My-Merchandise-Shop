/* This example requires Tailwind CSS v2.0+ */

import { Popover } from '@headlessui/react';
import clothes from '../assets/images/img_550774.png';
export default function Header() {
  return (
    <Popover className="bg-white w-full fixed top-0">
      <div className="md:container md:mx-auto py-0">
        <div className="flex items-center border-b-2 border-gray-250 py-6">
          <div className="flex justify-start mx-1 lg:w-0 lg:flex-1">
            <a href="#">
              {/* <span className="sr-only">Your Shop</span> */}
              <img
                className="h-10 w-[50px] mx-3 sm:h-10 "
                src={clothes}
                alt=""
              />
            </a>
          </div>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
}
