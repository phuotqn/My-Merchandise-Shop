import React from 'react';
import img from '../../assets/images/img_550774.png';
import { useParams } from 'react-router-dom';
import instance from '../../services/axiosClient';
import { useEffect, useState } from 'react';
export default function ProductInfo() {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    instance
      .get('products/' + productId)
      .then((response) => {
        setProductInfo(response.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="bg-white  grid grid-cols-2 w-[1329px] min-w-[1329px] m-auto  mt-[26px] px-[40px] mb-3">
      <div className="text-center border border-2 border-gray-500  ">
        <img src={productInfo.image} alt="clothes" />
      </div>
      <div className=" border border-2 border-gray-500">
        <div className="w-full p-[20px]">
          <h1 className="text-2xl font-bold">{productInfo.title}</h1>
          <div className="mt-[32px] flex">
            <div className="inline-block w-[50px] h-[50px] flex justify-center  border-r-[50px] border-r-green-400 border-y-[25px] border-y-transparent border-b-[25px] border-b-transparent">
              <p className="bg-white w-[10px]  translate-y-[-5px] translate-x-[35px] absolute h-[10px] rounded-full"></p>
            </div>
            <div className="inline-block items-center flex justify-center w-[136px] h-[50px] bg-green-400 border-r-[10px] rounded-r-lg border-r-green-400">
              <p className="font-bold text-white font-mono text-[20px]">
                ${productInfo.price}
              </p>
            </div>
          </div>
          <div className="mt-[24px]">
            <input
              type="text"
              value={productInfo.category}
              disabled
              className="mt-1 block w-[80%] px-3 py-2 bg-slate-200 border border-slate-500 rounded-md text-sm shadow-sm placeholder-slate-800
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-bold text-rose-700"
            ></input>
          </div>
          <div className="mt-[25px]">
            <p className="text-base text-slate-400 ">
              {productInfo.description}
            </p>
          </div>
          <div className="mt-[25px]">
            <button className="w-[207px] h-[50px] bg-rose-600  font-bold text-white rounded-[8px]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
