import * as React from "react";
import Header from "./header"

interface LayoutProps {
    children: any
}

const Layout: React.FC<LayoutProps> =
    ({ children }) => (
        <>
            <Header title={"something"} />
            <div>
                { children }
            </div>
        </>
    )

export default Layout