import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineFileDownload } from "react-icons/md";
import TransactionCard from './TransactionCard';
import FilterDrawer from "./FilterDrawer";
import { useQuery } from '@tanstack/react-query'
import { getTransactions } from "../../api/index.api";

export default function Transactions(): JSX.Element {
    const { data } = useQuery({ queryKey: ['transactions'], queryFn: getTransactions })

    const [openFilterDrawer, setOpenFilterDrawer] = useState<boolean>(false)

    const handleOpenFilterDrawer = () => {
        setOpenFilterDrawer(!openFilterDrawer)
    }
    return (
        <div className='mt-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-primary text-xl font-bold'>{data?.length} Transactions</h4>
                    <p className='text-base_gray'>Your transactions for the last 7 days</p>
                </div>
                <div className='flex gap-8'>
                    <button
                        className='flex justify-center items-center gap-2 text-base font-semibold bg-secondary text-primary rounded-full px-8 py-2 cursor-pointer'
                        onClick={handleOpenFilterDrawer}>Filter <MdKeyboardArrowDown />
                    </button>
                    <button className='flex justify-center items-center gap-2 text-base font-semibold bg-secondary text-primary rounded-full px-8 py-2 cursor-pointer'>Export list <MdOutlineFileDownload /> </button>

                </div>

            </div>
            <hr className='mt-6' />
            <div className='mt-8'>
                {data?.map((transact) => {
                    return <TransactionCard
                        product_name={transact.metadata?.product_name}
                        name={transact.metadata?.name}
                        amount={transact.amount}
                        date={transact.date}
                        status={transact.status}
                        type={transact.type} />
                })}

                {/* <TransactionCard /> */}
                {/* <TransactionCard /> */}
                {/* <TransactionCard /> */}

            </div>
            <div>
                {openFilterDrawer ? (<FilterDrawer clickHandler={() => handleOpenFilterDrawer()} isOpen={openFilterDrawer} />) : null}
            </div>
        </div>
    )
}
