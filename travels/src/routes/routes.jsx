import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import Sydney from "../pages/Sydney/index.jsx"


export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sydney" element={<Sydney />} />
            </Routes>
        </BrowserRouter>
    );
}