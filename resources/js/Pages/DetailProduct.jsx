import UserLayout from '@/Layouts/UserLayout';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const DetailProduct = () => {
    const { product, relatedProducts } = usePage().props;
    const [quantity] = useState(1);

    const handleAddToCart = () => {
        console.log(`Menambahkan ${quantity} produk ke cart`);
    };

    return (
        <UserLayout>
            <div className="container mx-auto bg-white px-4 py-2 md:py-4">
                <img
                    src={`/storage/${product.image}`}
                    alt={product.name}
                    className="h-56 w-full rounded-md object-cover md:h-96 lg:mx-auto lg:w-1/2"
                />
                <h1 className="pt-2 text-xl font-medium lg:text-center">
                    {product.name}
                </h1>
                <p className="pt-1 text-lg font-bold text-buttonPrimary lg:text-center">
                    Rp {new Intl.NumberFormat('id-ID').format(product.price)}
                </p>
            </div>
            <div className="container mx-auto mt-2 bg-white px-4 py-2">
                <h1 className="py-1 font-medium">Product Detail</h1>
                <table className="w-full table-auto text-left">
                    <tbody>
                        <tr>
                            <td className="w-1/2 py-1 font-medium">Category</td>
                            <td className="py-1 capitalize">
                                {product.category_id}
                            </td>
                        </tr>
                        <tr>
                            <td className="w-1/2 py-1 font-medium">Tipe</td>
                            <td className="py-1 capitalize">
                                {product.listing_type}
                            </td>
                        </tr>
                        <tr>
                            <td className="w-1/2 py-1 font-medium">Stock</td>
                            <td className="py-1 capitalize">{product.stock}</td>
                        </tr>
                    </tbody>
                </table>
                <hr className="my-1" />
                <p className="text-md mb-4 text-justify font-thin">
                    {product.description}
                </p>
            </div>

            {/* Counter dan Add to Cart */}
            <div className="container mx-auto mt-2 bg-white px-4 py-2">
                <button
                    onClick={handleAddToCart}
                    className="w-full rounded bg-buttonPrimary py-2 text-white hover:bg-buttonHoverPrimary"
                >
                    Add To Cart
                </button>
            </div>

            <div className="container mx-auto my-2 bg-white px-4 py-2">
                <h1 className="w-full py-2 text-center font-medium">
                    Related Products
                </h1>
                <div className="grid grid-cols-2 gap-4 py-3 sm:grid-cols-4">
                    {relatedProducts.map((item) => (
                        <div key={item.id} className="rounded-md p-2 shadow">
                            <Link href={route('product.detail', item.id)}>
                                <img
                                    src={`/storage/${item.image}`}
                                    alt={item.name}
                                    className="h-32 w-full rounded object-cover md:h-32 lg:h-52"
                                />
                                <p className="mt-1 text-sm font-medium">
                                    {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Rp{' '}
                                    {new Intl.NumberFormat('id-ID').format(
                                        item.price,
                                    )}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </UserLayout>
    );
};

export default DetailProduct;
