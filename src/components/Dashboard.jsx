import React from "react";
import TopGrid from "./TopGrid";
import TransactionChart from "./TransactionChart";
import BuyerChart from "./BuyerChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";

const Dashboard = () => {
  return (
    <div className="mx-3 mt-2 flex gap-4 flex-col ">
      <TopGrid />
      <div className="flex flex-row w-full gap-3">
        <TransactionChart />
        <BuyerChart />
      </div>
      <div className="flex flex-row w-full gap-3">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
