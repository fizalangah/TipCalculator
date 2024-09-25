"use client"
import { useState,ChangeEvent } from "react"

export default function Tipcalculator() {
    const [billAmount, setBillAmount] = useState<number | null>(null);
    const [tipPercentage, setTipPercentage] = useState<number | null>(null);
    const [tipAmount, setTipAmount] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);



    const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setBillAmount(parseFloat(e.target.value));
      };
      
      const handleTipPercentageChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTipPercentage(parseFloat(e.target.value));
      };

      const calculateTip = (): void => {
        if (billAmount !== null && tipPercentage !== null) {
          const tip = billAmount * (tipPercentage / 100);
          setTipAmount(tip);
          setTotalAmount(billAmount + tip);
        }
      };
  return (
    <div className="flex justify-center items-center text-left">
        <div className="h-[500px] w-[400px] bg-white border-4 rounded-xl border-white  mt-[100px] shadow-xl ">
           <h1 className="mt-[30px] ml-[30px] font-bold ">Tip-Calculator</h1> 
           <p className="ml-[30px] text-sm mt[10px] font-serif">Enter the bill amount and tip percentage to calculate the tip and total.</p>
           <div className="ml-[30px] mt-[20px]  flex flex-col w-[350px] font-semibold">
           <label>Bill Amount</label>
           <input type="number"
           onChange={handleBillAmountChange}
            placeholder="Enter bill amount " className="rounded-xl p-2 outline-none" />
           </div>
           <div className="ml-[30px] mt-[20px]  flex flex-col w-[350px] font-semibold">
           <label>Tip Percentage</label>
           <input type="number"
           onChange={handleTipPercentageChange}
            placeholder="Enter Tip percentage " className="rounded-xl p-2 outline-none" />
           </div>
             <button onClick={calculateTip} className="bg-black p-3 rounded-xl ml-[30px] text-white mt-[30px]">calculate</button>
             <div className="ml-[30px] mt-[30px] flex flex-row gap-x-40 font-semibold">
             <h3>Tip Amount</h3> <p>{` $${tipAmount.toFixed(2)}`}</p>
             </div>
             <div className="ml-[20px] mt-[30px] flex flex-row gap-x-40 font-semibold">
             <h3>Total Amount:</h3> <p>{` $${totalAmount.toFixed(2)}`}</p>
             </div>
        </div> 
        
       

    </div>
  )
}
