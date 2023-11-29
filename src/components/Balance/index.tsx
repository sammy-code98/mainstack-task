import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import BalanceCard from "./balanceCard";
import { options } from "../../utils/data";
import { useQuery } from '@tanstack/react-query'
import { getWallet, getTransactions } from "../../api/index.api";


export default function Balance(): JSX.Element {


    const { isLoading, data } = useQuery({ queryKey: ['wallet'], queryFn: getWallet })
    const { data: transdata, isLoading: loading } = useQuery({ queryKey: ['transactionsGraph'], queryFn: getTransactions })

    const chartData = transdata?.flatMap((tdata: { date: string; amount: string; }) => ({
        x: tdata.date,
        y: tdata.amount
    }))

    const series: ApexOptions["series"] = [
        {
            name: "Available Balance",
            data: chartData,
        },
    ];

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
                    {loading ?
                        <p className="text-center mt-4 text-primary text-sm">Loading Chart</p>
                        : <ReactApexChart options={options} series={series} type="line" height={350} />
                    }

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
