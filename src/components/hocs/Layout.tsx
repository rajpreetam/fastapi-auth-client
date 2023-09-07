import {ReactNode} from "react";
import Navbar from "@/components/Navbar";

export interface LayoutProps {
    children: ReactNode;
    includeNav?: boolean;
}

const Layout = ({children, includeNav = true}: LayoutProps) => {
    return (
        <div>
            {includeNav && <Navbar />}
            {children}
        </div>
    );
}

export default Layout;
