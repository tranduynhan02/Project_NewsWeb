import React from 'react';
const Header = ({ news }) => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                <a href="index.html" className="logo d-flex align-items-center">
                    <h1>News</h1>
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a href="index.html">Trang chủ</a></li>
                        <li><a href="single-post.html">Giáo dục</a></li>
                        <li><a href="about.html">Thời sự</a></li>
                        <li><a href="contact.html">Đời sống</a></li>
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