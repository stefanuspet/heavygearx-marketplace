import FooterUser from '@/Partials/FooterUser';
import NavbarMain from '@/Partials/NavbarMain';

const UserLayout = ({ children }) => {
    return (
        <>
            <NavbarMain />
            <main className="min-h-lvh bg-gray-100 pb-2 pt-16 lg:pt-20">
                {children}
            </main>
            <FooterUser />
        </>
    );
};

export default UserLayout;
