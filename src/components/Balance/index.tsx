import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';
import BalanceCard from "./balanceCard";

export default function Balance(): JSX.Element {
    const series: ApexOptions['series'] = [
        {
            name: "Available Balance",
            data: [10, 41, 35, 25, 22, 32, 51, 55, 49, 62, 12]

        }
    ];
    const options: ApexOptions = {
        colors: ["#FF5403"],
        chart: {
            toolbar: {
                show: false
            },
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        grid: {
            show: false
        },
        legend: {
            show: false
        },
        yaxis: {
            show: false,
            labels: {
                show: false,
            },
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8' >
            <div className='col-span-2 p-6 shadow-sm'>
                <div className='flex items-center gap-32'>
                    <div>
                        <p className='text-base_gray font-medium text-base'>Available Balance</p>
                        <h3 className='text_primary text-4xl font-bold mt-2'>USD 120,500.00</h3>
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
                <BalanceCard title={"Ledger Balance"} amount={"USD 0.00"} />
                <BalanceCard title={"Total Payout"} amount={"USD 55,080.00"} />
                <BalanceCard title={"Total Revenue"} amount={"USD 175,580.00"} />
                <BalanceCard title={"Pending Payout"} amount={"USD 0.00"} />

            </div>
        </div >
    )
}
