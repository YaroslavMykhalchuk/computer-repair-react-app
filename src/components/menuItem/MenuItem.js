import React from "react";
import { Link, useMatch } from "react-router-dom";

export default function MenuItem({ to, children }) {
    const match = useMatch(to);

    return (
        <>
            <li>
                <Link 
                    to={to} 
                    className={match ? "active" : ""}>
                    {children}
                </Link>
            </li>
        </>
    );
}

// <header>
//     <div>

//     </div>
//     <nav>

//     </nav>
// </header>

// <main>

// </main>
// <footer></footer>