import { Link, router } from '@inertiajs/react';
import { useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { BiSolidPurchaseTagAlt, BiSupport } from 'react-icons/bi';
import { BsCashStack } from 'react-icons/bs';
import { FaClipboardList, FaKey, FaTractor, FaUsersCog } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { IoLogOut } from 'react-icons/io5';
import { LuConstruction } from 'react-icons/lu';
import { MdCategory } from 'react-icons/md';
import { TbReport } from 'react-icons/tb';

export const SidebarAdmin = () => {
    const [isDropEquipment, setIsDropEquipment] = useState(false);
    const [isDropReport, setIsDropReport] = useState(false);

    const isDashboard = window.location.pathname === '/admin-dashboard';
    const isProduct = window.location.pathname === '/admin-product';
    const isCategory = window.location.pathname === '/admin-category';
    const isTransaction = window.location.pathname === '/admin-transaction';
    const isRentReport = window.location.pathname === '/admin-rentreport';
    const isSaleReport = window.location.pathname === '/admin-salereport';

    const isUser = window.location.pathname === '/admin-listuser';
    const isRule = window.location.pathname === '/admin-rule';
    const isChat = window.location.pathname === '/admin-chat';

    const toggleDropEquipment = () => {
        setIsDropEquipment(!isDropEquipment);
        console.log(isDropEquipment);
    };

    const toggleDropReport = () => {
        setIsDropReport(!isDropReport);
        console.log(isDropReport);
    };

    return (
        <>
            <aside
                id="sidebar"
                className="transition-width fixed left-0 top-0 z-20 flex h-full w-64 flex-shrink-0 flex-col pt-16 font-normal duration-75 lg:flex"
                aria-label="Sidebar"
            >
                <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0">
                    <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5 scrollbar-hide">
                        <div className="flex-1 space-y-1 divide-y divide-gray-200 bg-white px-3">
                            <ul className="space-y-2 pb-2">
                                <li>
                                    <form
                                        action="#"
                                        method="GET"
                                        className="lg:hidden"
                                    >
                                        <label
                                            htmlFor="mobile-search"
                                            className="sr-only"
                                        >
                                            Search
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <svg
                                                    className="h-5 w-5 text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                name="email"
                                                id="mobile-search"
                                                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900"
                                                placeholder="Search"
                                            />
                                        </div>
                                    </form>
                                </li>
                                <li>
                                    <Link
                                        href="/admin-dashboard"
                                        className={`flex items-center gap-3 rounded-md p-3 text-textPrimary hover:bg-gray-100 ${isDashboard ? 'bg-gray-100' : ''}`}
                                    >
                                        <AiFillDashboard className="text-xl" />
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={toggleDropEquipment}
                                        className="flex w-full items-center gap-3 rounded-md p-3 text-textPrimary hover:bg-gray-100"
                                    >
                                        <LuConstruction className="text-xl" />
                                        Equipment Catalog
                                        <IoIosArrowDown className="text-lg" />
                                    </button>
                                </li>
                                {isDropEquipment && (
                                    <>
                                        <li>
                                            <Link
                                                href="/admin-product"
                                                className={`flex items-center gap-3 rounded-md px-5 py-1 text-textPrimary hover:bg-gray-100 ${isProduct ? 'bg-gray-100' : ''}`}
                                            >
                                                <FaTractor className="text-xl" />
                                                Products
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/admin-category"
                                                className={`flex items-center gap-3 rounded-md px-5 py-1 text-textPrimary hover:bg-gray-100 ${isCategory ? 'bg-gray-100' : ''}`}
                                            >
                                                <MdCategory className="text-xl" />
                                                Category
                                            </Link>
                                        </li>
                                    </>
                                )}
                                <li>
                                    <Link
                                        href="/admin-transaction"
                                        className={`flex items-center gap-3 rounded-md p-3 text-textPrimary hover:bg-gray-100 ${isTransaction ? 'bg-gray-100' : ''}`}
                                    >
                                        <BsCashStack className="text-xl" />
                                        Transaction
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={toggleDropReport}
                                        className="flex w-full items-center gap-3 rounded-md p-3 text-textPrimary hover:bg-gray-100"
                                    >
                                        <TbReport className="text-xl" />
                                        Reports
                                        <IoIosArrowDown className="text-lg" />
                                    </button>
                                </li>
                                {isDropReport && (
                                    <>
                                        <li>
                                            <Link
                                                href="/admin-rentreport"
                                                className={`flex items-center gap-3 rounded-md px-5 py-1 text-textPrimary hover:bg-gray-100 ${isRentReport ? 'bg-gray-100' : ''}`}
                                            >
                                                <FaKey className="text-xl" />
                                                Rent Report
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/admin-salereport"
                                                className={`flex items-center gap-3 rounded-md px-5 py-1 text-textPrimary hover:bg-gray-100 ${isSaleReport ? 'bg-gray-100' : ''}`}
                                            >
                                                <BiSolidPurchaseTagAlt className="text-xl" />
                                                Sale Report
                                            </Link>
                                        </li>
                                    </>
                                )}
                                <li>
                                    <Link
                                        href="/admin-listuser"
                                        className={`flex items-center gap-3 rounded-md p-3 text-textPrimary hover:bg-gray-100 ${isUser ? 'bg-gray-100' : ''}`}
                                    >
                                        <FaUsersCog className="text-xl" />
                                        List User
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/admin-rule"
                                        className={`flex items-center gap-3 rounded-md p-3 text-textPrimary hover:bg-gray-100 ${isRule ? 'bg-gray-100' : ''}`}
                                    >
                                        <FaClipboardList className="text-xl" />
                                        Rules
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/admin-chat"
                                        className={`flex items-center gap-3 rounded-md p-3 text-textPrimary hover:bg-gray-100 ${isChat ? 'bg-gray-100' : ''}`}
                                    >
                                        <BiSupport className="text-xl" />
                                        Chats & Supports
                                    </Link>
                                </li>
                            </ul>
                            <div className="space-y-2 pt-2">
                                <button
                                    onClick={() => {
                                        router.post(route('logout'));
                                    }}
                                    className="flex w-full items-center gap-3 rounded-md p-3 text-textPrimary hover:bg-gray-100"
                                >
                                    <IoLogOut className="text-xl" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <div
                className="fixed inset-0 z-10 hidden bg-gray-900/50"
                id="sidebarBackdrop"
            ></div>
        </>
    );
};
