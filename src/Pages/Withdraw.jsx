import { useState } from "react";
import TransactionChoices from "../Components/TransactionChoices";
import { MyContext } from '../Components/Context';
import { useContext } from 'react';

function Withdraw() {

  const [ isAmountEntered, setIsAmountEntered ] = useState(false);
  const { contextValue } = useContext(MyContext);
  const balance = Number(contextValue)
  const [ withdrawAmount, setWithdrawAmount ] = useState('');


  const handleInputChange = (e) => {
    setWithdrawAmount(e.target.value);
  };

  const handleModify = (e)  => {
    e.preventDefault();

    if(Number(withdrawAmount) < 10) {
      alert(`Minimum withdrawal amount is $10`)
    }
    if (Number(withdrawAmount) < balance) {
      setIsAmountEntered(true);
      alert (`$${withdrawAmount} is reserved for withdrawal`)
    }
    else {
      alert(`Withdrawal exceeds your balance of $${balance.toLocaleString()}`);
    }
    }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
    
    {isAmountEntered ? null : (
    <form className="flex flex-col justify-center items-center"
    onSubmit={handleModify}>
      <h1 className='text-5xl font-bold text-gray-800'>How much do you want to Withdraw?</h1>
      <input
      className="mt-4"
      type="text" 
      value={withdrawAmount} 
      onChange={handleInputChange}
      placeholder="Enter Withdrawal Amount"
      />
      <button type="submit"></button>
    </form>
    )}

    {isAmountEntered ? (

    <div className="flex-col flex items-center border-2 h-5/6 w-1/3 pt-6 rounded-xl">
    <span className="text-2xl mb-6">Where do you want to cash-out?</span>
    <TransactionChoices />
    </div>
    ) : null }

  </div>
    
)  
}

export default Withdraw;
