import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home.jsx";
import Restaurant from "./Restaurant.jsx";
import RestaurantMenu from "./RestaurantMenu.jsx";
import SearchFood from "./SearchFood.jsx";
import SecondaryHome from "./SecondaryHome.jsx";
import './index.css'
import { store } from "./Stored/stores.js";
import { Provider } from "react-redux";
import Checkout from "./Checkout.jsx";

createRoot(document.getElementById("root")).render(
    <>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<SecondaryHome></SecondaryHome>}>
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
            <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
    </BrowserRouter>
    </Provider>
    </>
);