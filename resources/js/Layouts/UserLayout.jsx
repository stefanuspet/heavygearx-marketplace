import FooterUser from '@/Partials/FooterUser';
import NavbarMain from '@/Partials/NavbarMain';

const UserLayout = ({ children }) => {
    return (
        <>
            <NavbarMain />
            <main className="min-h-lvh bg-gray-50">
                <div className="container mx-auto pt-24">{children}</div>
            </main>
            <FooterUser />
        </>
    );
};

export default UserLayout;
