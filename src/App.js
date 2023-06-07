import {Outlet} from "react-router-dom";
import {useState} from "react";

function App() {
    if (JSON.parse(localStorage.getItem("viewedNews")) === null) {
        localStorage.setItem("viewedNews", JSON.stringify([]));
    }
    return (
        <div className="App">
            <Outlet/>
        </div>
    );
}

export default App;
