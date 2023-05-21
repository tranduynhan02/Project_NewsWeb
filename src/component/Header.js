import React from 'react';
import {Link} from "react-router-dom";
const Header = ({ news }) => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                <a href="index.html" className="logo d-flex align-items-center">
                    <h1>News</h1>
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to="/">Trang chủ</Link></li>
                        <li> <Link to="/life">Đời sống</Link></li>
                        <li> <Link to="/education">Giáo dục</Link></li>
                        <li> <Link to="/current-events">Thời sự</Link></li>
                    </ul>
                </nav>

                <div className="position-relative">
                    <a href="#" className="mx-2"><span className="bi-facebook"></span></a>
                    <a href="#" className="mx-2"><span className="bi-twitter"></span></a>
                    <a href="#" className="mx-2"><span className="bi-instagram"></span></a>

                    <a href="#" className="mx-2 js-search-open"><span className="bi-search"></span></a>
                    <i className="bi bi-list mobile-nav-toggle"></i>

                    <div className="search-form-wrap js-search-form-wrap">
                        <form action="search-result.html" className="search-form">
                            <span className="icon bi-search"></span>
                            <input type="text" placeholder="Search" className="form-control"></input>
                            <button className="btn js-search-close"><span className="bi-x"></span></button>
                        </form>
                    </div>

                </div>

            </div>

        </header>
    );
};

export default Header;