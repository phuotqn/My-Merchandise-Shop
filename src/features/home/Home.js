import img from '../../assets/images/img_550774.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './homeSlice';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.product);
  const onDetailClick = (row) => {
    console.log(row);
    navigate('/' + row);
  };
  console.log(product);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="bg-white  grid grid-cols-4 gap-[20px] m-auto mt-[25px] px-[20px] mb-3 w-[90%] h-[100%] cursor-pointer ">
      {product?.data?.map((products, i) => {
        return (
          <div
            className=" mt-auto bg-white text-black border-2 border-b-2 border-gray-350  h-[346px] rounded-md    "
            onClick={() => onDetailClick(products.id)}
          >
            <div className="w-full bg-white h-[65%] border-b-2  border-gray-250 flex justify-center duration-300 hover:scale-110 shadow hover:shadow-black rounded-md">
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
