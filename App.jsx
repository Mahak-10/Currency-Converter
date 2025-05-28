 import { useState } from 'react';
import './App.css';
import InputBox from './Components/InputBox';
import useCurrencyInfo from './Hooks/useCurrencyInfo';

function App() {
  
 const [amount,setAmount]=useState()
 const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState()

 const currencyInfo=useCurrencyInfo(from)

 const options=Object.keys(currencyInfo)


  const swap = () => {
     setFrom(to)
     setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   }
  
   const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
   }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`,
        }}
    >
         <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                     onSubmit={(e) => {
                       e.preventDefault();
                       convert()
                       
                     }}
                >
                      <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div> 
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                             onClick={swap}
                        >
                            swap
                        </button>
                    </div> 
                     <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div> 
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}  
                    </button>
                </form>
            </div>
        </div> 
    </div>
  );
}

export default App
