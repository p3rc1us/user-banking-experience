import { useState } from "react";
import TransactionChoices from "../Components/TransactionChoices";

function Deposit() {

  const [ isAmountEntered, setIsAmountEntered ] = useState(false)
  
  const handleFormSubmit = (e)  => {
    e.preventDefault();
    setIsAmountEntered(true);
  }

  return (
  <div className="flex justify-center items-center h-screen w-screen">
    
    {isAmountEntered ? null : (
    <form
    onSubmit={handleFormSubmit}>
      <h1 className='text-5xl font-bold text-gray-800'>enter amount first</h1>
      <input
      type="number"
      placeholder="Enter Amount"
      >
      </input>
      <button type="submit">Submit</button>
    </form>
    )}

    {isAmountEntered ? (

    <div className="flex-col flex items-center border-2 h-5/6 w-1/3 pt-6 rounded-xl">
    <span className="text-2xl mb-6">Where do you want to Deposit?</span>
    <TransactionChoices />
    </div>
    ) : null }

  </div>
  )  
}

export default Deposit;

//gamit ka uselocate to present a modal kung magkano iwwithdraw//
