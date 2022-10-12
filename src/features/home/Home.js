import { addToCart } from '../cart/CartSlice';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './homeSlice';
import { getAllCategories } from './categoriesSlice';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tooltipStatus, setTooltipStatus] = useState(0);
  const name = useSelector((state) => state.search.name);
  const { product } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.categories);
  const [type, setType] = useState('All');
  console.log(categories);
  console.log(product);
  const onDetailClick = (row) => {
    navigate('/products/' + row);
  };
  const onBtnAdd = (product) => {
    dispatch(addToCart(product));
    console.log(product);
  };
  useEffect(() => {
    dispatch(getAllProducts());
  }, [name]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [name]);
  return (
    <div>
      <div className="flex justify-center items-center h-auto gap-[5px] flex-wrap shadow-lg sm:flex justify-center sm:items-center sm:h-[30px] sm:gap-[5px] sm:shadow-lg  xl:w-[1329px] xl:min-w-[1329px] xl:h-[30px] xl:grid grid-cols-5  bg-white xl:shadow-lg xl:m-auto xl:mt-[5px] xl:px-[30px]">
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value="All"
            name="default-radio"
            defaultChecked="All"
            onChange={(event) => {
              setType(event.target.value);
            }}
            className="w-4 h-4 p-1 text-blue-600 bg-gray-100 "
          />
          <label
            for="default-radio-1"
            className="ml-2 text-[15px] font-bold text-gray-900 dark:text-black"
          >
            All
          </label>
        </div>
        {categories?.data?.map((category, i) => {
          return (
            <div className="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                value={category}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 "
                onChange={(event) => {
                  setType(event.target.value);
                }}
              />
              <label
                for="default-radio-1"
                className="ml-2 text-[15px] font-bold text-gray-900 dark:text-black"
              >
                {category.toUpperCase()}
              </label>
            </div>
          );
        })}
      </div>
      <div className="bg-white grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-[20px] m-auto mt-[25px] px-[20px] mb-3 w-[90%] h-[100%] cursor-pointer ">
        {product?.data
          ?.filter((product) => {
            if (type === 'All' && name === '') {
              return product;
            } else if (
              type === 'All' &&
              product.title.toLowerCase().includes(name)
            ) {
              return product;
            } else if (
              product.category.includes(type) &&
              product.title.toLowerCase().includes(name)
            ) {
              return product;
            }
          })
          ?.map((products, i) => {
            return (
              <div className="mt-auto bg-white text-black border-2 p-[15px] border-b-2 border-gray-350 h-[400px] rounded-md">
                <div className="w-full h-[65%] flex justify-center items-center ">
                  <img
                    src={products.image}
                    alt="clothes"
                    className="duration-300 object-fit h-[90%] hover:scale-x-110 hover:scale-y-110"
                    onClick={() => onDetailClick(products.id)}
                  />
                </div>
                <div className="p-[5px]">
                  <div className="flex-row p-[2px] relative">
                    <p
                      onClick={() => onDetailClick(products.id)}
                      className="font-bold text-md font-mono hover hover:text-teal-500 "
                      onMouseEnter={() => setTooltipStatus(products.title)}
                      onMouseLeave={() => setTooltipStatus(0)}
                    >
                      {tooltipStatus == products.title && (
                        <div
                          role="tooltip"
                          className="z-10 transition absolute duration-150 ease-in-out bottom-0 right-10 absolute shadow-lg bg-white p-4 rounded"
                        >
                          <p className="text-sm font-bold text-gray-800 pb-1">
                            {products.title}
                          </p>
                        </div>
                      )}{' '}
                      {products.title.length > 60
                        ? products.title.substring(0, 49) + '...'
                        : products.title}
                    </p>

                    <p className="font-bold font-mono">$ {products.price}</p>
                    <p className="text-[15px] text-gray-400 font-mono">
                      {products.category}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-row relative">
                      <button
                        onClick={() => onBtnAdd(products)}
                        className="bg-indigo-500 w-1/5 hover:bg-indigo-700 text-white rounded-lg flex justify-center absolute bottom-0 right-0  h-[36px] p-[5px] font-serif"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="w-[87%] justify-center m-auto  items-center">
        <div className="justify-between border-t border-gray-200 bg-white p-[15px] sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">10</span> of{' '}
                {/* <span className="font-medium">{product.data.length}</span>{' '} */}
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
