import React from "react";
import "../Styles/TransactionChoices.css";

function TransactionChoices() {
    return (
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
          <img class="h-12 w-12 ml-24" src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/2cd02b62765bef0cf1cdc1676e01228f" alt="marketplace icon" />
          <span className="ml-14 mr-1">Robinsons Supermarket</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-32" src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/8ec67611499e290a047b364948150014" alt="marketplace icon" />
          <span className="ml-14 mr-0">Robinsons Department Store</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-32" src="https://portal.gifted.ph/storage/images/medium/51ffd25c8ad38dd2d844064f5285901d.png" alt="marketplace icon" />
          <span className="ml-12 mr-14">Robinsons Easymart</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-28" src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/uv2aoqziaiajo7o1uwdu" alt="marketplace icon" />
          <span className="ml-14 mr-20">Southstar Drug</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-12" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISDxUSEhIVFRUVFRUQF
          xUYGBMVFRgWFRYXGBUSFhcYHSggGBolHRUVIjEhJSotLi8uFx8zODMsOCgtOisBCgoKDg0OGxAQGysmICU1MjUvLzUrLS0tLS0tLS0tLS0tLS0tLS0
          tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYBBwMECAL/xABHEAACAgECA
          wQGBAoIBQUAAAABAgADEQQSBQYhBxMxQSIyUWFxgRQjc5EVNDVSkqGxssHRFiQzQlRis8IXcnSi0iZDU4KT/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAE
          CAwQFBgf/xAAxEQACAgEDAQUIAQQDAAAAAAAAAQIDEQQhMRIFQVFhcRMUIoGhscHwkRUy0eEWIzP/2gAMAwEAAhEDEQA/ALrERPzg+mEREAREQBERA
          EREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA
          REQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQDMxMzBMgCJmJIMRMxAMREQB
          ERAERMwSYiIzBAiIgCIiAIiIAiJmAYiIgCJmYzJwBEziYjBGRERIJyZmneN9ouuq1V1SGraljoM19cKSB5zcQnm7mj8f1H21n7xnvdh012ympxT45P
          P105RSwzc/IPNP06g78C+vo6joCp9WwDyHiD7/jOzzzxi3SaF76cbwyAbhkYZsHImjuX+MWaTUpfWeqnqPJlPrIfcRNrdoPEa9RwQ3VHKO1TDwyPTG
          VPvB6Ga6js6NWsrnFfBJrK8Ctepc6ZLvSIDlvtC1uo1tNLmrY9gRsJg49xzNtZnnjkb8p6b7UTcHPHNi6CpcAPc+dik9APN29w6DHn8pHaujUrq66Y
          pNp+nzJ0t2K5Sm+C0RPPWu5r1979dRaST0VDsHwCpifOj5q19DejqLQQeof0/kQ+ZX/j9mP71n0H9QjnjY9DwZV+SOa119ZBUJcnroPAg+Dr7vdLRP
          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" alt="marketplace icon" />
          <span className="ml-14 mr-14">No Brand</span>
        </div>

        <div className="flex flex-row items-center justify-center w-full border-b-2 h-auto p-4 hover:bg-slate-50 hover:cursor-pointer">
          <img class="h-12 w-12 ml-40" src="https://media.licdn.com/dms/image/C560BAQEcKuTBukhZMQ/company-logo_200_200/0/1630571979345?e=2147483647&v=beta&t=3VfiOPy9l8qhsKAAf_ZS2rw6df5Xw9V2yajl2P0OWQY" alt="marketplace icon" />
          <span className="ml-14 mr-14">Robinsons Handyman Inc</span>
        </div>
        
      </div>
    )
}

export default TransactionChoices;