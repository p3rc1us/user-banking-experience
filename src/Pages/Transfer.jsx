import React from "react";
import { useState } from "react";
import { MyContext } from '../Components/Context';
import { useContext } from 'react';

function Deposit() {

  const [ isAmountEntered, setIsAmountEntered ] = useState(false)
  const { contextValue, updateContextValue } = useContext(MyContext);

  const [ modifiedValue, setModifiedValue ] = useState('');
  // const [ accountNumber, setAccountNumber ] = useState('');


  const handleInputChange = (e) => {
    setModifiedValue(e.target.value);
  };

  const handleModify = (e)  => {
    e.preventDefault();

    if((Number(modifiedValue) <= 0)){
      alert("Please enter a positive number");
      return;
    }
    if (Number(modifiedValue) < contextValue) {
      setIsAmountEntered(true);
      updateContextValue(contextValue - Number(modifiedValue));
      alert(`$${Number(modifiedValue)} has  been transferred`)
    } 
    else {
      alert("Transfer amount exceeds your balance");
      return;
    }
    }

  return (
  <div className="flex justify-center items-center h-screen w-screen">
    
    {isAmountEntered ? null : (
    <form
    onSubmit={handleModify}>
      <h1 className='text-5xl font-bold text-gray-800'>enter amount first</h1>
      <input 
      type="number" 
      value={modifiedValue} 
      onChange={handleInputChange}
      onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
      />
      <button type="submit">Submit</button>
    </form>
    )}
    </div>
  )
}
export default Deposit;

