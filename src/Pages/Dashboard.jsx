import React from "react";
import { useState } from 'react';

function Dashboard() {

    const [Deposit, setDeposit] = useState('');
    const [Balance, setBalance] = useState(2000);


    function handleDeposit(e) {
        e.preventDefault();

        const depositValue = parseInt(Deposit);
        if (depositValue >= 0) {
        setBalance(Balance + depositValue);
        setDeposit("");
        }
        else {
            alert("please input right amount to deposit")
            return;
        }
    }

return(
    <div className="m-10 border-2 border-solid border-red-500">
    <h1 className="text-6xl font-bold ">{Balance}</h1>
    <form onSubmit={handleDeposit}>
    <input
          type="number"
          value={Deposit}
          placeholder="$0.00"
          onChange={(event) => setDeposit(event.target.value)}
    />
    <button type="submit">submit</button>
    </form>
    </div>
)
}

export default Dashboard;