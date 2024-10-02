import React from "react";
import {Header} from "../components/header";

const MainLayout = ({children}) => {
    return (
        <>
            <header>
            <Header />
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    )
}

export default MainLayout;