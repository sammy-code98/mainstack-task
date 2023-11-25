import { MdInfoOutline } from "react-icons/md";

type BalanceCardProps = {
    title: string,
    amount: string,

}
export default function BalanceCard({ title, amount }: BalanceCardProps): JSX.Element {
    return (
        <div className='rounded-sm p-4 mb-4 cursor-pointer'>
            <div className='flex justify-between items-center'>
                <p className='text-lg text-base_gray font-medium'>{title}</p>
                <div className='text-base_gray'>
                    <MdInfoOutline size="1.5rem" />
                </div>
            </div>
            <h3 className='text_primary text-4xl font-bold mt-2'>{amount}</h3>
        </div>
    )
}
