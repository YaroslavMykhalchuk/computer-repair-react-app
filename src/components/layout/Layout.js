import { Outlet } from "react-router-dom";
import Header from "../header/Header";

import './Layout.scss'

const Layout = () => {
    return (
        <div className="layout-container">
            <Header/>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© Yaroslav Mykhalchuk 2024</p>
            </footer>
        </div>
    )
}

export { Layout }