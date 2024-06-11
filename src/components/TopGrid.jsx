import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

const TopGrid = () => {
  return (
    <div className="flex gap-3 w-full">
      <BoxWrapper>
        <div className="h-10 w-10 rounded-full bg-sky-500 flex justify-center items-center">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="ml-4 ">
          <p className="mb-1 text-gray-500 text-sm font-light">Total Sales</p>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $54432
            </strong>
            <span className="text-green-500 text-sm ml-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="h-10 w-10 rounded-full bg-orange-500 flex justify-center items-center">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="ml-4 ">
          <p className="mb-1 text-gray-500 text-sm font-light">
            Total Expenses
          </p>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3452
            </strong>
            <span className="text-green-500 text-sm ml-2">-343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="h-10 w-10 rounded-full bg-yellow-500 flex justify-center items-center">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="ml-4 ">
          <p className="mb-1 text-gray-500 text-sm font-light">
            Total Customers
          </p>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              14632
            </strong>
            <span className="text-red-500 text-sm ml-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="h-10 w-10 rounded-full bg-green-500 flex justify-center items-center">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="ml-4 ">
          <p className="mb-1 text-gray-500 text-sm font-light">Total Orders</p>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              18792
            </strong>
            <span className="text-red-500 text-sm ml-2">-43</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-2 shadow-md border border-black/10 flex items-center flex-1">
      {children}
    </div>
  );
}
export default TopGrid;
