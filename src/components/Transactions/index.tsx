import { MdKeyboardArrowDown, MdOutlineFileDownload } from "react-icons/md";
import TransactionCard from './TransactionCard';
export default function Transactions(): JSX.Element {
    return (
        <div className='mt-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-primary text-xl font-bold'>24 Transactions</h4>
                    <p className='text-base_gray'>Your transactions for the last 7 days</p>
                </div>
                <div className='flex gap-8'>
                    <button className='flex  justify-center items-center gap-2 text-base font-semibold bg-secondary text-primary rounded-full px-8 py-2'>Filter <MdKeyboardArrowDown /> </button>
                    <button className='flex  justify-center items-center gap-2 text-base font-semibold bg-secondary text-primary rounded-full px-8 py-2'>Export list <MdOutlineFileDownload /> </button>

                </div>

            </div>
            <hr className='mt-6' />
            <div className='mt-8'>
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />

            </div>
        </div>
    )
}