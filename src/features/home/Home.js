import img from '../../assets/images/img_550774.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './homeSlice';
export default function Home() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  console.log(product);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="bg-white  grid grid-cols-4 gap-[20px] mt-[106px] px-[20px] mb-3">
      {product?.data?.map((products, i) => {
        return (
          <div className="bg-white text-black border-2 border-b-2 border-gray-250  h-[346px]">
            <div className="w-full bg-white h-[65%] border-b-2  border-gray-250 flex justify-center">
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
  );
}
