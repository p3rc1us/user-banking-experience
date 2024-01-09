import React from "react";

function Deposit() {
  return (
    <h1>Transfer at your nearest branch</h1>
)  
}

export default Deposit;

// import { useState } from "react";
// import TransactionChoices from "../Components/TransactionChoices";
// //1231231231//
// // import { MyContext } from '../Components/Context';
// // import { useContext } from 'react';
// //-------------//
// function Deposit() {

//   const [ isAmountEntered, setIsAmountEntered ] = useState(false)

//   //123123123123//
//   // const { contextValue, updateContextValue } = useContext(MyContext);
//   const [modifiedValue, setModifiedValue] = useState(0);


//   const handleInputChange = (e) => {
//     setModifiedValue(e.target.value);
//   };

//   const handleModify = (e)  => {
//     e.preventDefault();
//     if (Number(modifiedValue) < 5000) {
//       setIsAmountEntered(true);
//       alert (`$${modifiedValue} is reserved for withdrawal`)
//     } 
//     else {
//       alert("Deposit amount must be less than $5000");
//     }
//     }

//   //------------------------------//
    

//   return (
//   <div className="flex justify-center items-center h-screen w-screen">
    
//     {isAmountEntered ? null : (
//     <form
//     onSubmit={handleModify}>
//       <h1 className='text-5xl font-bold text-gray-800'>enter amount first</h1>
//       <input type="number" value={modifiedValue} onChange={handleInputChange} />
//       <button type="submit">Submit</button>
//     </form>
//     )}
