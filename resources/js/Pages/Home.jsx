import UserLayout from '@/Layouts/UserLayout';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';

const Home = ({ products }) => {
    const user = usePage().props.auth?.user;
    useEffect(() => {
        if (user) {
            if (user.role === 'admin') {
                window.location = '/admin-dashboard';
            }
            console.log(user);
        }
    }, [user]);

    console.log(products, 'products');

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
                <h1 className="text-3xl font-extrabold">All Product</h1>
                <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {products.data.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col rounded-lg bg-white p-4 shadow-md transition duration-200 hover:cursor-pointer hover:bg-slate-100"
                        >
                            <img
                                src={`/storage/${product.image}`}
                                alt={product.name}
                                className="h-32 w-full rounded-md object-cover"
                            />

                            <div className="mt-3 flex flex-col gap-2">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {product.name}
                                </h2>

                                <p className="line-clamp-2 text-sm text-gray-600">
                                    {product.description}
                                </p>

                                <p className="text-md font-semibold text-gray-800">
                                    Rp {product.price}
                                </p>

                                <div
                                    className={`w-fit rounded-md px-3 py-1 text-sm font-medium text-white ${
                                        product.listing_type === 'sale'
                                            ? 'bg-green-500'
                                            : 'bg-gray-500'
                                    }`}
                                >
                                    {product.listing_type}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col rounded-lg bg-buttonPrimary p-4 shadow-md transition duration-200 hover:cursor-pointer hover:bg-buttonHoverPrimary">
                        <h1 className="flex h-full w-full items-center text-center text-3xl font-bold text-white">
                            Show All Product
                        </h1>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="container mx-auto h-fit py-10">
                    <h1 className="text-3xl font-extrabold">
                        Rental Regulations
                    </h1>
                    <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"></div>
                </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
                <button className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg hover:bg-blue-700">
                    <span>Chat & Support</span>
                </button>
            </div>
        </UserLayout>
    );
};

export default Home;
