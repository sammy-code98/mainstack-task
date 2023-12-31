import { MdCallReceived, MdOutlineArrowOutward } from "react-icons/md";

interface TransactionCardProps {
    product_name: string,
    name: string,
    amount: string,
    date: string,
    status: string,
    type: string,

}
export default function TransactionCard({ product_name, name, amount, date, status, type }: TransactionCardProps): JSX.Element {
    return (
        <div className='flex justify-between items-center rounded-sm p-4 mb-4 cursor-pointer'>
            <div className='flex justify-center items-center gap-6'>
                <div className={`rounded-full w-16 h-16 flex items-center justify-center ${type === 'deposit' ? 'bg-base_green text-primary_green' : 'bg-primary_red text-base_red'} `}>
                    {type === 'deposit' ? <MdCallReceived size="1.5rem" /> : <MdOutlineArrowOutward size="1.5rem" />}
                </div>
                <div>
                    <p className='text-base_gray text-base font-semibold'>{type === 'deposit' ? (<span>{product_name}</span>) : 'Cash withdrawal'} </p>
                    <p className='text-sm font-medium mt-2'>
                        {type === 'deposit' ?
                            (<span className="text-base_gray">{name}</span>) :
                            (<span className={`${status === 'successful' ? 'text-secondary_green' : 'text-base_yellow'}`}>{status}</span>)}
                    </p>
                </div>
            </div>
            <div>
                <p className='text-primary text-lg font-bold'>USD {amount}</p>
                <p className='text-base_gray text-sm'>{date}</p>
            </div>
        </div>
    )
}
