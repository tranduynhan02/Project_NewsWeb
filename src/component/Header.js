import React from 'react';
import {Link} from "react-router-dom";
import Form from "./search/Form";

const Header = ({news}) => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                <Link style={{textDecoration: "none"}} className="logo d-flex align-items-center" to="/">
                    <h1>VietNamNet</h1></Link>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link style={{textDecoration: "none"}} to="/">Trang chủ</Link></li>
                        <li><Link style={{textDecoration: "none"}} to="/life">Đời sống</Link></li>
                        <li><Link style={{textDecoration: "none"}} to="/education">Giáo dục</Link></li>
                        <li><Link style={{textDecoration: "none"}} to="/current-events">Thời sự</Link></li>
                        <li><Link style={{textDecoration: "none"}} to="/business">Kinh doanh</Link></li>
                        <li><Link style={{textDecoration: "none"}} to="/sport">Thể thao</Link></li>
                        <li><Link style={{textDecoration: "none"}} to="/entertainment">Giải trí</Link></li>
                        <li><Link style={{textDecoration: "none"}} to="/travel">Du lịch</Link></li>
                        <li><Link style={{textDecoration: "none"}} to="/real-estate">Bất động sản</Link></li>
                    </ul>
                </nav>

                <div className="position-relative" style={{width:250}}>
                    <Form/>
                    <a href="#" className="mx-2"><span className="bi-facebook"></span></a>
                    <a href="#" className="mx-2"><span className="bi-twitter"></span></a>
                    <a href="#" className="mx-2"><span className="bi-instagram"></span></a>
                    {/*<i className="bi bi-list mobile-nav-toggle"></i>*/}

                    {/*<div className="search-form-wrap js-search-form-wrap">*/}
                    {/*    <form action="search-result.html" className="search-form">*/}
                    {/*        <span className="icon bi-search"></span>*/}
                    {/*        <input type="text" placeholder="Search" className="form-control"></input>*/}
                    {/*        <button className="btn js-search-close"><span className="bi-x"></span></button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}

                </div>

            </div>

        </header>
    );
};

export default Header;