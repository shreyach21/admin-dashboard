import React from "react";
import TopGrid from "./TopGrid";
import TransactionChart from "./TransactionChart";
import BuyerChart from "./BuyerChart";

const Dashboard = () => {
  return (
    <div className="mx-3 mt-2 flex gap-4 flex-col ">
      <TopGrid />
      <TransactionChart />
      <BuyerChart />
    </div>
  );
};

export default Dashboard;
