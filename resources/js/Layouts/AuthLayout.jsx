const AuthLayout = ({ children }) => {
    return (
        <div className="pt:mt-0 bg-background mx-auto flex flex-col items-center justify-center px-6 pt-4 font-poppins md:h-screen">
            <a className="mb-4 flex items-center justify-center text-2xl font-semibold lg:mb-4">
                <img
                    src="/images/RectangleLogo.png"
                    className="w-20 lg:w-32"
                    alt="HeavyGearX Logo"
                />
            </a>
            <div className="w-full max-w-lg rounded-lg bg-primary p-6 shadow sm:p-8">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
