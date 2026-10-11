import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home.jsx";
import Restaurant from "./Restaurant.jsx";
import RestaurantMenu from "./RestaurantMenu.jsx";
import SearchFood from "./SearchFood.jsx";
import './index.css'

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
            <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Routes>
    </BrowserRouter>
);