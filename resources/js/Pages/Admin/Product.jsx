import ModalForm from '@/Components/ModalForm';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import swal from 'sweetalert';

const Product = ({ products, categories }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredproducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const { delete: destroy } = useForm();

    const { flash } = usePage().props;

    console.log(categories);

    const openAddModal = () => {
        setSelectedProduct(null); // Reset data agar modal digunakan untuk tambah
        setIsModalOpen(true);
    };

    const openEditModal = (product) => {
        console.log('Editing:', product);
        setSelectedProduct(product); // Set data yang akan diedit
        setIsModalOpen(true);
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null); // Reset setelah modal ditutup
    };

    const handleDelete = (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            destroy(route('admin.product.destroy', id));
        }
    };

    useEffect(() => {
        if (flash.success || flash.error) {
            swal({
                title: flash.success ? 'Success' : 'Error',
                text: flash.success || flash.error,
                icon: flash.success ? 'success' : 'error',

                button: false,
                timer: 1500,
            });
        }

        console.log(flash, 'flash');
    }, [flash]);

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
                            placeholder="Search Products..."
                            required
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </form>
                <button
                    onClick={openAddModal}
                    className="h-fit w-fit rounded-md bg-success px-3 py-2 font-medium text-white"
                >
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
                        {filteredproducts.map((product) => (
                            <tr
                                key={product.id}
                                className="border-b border-gray-200 bg-white hover:bg-gray-50"
                            >
                                <td className="px-6 py-4">
                                    <img
                                        src={`/storage/${product.image}`}
                                        alt="Product Image"
                                        className="h-20 w-20 object-cover"
                                    />
                                </td>
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

                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() =>
                                                openEditModal(product)
                                            }
                                            className="flex items-center gap-2 rounded-md bg-buttonPrimary px-3 py-2 font-medium text-white hover:bg-buttonHoverPrimary"
                                        >
                                            <FaPen />
                                            Edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(product.id)
                                            }
                                            className="flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 font-medium text-white hover:bg-red-700"
                                        >
                                            <FaTrash />
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ModalForm
                isOpen={isModalOpen}
                onClose={closeModal}
                submitRoute={
                    selectedProduct
                        ? 'admin.product.update'
                        : 'admin.product.store'
                }
                method={selectedProduct ? 'PUT' : 'POST'}
                id={selectedProduct ? selectedProduct.id : null}
                initialData={
                    selectedProduct
                        ? {
                              name: selectedProduct.name,
                              description: selectedProduct.description,
                              category_id: selectedProduct.category_id,
                              image: selectedProduct.image,
                              price: selectedProduct.price,
                              listing_type: selectedProduct.listing_type,
                              stock: selectedProduct.stock,
                              status: selectedProduct.status,
                          }
                        : {
                              name: '',
                              description: '',
                              category_id: '',
                              image: '',
                              price: '',
                              listing_type: '',
                              stock: '',
                              status: '',
                          }
                }
                fields={[
                    {
                        name: 'name',
                        label: 'Name',
                        type: 'text',
                    },
                    {
                        name: 'description',
                        label: 'Description',
                        type: 'text',
                    },
                    {
                        name: 'category_id',
                        label: 'Category',
                        type: 'select',
                        options: categories.map((category) => ({
                            value: category.id,
                            label: category.name,
                        })),
                    },
                    {
                        name: 'image',
                        label: 'Image',
                        type: 'file',
                    },
                    {
                        name: 'price',
                        label: 'Price',
                        type: 'text',
                    },
                    {
                        name: 'listing_type',
                        label: 'Listing Type',
                        type: 'select',
                        options: [
                            { value: 'sale', label: 'Sale' },
                            { value: 'rent', label: 'Rent' },
                        ],
                    },
                    {
                        name: 'stock',
                        label: 'Stock',
                        type: 'text',
                    },
                    {
                        name: 'status',
                        label: 'Status',
                        type: 'select',
                        options: [
                            { value: 'available', label: 'Available' },
                            { value: 'sold', label: 'Sold' },
                            { value: 'rented', label: 'Rented' },
                        ],
                    },
                ]}
            />
        </AdminLayout>
    );
};

export default Product;
