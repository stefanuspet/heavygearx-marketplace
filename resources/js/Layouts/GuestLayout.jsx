import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="font-montserrat flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    {/* <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" /> */}
                    <img
                        src="images/RectangleLogo.png"
                        alt="logo"
                        srcSet="images/RectangleLogo.png"
                        className="w-36"
                    />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
