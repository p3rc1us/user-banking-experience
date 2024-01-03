import React from "react";
import "../Styles/Deposit.css";

function Deposit() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">

    <div className="flex-col flex items-center border-2 h-5/6 w-1/3 pt-6 rounded-xl">
    <span className="text-2xl mb-6">Where do you want to Deposit?</span>
      
      <div className="flex flex-col items-center w-full  overflow-y-auto overflow-x-hidden scrollbar-custom-style">

        <div className="flex flex-row items-center justify-center w-full border-t-2 border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-24" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/market_stand.png" alt="marketplace icon" />
          <span className="ml-12 mr-14">The MarketPlace</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full h-auto border-b-2 p-4  hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-14" src="https://d1nxzqpcg2bym0.cloudfront.net/google_play/com.praxxys.shopwise/2aaebb6c-fcc9-11e6-a0c7-53e9dfa7dec2/128x128" alt="shopwise icon" />
          <span className="ml-12 mr-2">ShopWise</span>
        </div>

        <div className=" flex flex-row items-center justify-center w-full border-b-2 p-4  hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-1/4" src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/f9bf5633f94c36efafaa" alt="rustan's icon" />
          <span className="mr-12">Rustan's</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-24" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/market_stand.png" alt="marketplace icon" />
          <span className="ml-12 mr-14">The MarketPlace</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-24" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/market_stand.png" alt="marketplace icon" />
          <span className="ml-12 mr-14">The MarketPlace</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-24" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/market_stand.png" alt="marketplace icon" />
          <span className="ml-12 mr-14">The MarketPlace</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-24" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/market_stand.png" alt="marketplace icon" />
          <span className="ml-12 mr-14">The MarketPlace</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-24" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/market_stand.png" alt="marketplace icon" />
          <span className="ml-12 mr-14">The MarketPlace</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-24" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/market_stand.png" alt="marketplace icon" />
          <span className="ml-12 mr-14">The MarketPlace</span>
        </div>
        
      </div>
    </div>
    </div>
)  
}

export default Deposit;

//gamit ka uselocate to present a modal kung magkano iwwithdraw//