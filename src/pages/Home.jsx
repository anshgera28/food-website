// src/pages/Home.js (Footer Added)
import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserProvider";

function Home() {
    const { cate, setCate, addToCart, removeFromCart, toggleFavorite, favorites, cart, setSortType, darkMode, setDarkMode } = useContext(dataContext);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter categories
    function filter(category) {
        if (category === "All") {
            setCate(food_items);
        } else {
            let newList = food_items.filter(item => item.food_category === category);
            setCate(newList);
        }
    }

    // Handle Search
    const filteredItems = cate.filter(item => item.food_name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className={`w-full min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-gray-900"}`}>
            <Nav />
            <div className="flex flex-col md:flex-row justify-between p-6 bg-white shadow-md rounded-xl mx-4 my-4 gap-4">
                <input
                    type="text"
                    placeholder="🔍 Search food..."
                    className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select onChange={(e) => setSortType(e.target.value)} className="p-3 border rounded-lg w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="default">Sort by</option>
                    <option value="price">Price</option>
                    <option value="name">Name</option>
                </select>
                <button onClick={() => setDarkMode(!darkMode)} className="p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all w-full md:w-auto">
                    {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
                </button>
            </div>
            
            <div className='flex flex-wrap justify-center items-center gap-5 my-5 px-5'>
                {Categories.map((item, index) => (
                    <div key={index} className='w-[150px] h-[160px] bg-white flex flex-col items-center gap-4 p-5 justify-center text-[20px] font-semibold text-blue-500 rounded-xl shadow-lg hover:bg-blue-200 cursor-pointer transition-all duration-300' onClick={() => filter(item.name)}>
                        {item.icon}
                        {item.name}
                    </div>
                ))}
            </div>
            
            <div className='w-full flex flex-wrap gap-6 justify-center items-center p-6'>
                {filteredItems.map((item) => (
                    <Card
                        key={item.id}
                        name={item.food_name}
                        image={item.food_image}
                        price={item.food_price}
                        id={item.id}
                        type={item.food_type}
                        addToCart={() => addToCart(item)}
                        toggleFavorite={() => toggleFavorite(item)}
                        isFavorite={favorites.includes(item)}
                    />
                ))}
            </div>

            {/* Footer Section */}
            <footer className={`w-full py-6 text-center text-lg font-semibold mt-10 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                <p>© 2025 Foodie Hub | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Home;
