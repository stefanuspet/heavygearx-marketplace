import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, useForm } from '@inertiajs/react';

const LoginAdmin = ({ status }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login.admin'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout>
            <Head title="Login" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <h2 className="text-2xl font-bold text-gray-900">
                Welcome To HeavyGearX
            </h2>
            <p className="text-md font-normal">Login To this Platform</p>
            <form className="mt-8 space-y-6" onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>
                <button
                    disabled={processing}
                    type="submit"
                    className="focus:ring-primary-300 rounded-lg bg-buttonPrimary px-5 py-3 text-center text-base font-medium text-white hover:bg-buttonHoverPrimary focus:ring-4 sm:w-auto lg:w-full"
                >
                    Login to your account
                </button>
            </form>
        </AuthLayout>
    );
};

export default LoginAdmin;
