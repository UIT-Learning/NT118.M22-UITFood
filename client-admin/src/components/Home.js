import React from "react";
import "../css/Home.css";

const Home = () => {
    return (
        <div className="home">
            <ul>
                <li>
                    <a href="/invoice">Invoice</a>
                </li>
                <li>
                    <a href="/turnover">Turnover</a>
                </li>
                <li>
                    <a href="/product">Product</a>
                </li>
                <li>
                    <a href="/customer">Customer</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
        </div>
    );
};

export default Home;
