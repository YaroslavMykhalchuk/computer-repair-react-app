import React from "react";
import { Link } from "react-router-dom";

import Menu from "../menu/Menu";

function Header() {
    return (
        <header>
            <span>
                <Link to="/docs">Чисто в теорії тут може бути якась інфа</Link>
            </span>
            <Menu/>
        </header>
    );
}

export default Header;