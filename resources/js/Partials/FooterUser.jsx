const FooterUser = () => {
    return (
        <footer className="bg-white py-12 xl:py-24">
            <div className="container mx-auto px-4 xl:px-0">
                <hr className="my-8 border-gray-200 lg:my-12" />

                <div className="grid gap-12 xl:grid-cols-6 xl:gap-24">
                    <div className="col-span-2">
                        <a href="" className="mr-4 flex">
                            <img
                                src="/images/SquareLogo.png"
                                className="mr-3 h-8"
                                alt="Flowbite Logo"
                            />
                        </a>
                        <p className="mt-4 max-w-lg text-gray-500">
                            Flowbite is a UI library of elements &amp;
                            components based on Tailwind CSS that can get you
                            started building websites faster and more
                            efficiently.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase text-gray-600">
                            Resources
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <a
                                    href="https://flowbite.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Flowbite
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://www.figma.com/community/file/1179442320711977498"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Figma
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://tailwindcss.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Tailwind CSS
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://flowbite.com/blog/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Blog
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://flowbite.com/blocks/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Blocks
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase text-gray-600">
                            Help and support
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <a
                                    href="https://github.com/themesberg/flowbite-admin-dashboard"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    GitHub Repository
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://github.com/themesberg/flowbite"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Flowbite Library
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase text-gray-600">
                            Follow us
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <a
                                    href="https://github.com/themesberg"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Github
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://twitter.com/zoltanszogyenyi"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://www.facebook.com/themesberg"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://linkedin.com/company/flowbite"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase text-gray-600">
                            Legal
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <a
                                    href="https://flowbite.com/privacy-policy/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://flowbite.com/terms-and-conditions/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    Terms &amp; Conditions
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="https://flowbite.com/license/"
                                    className="font-normal text-gray-600 hover:underline"
                                >
                                    EULA
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-8 border-gray-200 lg:my-12" />
                <span className="block text-center text-gray-600">
                    © 2025 heavygearx.com . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default FooterUser;
