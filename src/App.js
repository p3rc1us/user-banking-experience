import './App.css';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Deposit from './Pages/Deposit.jsx';
import Transfer from './Pages/Transfer.jsx';
import Withdraw from './Pages/Withdraw.jsx';
import Help from './Pages/Help.jsx';
import { MyContextProvider } from './Components/Context.jsx';



function App() {
  return (
    <MyContextProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/deposit' element={<Deposit/>} />
          <Route path='/transfer' element={<Transfer/>} />
          <Route path='/withdraw' element={<Withdraw/>} />
          <Route path='/help' element={<Help/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </MyContextProvider>
  );
}

export default App;
