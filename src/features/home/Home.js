import img from '../../assets/images/img_550774.png';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './homeSlice';
import { getAllCategories } from './categoriesSlice';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.search.name);
  const { product } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.categories);
  const [type, setType] = useState('All');
  console.log(categories);
  console.log(product);
  const onDetailClick = (row) => {
    navigate('/products/' + row);
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
      <div className="bg-white xl:grid grid-cols-4 gap-[20px] m-auto mt-[25px] px-[20px] mb-3 w-[90%] h-[100%] cursor-pointer ">
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
              <div
                className="mt-auto bg-white text-black border-2 py-0 p-[15px] border-b-2 border-gray-350 h-[346px] rounded-md "
                onClick={() => onDetailClick(products.id)}
              >
                <div className="w-full bg-white h-[65%]  border-b-2  border-gray-250 flex justify-center duration-300 hover:scale-x-110 hover:scale-y-110 shadow hover:shadow-black rounded-md">
                  <img src={products.image} alt="clothes" />
                </div>
                <div className="h-[30%]">
                  <h1 className="font-bold font-mono">{products.title}</h1>
                  <h1 className="font-roboto font-bold ">$ {products.price}</h1>
                  <h1 className="font-roboto text-gray-400  text-[13px]">
                    {products.category}
                  </h1>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
