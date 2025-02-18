import ModalForm from '@/Components/ModalForm';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import swal from 'sweetalert';
const Category = ({ categories }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const { delete: destroy } = useForm();

    const { flash } = usePage().props;

    console.log(flash);

    const openAddModal = () => {
        setSelectedCategory(null); // Reset data agar modal digunakan untuk tambah
        setIsModalOpen(true);
    };

    const openEditModal = (guru) => {
        console.log('Editing:', guru);
        setSelectedCategory(guru); // Set data yang akan diedit
        setIsModalOpen(true);
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null); // Reset setelah modal ditutup
    };

    const handleDelete = (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            destroy(route('admin.category.destroy', id));
        }
    };

    useEffect(() => {
        if (flash.success || flash.error) {
            swal({
                title: flash.success ? 'Success' : 'Error',
                text: flash.success || flash.error,
                icon: flash.success ? 'success' : 'error',

                button: false,
                timer: 2000,
            });
        }
    }, [flash]);

    return (
        <AdminLayout>
            <h1 className="font-poppins text-2xl font-semibold">
                All Categories
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
                            value={searchTerm} // Ikat ke state
                            onChange={(e) => setSearchTerm(e.target.value)} // Update state
                        />
                    </div>
                </form>
                <button
                    onClick={openAddModal}
                    className="h-fit w-fit rounded-md bg-success px-3 py-2 font-medium text-white"
                >
                    Add Category
                </button>
            </div>

            <div className="relative mt-1 overflow-x-auto font-poppins shadow-md sm:rounded-lg">
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
                    <thead className="bg-gray-200 text-xs uppercase text-gray-700">
                        <tr>
                            <th scope="col" className="w-full px-6 py-3">
                                category name
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCategories.map((category) => (
                            <tr
                                key={category.id}
                                className="border-b border-gray-200 bg-white hover:bg-gray-50"
                            >
                                <td className="px-6 py-4">{category.name}</td>
                                <td className="flex gap-x-2 px-6 py-4 text-right">
                                    <button
                                        onClick={() => openEditModal(category)}
                                        className="flex items-center gap-2 rounded-md bg-buttonPrimary px-3 py-2 font-medium text-white hover:bg-buttonHoverPrimary"
                                    >
                                        <FaPen />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(category.id)
                                        }
                                        className="flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 font-medium text-white hover:bg-red-700"
                                    >
                                        <FaTrash />
                                        Delete
                                    </button>
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
                    selectedCategory
                        ? 'admin.category.update'
                        : 'admin.category.store'
                }
                method={selectedCategory ? 'PUT' : 'POST'}
                id={selectedCategory ? selectedCategory.id : null}
                initialData={
                    selectedCategory
                        ? { name: selectedCategory.name }
                        : {
                              name: '',
                          }
                }
                fields={[
                    {
                        name: 'name',
                        label: 'Category Name',
                        type: 'text',
                    },
                ]}
            />
        </AdminLayout>
    );
};

export default Category;
