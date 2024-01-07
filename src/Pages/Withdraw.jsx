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
    if (Number(withdrawAmount) < balance) {
      setIsAmountEntered(true);
      alert (`$${withdrawAmount} is reserved for withdrawal`)
      
      // if (Number(withdrawAmount) === 0-9) {
      // alert("The minimum withdrawal amount is $10")
    }
    else {
      alert(`Withdrawal exceeds your balance of $${balance.toLocaleString()}`);
    }
    }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
    
    {isAmountEntered ? null : (
    <form
    onSubmit={handleModify}>
      <h1 className='text-5xl font-bold text-gray-800'>enter amount first</h1>
      <input type="number" 
      value={withdrawAmount} 
      onChange={handleInputChange}
      placeholder="Enter Withdrawal Amount"
      />
      <button type="submit">Submit</button>
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
