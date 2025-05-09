import { Link, router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const NavbarMain = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [menubtn, setmenubtn] = useState(true);

    const user = usePage().props.auth.user;

    const handlemenu = () => {
        setmenubtn(!menubtn);
    };

    useEffect(() => {
        if (user) {
            setIsLogin(true);
        }
    }, [user]);

    return (
        <nav className="fixed z-50 w-full border-b border-gray-200 bg-white sm:py-2">
            <div className="container mx-auto px-2 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center">
                        <a href="" className="mr-4 flex">
                            <img
                                src="/images/SquareLogo.png"
                                className="mr-3 h-8"
                                alt="Logo"
                            />
                        </a>
                        <div className="hidden sm:ml-6 lg:flex">
                            <ul className="flex space-x-8">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary-700 text-sm font-medium text-gray-700"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary-700 text-sm font-medium text-gray-700"
                                        aria-current="page"
                                    >
                                        Team
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary-700 text-sm font-medium text-gray-700"
                                        aria-current="page"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary-700 text-sm font-medium text-gray-700"
                                        aria-current="page"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="hidden lg:block">
                            {isLogin ? (
                                <button
                                    onClick={() => {
                                        router.post(route('logout'));
                                    }}
                                    className="inline-flex w-full items-center px-3 py-2 text-base font-normal text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                                >
                                    <svg
                                        className="mr-2 h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                    </svg>
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    href={route('login')}
                                    className="inline-flex w-full items-center px-3 py-2 text-base font-normal text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                                >
                                    <svg
                                        className="mr-2 h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                    </svg>
                                    Login / Register
                                </Link>
                            )}
                        </div>
                        <div className="lg:hidden">
                            <button
                                onClick={handlemenu}
                                className="focus:ring-primary-300 ml-3 inline-flex items-center justify-center rounded-lg px-2 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2"
                                aria-controls="mobile-menu"
                                aria-expanded={!menubtn}
                            >
                                <span className="sr-only">Open main menu</span>
                                {menubtn ? (
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={menubtn ? `hidden` : `block`}>
                <ul className="pt-2">
                    <li>
                        <a
                            href="#"
                            className="block bg-gray-100 py-2 pl-3 pr-4 text-base font-normal text-gray-900"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block border-b border-gray-100 px-3 py-2 text-base font-normal text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                        >
                            Team
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block border-b border-gray-100 px-3 py-2 text-base font-normal text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block border-b border-gray-100 px-3 py-2 text-base font-normal text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                        >
                            Calendar
                        </a>
                    </li>
                    <li className="block">
                        {isLogin ? (
                            <button
                                onClick={() => {
                                    router.post(route('logout'));
                                }}
                                className="inline-flex w-full items-center px-3 py-2 text-base font-normal text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                            >
                                <svg
                                    className="mr-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                </svg>
                                Logout
                            </button>
                        ) : (
                            <Link
                                href={route('login')}
                                className="inline-flex w-full items-center px-3 py-2 text-base font-normal text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                            >
                                <svg
                                    className="mr-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                </svg>
                                Login / Register
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarMain;
