import ModalForm from '@/Components/ModalForm';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoSearch } from 'react-icons/io5';
const Product = ({ products }) => {
    console.log(products);

    return (
        <AdminLayout>
            <h1 className="font-poppins text-2xl font-semibold">
                All Products
            </h1>
            <div className="flex items-center justify-between py-5">
                <form className="min-w-[28rem]">
                    <label
                        htmlFor="default-search"
                        className="sr-only mb-2 text-sm font-medium text-gray-900"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                            <IoSearch />
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <button
                            type="submit"
                            className="absolute inset-y-1 right-1 rounded-lg bg-buttonPrimary px-4 py-2 text-sm font-medium text-white hover:bg-buttonHoverPrimary focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Search
                        </button>
                    </div>
                </form>
                <button className="h-fit w-fit rounded-md bg-success px-3 py-2 font-medium text-white">
                    Add Product
                </button>
            </div>

            <div className="relative mt-1 overflow-x-auto font-poppins shadow-md sm:rounded-lg">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
                    <thead className="bg-gray-200 text-xs uppercase text-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stock
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr
                                key={product.id}
                                className="border-b border-gray-200 bg-white hover:bg-gray-50"
                            >
                                <th
                                    scope="row"
                                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                                >
                                    {product.image}
                                </th>
                                <td className="px-6 py-4">{product.name}</td>
                                <td className="px-6 py-4">
                                    {product.listing_type}
                                </td>
                                <td className="px-6 py-4">
                                    {product.category.name}
                                </td>
                                <td className="px-6 py-4">{product.stock}</td>
                                <td className="px-6 py-4">{product.status}</td>
                                <td className="px-6 py-4">{product.price}</td>
                                <td className="flex gap-x-2 px-6 py-4 text-right">
                                    <button
                                        href="#"
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        Detail
                                    </button>
                                    <button
                                        href="#"
                                        className="font-medium text-warning hover:underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        href="#"
                                        className="font-medium text-error hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ModalForm />
        </AdminLayout>
    );
};

export default Product;
