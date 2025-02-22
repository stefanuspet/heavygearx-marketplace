import UserLayout from '@/Layouts/UserLayout';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';

const Home = () => {
    const user = usePage().props.auth?.user;
    useEffect(() => {
        if (user) {
            if (user.role === 'admin') {
                window.location = '/admin-dashboard';
            }
            console.log(user);
        }
    }, [user]);
    return (
        <UserLayout>
            <div className="relative h-svh w-full overflow-hidden bg-slate-600">
                <img src="images/landing.jpg" alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-semibold">
                            HeavyGearX - Your Trusted Heavy Equipment
                            Marketplace
                        </h1>
                        <p className="mx-auto mt-4 max-w-lg text-gray-300">
                            A reliable platform for buying and selling heavy
                            equipment for construction, mining, and industrial
                            needs.
                        </p>
                        <div className="flex justify-center gap-2 pt-20">
                            <button className="rounded-md bg-buttonPrimary px-3 py-2 font-medium hover:bg-buttonHoverPrimary">
                                Explore Categories
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto h-fit py-10">
                <h1 className="text-3xl font-extrabold">All Categories</h1>
                <div className="grid grid-cols-5 justify-items-center gap-y-10 py-10">
                    <div className="h-44 w-44 border"></div>
                    <div className="h-44 w-44 border"></div>
                    <div className="h-44 w-44 border"></div>
                    <div className="h-44 w-44 border"></div>
                    <div className="h-44 w-44 border"></div>
                    <div className="h-44 w-44 border"></div>
                </div>
            </div>
            <div className="container mx-auto h-fit py-10">
                <h1 className="text-3xl font-extrabold">All Categories</h1>
                <div className="grid grid-cols-5 justify-items-center gap-y-10 py-10">
                    <div className="h-44 w-44 border"></div>
                    <div className="h-44 w-44 border"></div>
                    <div className="h-44 w-44 border"></div>
                    <div className="h-44 w-44 border"></div>
                    <div className="h-44 w-44 border"></div>
                    <div className="h-44 w-44 border"></div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Home;
