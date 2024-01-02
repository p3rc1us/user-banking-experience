import React from "react";

function Deposit() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
    <fieldset className="flex-col flex items-center border-2 h-5/6 w-1/3 p-6 rounded-xl">
    <span className="text-2xl mb-6">Where do you want to Deposit?</span>
      <div className="flex flex-col">

        <div className="m-6 flex flex-row items-center border-2 border-red-400 w-fit h-full p-4">
          <img class="h-12 w-12" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/market_stand.png" alt="marketplace icon" />
          <span className="ml-5">The MarketPlace</span>
        </div>
        <div className="m-6">ShopWise</div>
        <div className="m-6">Rustans</div>
      </div>
    </fieldset>
    </div>
)  
}

export default Deposit;

//gamit ka uselocate to present a modal kung magkano iwwithdraw//