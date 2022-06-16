import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Customer from "./components/Customer";
import Login from "./components/Login";
import Product from "./components/Product";
import Turnover from "./components/Turnover";
import Invoice from "./components/Invoice";

function App() {
    return (
        <>
            <div>
                <Router basename={"/"}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="customer" element={<Customer />} />
                        <Route path="product" element={<Product />} />
                        <Route path="turnover" element={<Turnover />} />
                        <Route path="invoice" element={<Invoice />} />
                        <Route path="*" element={<div>404</div>} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
