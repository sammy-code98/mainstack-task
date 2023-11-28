import { useState } from "react";
import Logo from "../../assets/logo.svg"
import {
    MdOutlineHome,
    MdOutlineAnalytics,
    MdOutlinePayments,
    MdOutlinePeopleAlt,
    MdOutlineApps,
    MdNotificationsNone,
    MdOutlineChat,
    MdMenu
} from "react-icons/md";
import ProfileCard from "./ProfileCard";
import { useQuery } from '@tanstack/react-query'
import { getUser } from "../../api/index.api";


export default function Navigation(): JSX.Element {
    const { data } = useQuery({ queryKey: ['user'], queryFn: getUser })
    const firstLetter = data?.first_name.charAt(0)
    const secondLetter = data?.last_name.charAt(0)
    const [openModal, setOpenModal] = useState<boolean>(false)

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }
    return (
        <header className='sticky z-50 top-0 px-12 '>
            <nav className='bg-base_white px-4 py-4 border-2 border-base_white shadow-md rounded-full'>
                <div className='flex justify-between items-center  mx-6'>
                    <img src={Logo} alt='componay-logo' />
                    <div className='flex justify-between items-center'>
                        <a className='cursor-pointer py-2 px-6 flex items-center rounded-full bg-base_white text-base_gray hover:bg-primary hover:text-base_white'>
                            <p className='text-base font-semibold  flex items-center gap-1'><MdOutlineHome size="1.5rem" /> Home</p>
                        </a>

                        <a className='cursor-pointer py-2 px-6 flex items-center rounded-full bg-base_white text-base_gray hover:bg-primary hover:text-base_white'>
                            <p className='text-base font-semibold  flex items-center gap-1'><MdOutlineAnalytics size="1.5rem" /> Analytics</p>
                        </a>

                        <a className='cursor-pointer py-2 px-6 flex items-center rounded-full bg-base_white text-base_gray hover:bg-primary hover:text-base_white'>
                            <p className='text-base font-semibold  flex items-center gap-1'><MdOutlinePayments size="1.5rem" /> Revenue</p>
                        </a>
                        <a className='cursor-pointer py-2 px-6 flex items-center rounded-full bg-base_white text-base_gray hover:bg-primary hover:text-base_white'>
                            <p className='text-base font-semibold  flex items-center gap-1'><MdOutlinePeopleAlt size="1.5rem" /> CRM</p>
                        </a>
                        <a className='cursor-pointer py-2 px-6 flex items-center rounded-full bg-base_white text-base_gray hover:bg-primary hover:text-base_white'>
                            <p className='text-base font-semibold  flex items-center gap-1'><MdOutlineApps size="1.5rem" /> Apps</p>
                        </a>

                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='cursor-pointer text-base_gray'>
                            <MdNotificationsNone size="1.5rem" />
                        </div>
                        <div className='cursor-pointer text-base_gray'>
                            <MdOutlineChat size="1.5rem" />
                        </div>
                        <div className='flex justify-between gap-4 items-center bg-secondary rounded-full py-1 px-2 w-3/4 text-base_gray cursor-pointer'
                            onClick={handleOpenModal}>
                            <div className='rounded-full w-11 h-11 flex items-center justify-center  bg-primary text-base_white  font-semibold'>
                                {firstLetter}{secondLetter}
                            </div>
                            <MdMenu size='1.5rem' />

                        </div>
                    </div>
                </div>
            </nav>
            <div>
                {openModal ? (
                    <div className="flex justify-end items-center">
                        <ProfileCard />

                    </div>
                ) : null}
            </div>

        </header>
    )
}
