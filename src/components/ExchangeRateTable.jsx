import { useEffect, useState } from "react";
import { getExchangeRates } from "../api/getapi";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";



export default function ExchangeRateTable(){
    const [rates, setRates] = useState({});
    const [loading, setLoading] = useState(true);
    const currency = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];
    
    
    useEffect(() => {
        const fetchRates = async () => {
          const fetchedRates = await getExchangeRates();
          setRates(fetchedRates);
          setLoading(false);
        };
        fetchRates();
      }, []);

      const calculateBuyPrice = (rate) => (parseFloat(rate) * 1.02).toFixed(4);
      const calculateSellPrice = (rate) => (parseFloat(rate) * 0.98).toFixed(4);
    
      if (loading) {
        return (
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div>
        );
      }
    
    return(
        <table className="min-w-[50%] divide-y-2 divide-[#cfd2d1] bg-[#1d3a73] text-sm md:text-lg rounded-lg">
        <TableHeader />
        <tbody className="divide-y divide-[rgb(157,178,191)] text-center">{currency.map((index) => (
            <TableRow key={index}
            currency={index}
            buyRate={calculateBuyPrice(rates[index])}
            exchangeRate={parseFloat(rates[index]).toFixed(4)}
            sellRate={calculateSellPrice(rates[index])}/>       
            ))}
        </tbody>
        </table>

    )
}