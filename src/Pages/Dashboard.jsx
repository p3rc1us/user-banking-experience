import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from '../Components/Context';

function Dashboard() {

    const navigate = useNavigate();
    const { contextValue } = useContext(MyContext);


return(
    <div className="flex flex-col justify-center items-center mt-20">
    <h1 className="text-4xl font-extrabold text-blue-500">GO banking</h1>
    <fieldset className="grid mt-40 grid-cols-4 grid-rows-2 gap-3  bg-slate-50/95 rounded-xl  p-10">

        <div className="rounded-xl w-96 h-72 grid-rows-subgrid col-span-2 row-span-2 row-start-1 flex justify-center items-center flex-col shadow-lg hover:shadow-2xl bg-slate-50/90">
            <h1 className="text-6xl font-bold text-blue-500 mt-24">${contextValue.toLocaleString()}</h1>
            <span className="text-base font-semibold italic text-blue-500 mt-16 mr-52 hover:text-blue-700">4917 4845 8989 7107</span>
            <span className="text-base font-light italic text-blue-500 mt-0 mr-80 hover:text-blue-700">01/26</span>
        </div>

        <div className="rounded-xl flex justify-center items-center flex-col shadow-lg hover:shadow-2xl bg-slate-50/95">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-blue-500 mb-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
        </svg>

        <button 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={() => navigate('/deposit')}>Deposit</button>
        </div>

        <div className="rounded-xl flex justify-center items-center flex-col shadow-lg hover:shadow-2xl bg-slate-50/95">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-blue-500 mb-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate('/transfer')}>Transfer</button>
        </div>

        <div className="rounded-xl flex justify-center items-center flex-col shadow-lg  hover:shadow-2xl  bg-slate-50/95">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-blue-500 mb-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
        </svg>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate('/withdraw')}>withdraw</button>
        </div>

        <div className="rounded-xl flex justify-center items-center flex-col shadow-lg hover:shadow-2xl  bg-slate-50/95">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-blue-500 mb-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate('/help')}>help</button>
        </div>
    </fieldset>
    </div>
)
}

export default Dashboard;