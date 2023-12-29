import React from "react";
import { useState } from 'react';
import "../Styles/Dashboard.css"

function Dashboard() {

    const [Transfer, setTransfer] = useState('');
    const [Balance, setBalance] = useState(2000);


    function handleTransfer(e) {
        e.preventDefault();

        const transferValue = parseInt(Transfer);
        if (transferValue >= 0) {
            if (transferValue > Balance) {
                alert(`Insufficient funds! You only have $${Balance.toLocaleString()}.`);
                return;
        }

        setBalance(Balance - transferValue);
        setTransfer("");
        }
        
        else {
            alert("please input right amount to transfer")
            return;
        }
    }

return(
    <fieldset className="grid grid-cols-4 grid-rows-3 gap-3 mainContainer">
        <div className="rounded-xl w-96 h-72 grid-rows-subgrid col-span-2 row-span-2 row-start-1 flex-col balance">
            <h1 className="text-6xl font-bold">${Balance.toLocaleString()}</h1>
            <form onSubmit={handleTransfer}>
            <input
            type="number"
            value={Transfer}
            placeholder="$0.00"
            onChange={(event) => setTransfer(event.target.value)}
            />
            <button type="submit">Transfer</button>
            </form>
        </div>
        <div className="rounded-xl deposit">
            <h1>Deposit</h1>
        </div>
        <div className="rounded-xl sendMoney">
            <h1>sendMoney</h1>
        </div>
        <div className="rounded-xl withdraw">
            <h1>withdraw</h1>
        </div>
        <div className="rounded-xl help">
            <h1>help</h1>
        </div>
        <div className="grid-cols-subgrid col-span-4 col-start-1 expenses rounded-xl">
            <h1>expenses</h1>
        </div>
    </fieldset>
)
}

export default Dashboard;