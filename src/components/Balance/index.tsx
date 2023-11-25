import React from 'react'
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

export default function Balance(): JSX.Element {
    const series: ApexOptions['series'] = [
        {
            name: "Available Balance",
            data: [10, 41, 35, 51, 49, 62],
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
            <div>cards</div>
        </div >
    )
}
