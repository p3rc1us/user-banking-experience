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
    <fieldset className="mainContainer">
    <h1 className="text-6xl font-bold ">${Balance.toLocaleString()}</h1>
    <form onSubmit={handleTransfer}>
    <input
          type="number"
          value={Transfer}
          placeholder="$0.00"
          onChange={(event) => setTransfer(event.target.value)}
    />
    <button type="submit">Transfer</button>
    </form>
    </fieldset>
)
}

export default Dashboard;