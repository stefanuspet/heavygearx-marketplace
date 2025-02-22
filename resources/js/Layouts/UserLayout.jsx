import FooterUser from '@/Partials/FooterUser';
import NavbarMain from '@/Partials/NavbarMain';

const UserLayout = ({ children }) => {
    return (
        <>
            <NavbarMain />
            <main className="min-h-lvh bg-gray-50 pt-20">{children}</main>
            <FooterUser />
        </>
    );
};

export default UserLayout;
