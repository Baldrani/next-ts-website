import * as React from "react";
import Header from "./header"
import Nav from "./nav";

interface LayoutProps {
    children: any
}

const Layout: React.FC<LayoutProps> =
    ({ children }) => (
        <>
            <Header title={"something"} />
            <Nav />
            <div>
                { children }
            </div>
        </>
    )

export default Layout