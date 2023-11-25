import { MdCallReceived } from "react-icons/md";

export default function TransactionCard() {
    return (
        <div className='flex justify-between items-center rounded-sm p-4 mb-4 cursor-pointer'>
            <div className='flex justify-center items-center gap-6'>
                <div className='rounded-full w-16 h-16 flex items-center justify-center bg-base_green text-primary_green'>
                    <MdCallReceived size="1.5rem" />
                </div>
                <div>
                    <p className='text-base_gray text-base font-semibold'>Psychology of Money </p>
                    <p className='text-base_gray text-sm font-medium mt-2'>Roy Cash</p>
                </div>
            </div>
            <div>
                <p className='text-primary text-lg font-bold'>USD 600</p>
                <p className='text-base_gray text-sm'>Apr 03,2022</p>
            </div>
        </div>
    )
}
