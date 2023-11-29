import ReactApexChart from "react-apexcharts";
import BalanceCard from "./balanceCard";
import { options, series } from "../../utils/data";
import { useQuery } from '@tanstack/react-query'
import { getWallet } from "../../api/index.api";


export default function Balance(): JSX.Element {
    const { isLoading, data } = useQuery({ queryKey: ['wallet'], queryFn: getWallet })
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8' >
            <div className='col-span-2 p-6 shadow-sm'>
                <div className='flex items-center gap-32'>
                    <div>
                        <p className='text-base_gray font-medium text-base'>Available Balance</p>
                        <h3 className='text_primary text-4xl font-bold mt-2'>USD {isLoading ? '0.00' : data?.balance} </h3>
                    </div>
                    <button className='bg-primary px-12 py-4 rounded-full text-base_white font-semibold hover:opacity-50'>Withdraw</button>
                </div>
                <div className='mt-8'>
                    <ReactApexChart options={options} series={series} type="line" height={350} />
                    <div className='flex justify-between items-center'>
                        <p className='text-base_gray text-sm'>Apr 1 ,  2022</p>
                        <p className='text-base_gray text-sm'>Apr 30 ,  2022</p>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <BalanceCard title={"Ledger Balance"} amount={isLoading ? '0.00' : data?.ledger_balance} />
                <BalanceCard title={"Total Payout"} amount={isLoading ? '0.00' : data?.total_payout} />
                <BalanceCard title={"Total Revenue"} amount={isLoading ? '0.00' : data?.total_revenue} />
                <BalanceCard title={"Pending Payout"} amount={isLoading ? '0.00' : data?.pending_payout} />

            </div>
        </div >
    )
}
