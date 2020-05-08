import React from "react";

import Header from "./encloser/Header";
import Console from "./console/Console";
import Footer from "./encloser/Footer";

export default function App() {
    return (
        <div className="app">
            <Header />
            <Console />
            <Footer />
        </div>
    )
}