// src/components/Card.js (Enhanced UI)
import React from "react";

function Card({ name, image, price, id, type, addToCart, toggleFavorite, isFavorite }) {
    return (
        <div className="w-[250px] p-4 bg-white shadow-xl rounded-2xl flex flex-col items-center gap-3 transition transform hover:scale-105 hover:shadow-2xl">
            <img src={image} alt={name} className="w-[220px] h-[160px] object-cover rounded-xl" />
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600 font-medium">Price: <span className="text-blue-600 font-bold">₹{price}</span></p>
            <p className={`text-sm font-bold ${type === "veg" ? "text-green-500" : "text-red-500"}`}>{type === "veg" ? "Vegetarian" : "Non-Vegetarian"}</p>
            <div className="flex gap-3 mt-3">
                {/* 🛒 Add to Cart Button */}
                <button onClick={addToCart} className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
                    Add to Cart
                </button>
                {/* ⭐ Favorite Toggle Button */}
                <button onClick={toggleFavorite} className="px-5 py-2 text-yellow-500 font-medium rounded-lg shadow-md border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300">
                    {isFavorite ? "★ Favorited" : "☆ Favorite"}
                </button>
            </div>
        </div>
    );
}

export default Card;
