import { useState } from "react";
import TransactionChoices from "../Components/TransactionChoices";

//-------------//
function Deposit() {

  const [ isAmountEntered, setIsAmountEntered ] = useState(false);  
  const [ depositAmount, setDepositAmount ] = useState('');


  const handleInputChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleModify = (e)  => {
    e.preventDefault();
    if (Number(depositAmount) < 5000) {
      setIsAmountEntered(true);
    } 
    else {
      alert("Deposit amount must be less than $5000");
    }
    }

  //------------------------------//
    

  return (
  <div className="flex justify-center items-center h-screen w-screen">
    
    {isAmountEntered ? null : (
    <form
    onSubmit={handleModify}>
      
      <h1 className='text-5xl font-bold text-gray-800'>enter amount first</h1>
      <input type="number" 
      value={depositAmount} 
      onChange={handleInputChange}
      placeholder="Enter Deposit Amount"/>
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
