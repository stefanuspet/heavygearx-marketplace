import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword, message }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    console.log(message);

    return (
        <AuthLayout>
            <Head title="Login" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                Welcome To HeavyGearX
            </h2>
            <p className="lg:text-md text-sm font-normal">
                Login To this Platform
            </p>
            <form className="mt-8 space-y-6" onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full lg:mt-1"
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
                <div className="flex items-start">
                    <div className="w-full justify-between lg:flex">
                        <div className="text-sm">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                        </div>
                        <div className="pt-2 lg:pt-0">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <button
                    disabled={processing}
                    type="submit"
                    className="focus:ring-primary-300 rounded-lg bg-buttonPrimary px-3 py-2 text-center text-sm font-medium text-white hover:bg-buttonHoverPrimary focus:ring-4 sm:w-auto lg:px-5 lg:py-3 lg:text-base"
                >
                    Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500">
                    Not registered?
                    <Link
                        href={route('register')}
                        className="text-primary-700 pl-2 hover:underline"
                    >
                        Create account
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
