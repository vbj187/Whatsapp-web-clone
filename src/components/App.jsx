import React from "react";
import Header from "./border-panel/Header";
import Footer from "./border-panel/Footer";
import Console from "./console/Console"

export default function App() {
    return (
        <div className="containter">
            <Header />
            <Console />
            <Footer />
        </div>
    )
}