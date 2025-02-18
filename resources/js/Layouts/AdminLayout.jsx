import FooterAdmin from '@/Partials/FooterAdmin';
import NavbarAdmin from '@/Partials/NavbarAdmin';
import { SidebarAdmin } from '@/Partials/SidebarAdmin';

const AdminLayout = ({ children }) => {
    return (
        <>
            <NavbarAdmin />
            <div className="flex overflow-hidden bg-gray-50 pt-16">
                <SidebarAdmin />
                <div
                    id="main-content"
                    className="relative h-full w-full overflow-y-auto bg-gray-50 lg:ml-64"
                >
                    <main className="min-h-screen px-4 py-8">{children}</main>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
