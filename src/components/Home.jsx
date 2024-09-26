import ExchangeRateTable from "./ExchangeRateTable";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center  h-screen bg-[#3d75c3]">
        <h1 className='text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl'>Currency Exchange Rates</h1>
        <h1>
          <ExchangeRateTable/> 
        </h1>
    </div>
  )
}

