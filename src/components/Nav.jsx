// src/components/Nav.js (Cart Icon Added with Item Count)
import React, { useContext } from "react";
import { dataContext } from "../context/UserProvider";

function Nav() {
    const { cart } = useContext(dataContext);

    return (
        <nav className="w-full p-5 bg-blue-500 text-white shadow-md flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide">🍔 Foodie Hub</h1>
            <ul className="flex gap-6 text-lg items-center">
                <li className="hover:text-yellow-300 transition-all cursor-pointer">🏠 Home</li>
                <li className="hover:text-yellow-300 transition-all cursor-pointer flex items-center gap-1">
                    🛒 Cart
                    <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">{cart.length}</span>
                </li>
                <li className="hover:text-yellow-300 transition-all cursor-pointer">⭐ Favorites</li>
            </ul>
        </nav>
    );
}

export default Nav;