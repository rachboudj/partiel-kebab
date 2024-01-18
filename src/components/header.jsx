import React from 'react'
import { Link, BrowserRouter } from "react-router-dom";


export default function header() {
    return (
        <div>
            <header>
                <div className="logo">
                    Triple Kebab
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Recette</Link>
                        </li>
                        <li>
                            <Link to="/cuisine">Cuisine</Link>
                        </li>
                        <li>
                            <Link to="/creer">Créer</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
