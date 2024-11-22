import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import Sydney from "../pages/Sydney/index.jsx"
import Berlin from '../pages/Berlin/index.jsx'
import Test from "../pages/hometrue/index.jsx"

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sydney" element={<Sydney />} />
                <Route path="/berlin" element={<Berlin />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
}