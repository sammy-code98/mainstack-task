import {
    MdOutlineSettings,
    MdOutlineHistoryEdu,
    MdCardGiftcard,
    MdOutlineGridView,
    MdOutlineBugReport,
    MdSwitchAccount,
    MdOutlineLogout
} from "react-icons/md";
import { useQuery } from '@tanstack/react-query'
import { getUser } from "../../api/index.api";



const profileItems = [
    { icon: <MdOutlineSettings size='1.5rem' />, title: "Settings" },
    { icon: <MdOutlineHistoryEdu size='1.5rem' />, title: "Purchase History" },
    { icon: <MdCardGiftcard size='1.5rem' />, title: "Refer and Earn" },
    { icon: <MdOutlineGridView size='1.5rem' />, title: "Integrations" },
    { icon: <MdOutlineBugReport size='1.5rem' />, title: "Report Bug" },
    { icon: <MdSwitchAccount size='1.5rem' />, title: "Switch Account" },
    { icon: <MdOutlineLogout size='1.5rem' />, title: "Sign Out" },
]
export default function ProfileCard() {
    const { data } = useQuery({ queryKey: ['user'], queryFn: getUser })
    const firstLetter = data?.first_name.charAt(0)
    const secondLetter = data?.last_name.charAt(0)
    return (
        <div className='bg-base_white rounded-3xl shadow-md px-4 py-6 mt-24 w-1/4 absolute top-0 '>
            <div className='flex  gap-4'>
                <div>
                    <div className='rounded-full w-14 h-14 flex items-center justify-center  bg-primary text-base_white  font-semibold'>
                        {firstLetter}{secondLetter}
                    </div>
                </div>
                <div>
                    <h4 className='text-primary font-semibold text-lg'>{data?.first_name}  {data?.last_name}</h4>
                    <p className='text-base_gray text-base'>{data?.email}</p>
                </div>
            </div>
            <div className='mt-6'>
                {profileItems.map((items) => {
                    return <div className='flex items-center gap-4 py-4 cursor-pointer' key={items.title}>
                        <span className='text-base_gray'>
                            {items.icon}
                        </span>
                        <p className='text-primary font-medium text-base'>{items.title}</p>
                    </div>
                })}

            </div>
        </div>
    )
}
