import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import InputLabel from './InputLabel';
import TextInput from './TextInput';

const ModalForm = ({
    isOpen,
    onClose,
    fields,
    initialData,
    submitRoute,
    method = 'POST',
    id = null,
}) => {
    const { data, setData, post, put, reset } = useForm(initialData);

    useEffect(() => {
        setData(initialData);
    }, [initialData, setData]);

    const submit = (e) => {
        e.preventDefault();
        if (method === 'POST') {
            console.log('POST');

            post(route(submitRoute), {
                onFinish: () => {
                    reset();
                    onClose();
                },
            });
        } else if (method === 'PUT') {
            if (submitRoute === 'admin.product.update') {
                post(route(submitRoute, id), {
                    onFinish: () => {
                        reset();
                        onClose();
                    },
                });
                return;
            } else {
                put(route(submitRoute, id), {
                    onFinish: () => {
                        reset();
                        onClose();
                    },
                });
            }
        }
    };
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="relative max-h-full w-full max-w-md p-4">
                <div className="relative max-h-[80vh] overflow-y-auto rounded-lg bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b p-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                            {method === 'POST' ? 'Add Data' : 'Edit Data'}
                        </h3>
                        <button
                            onClick={onClose}
                            className="h-8 w-8 rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                        >
                            ✖
                        </button>
                    </div>
                    <div className="p-4">
                        <form
                            className="space-y-4"
                            onSubmit={submit}
                            encType="multipart/form-data"
                        >
                            {fields.map((field) => (
                                <div key={field.name}>
                                    <InputLabel
                                        htmlFor={field.name}
                                        value={field.label}
                                    />
                                    {field.type === 'file' ? (
                                        <input
                                            id={field.name}
                                            type="file"
                                            name={field.name}
                                            onChange={(e) =>
                                                setData(
                                                    field.name,
                                                    e.target.files[0],
                                                )
                                            } // Menyimpan file ke state
                                            className="block w-full rounded-md border border-gray-300 px-3 py-2"
                                        />
                                    ) : field.type === 'select' ? (
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            value={data[field.name] || ''}
                                            onChange={(e) =>
                                                setData(
                                                    field.name,
                                                    e.target.value,
                                                )
                                            }
                                            className="block w-full rounded-md border border-gray-300 px-3 py-2"
                                        >
                                            <option value="" disabled selected>
                                                {`Choose ${field.label}`}
                                            </option>

                                            {field.options?.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <TextInput
                                            id={field.name}
                                            type={field.type || 'text'}
                                            name={field.name}
                                            value={data[field.name] || ''}
                                            autoComplete={field.name}
                                            onChange={(e) =>
                                                setData(
                                                    field.name,
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    )}
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800"
                            >
                                {method === 'POST' ? 'ADD' : 'Update'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalForm;
