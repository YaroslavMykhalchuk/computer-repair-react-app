import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© Yaroslav Mykhalchuk 2024</p>
            </footer>
        </>
    )
}

export { Layout }