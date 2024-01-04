import React from "react";
import TransactionChoices from "../Components/TransactionChoices";

function Deposit() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">

    <div className="flex-col flex items-center border-2 h-5/6 w-1/3 pt-6 rounded-xl">
    <span className="text-2xl mb-6">Where do you want to Deposit?</span>

    <TransactionChoices />

    </div>
    </div>
)  
}

export default Deposit;

//gamit ka uselocate to present a modal kung magkano iwwithdraw//