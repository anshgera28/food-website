import { createContext, useState, useEffect } from "react";
import { food_items } from "../food";

export const dataContext = createContext();

function UserProvider({ children }) {
    const [cate, setCate] = useState(food_items);
    const [input, setInput] = useState("");
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [sortType, setSortType] = useState("default");
    const [darkMode, setDarkMode] = useState(false);

    // 🛒 Add to Cart
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // ⭐ Toggle Favorites
    const toggleFavorite = (item) => {
        setFavorites(prev => prev.includes(item) ? prev.filter(fav => fav !== item) : [...prev, item]);
    };

    //  Handle Sorting
    useEffect(() => {
        if (sortType === "price") {
            setCate([...cate].sort((a, b) => a.food_price - b.food_price));
        } else if (sortType === "name") {
            setCate([...cate].sort((a, b) => a.food_name.localeCompare(b.food_name)));
        } else {
            setCate(food_items);
        }
    }, [sortType]);

    // 🌙 Toggle Dark Mode
    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
    }, [darkMode]);

    let data = {
        input, setInput, cate, setCate,
        cart, addToCart, removeFromCart,
        favorites, toggleFavorite,
        sortType, setSortType,
        darkMode, setDarkMode
    };

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    );
}

export default UserProvider;
