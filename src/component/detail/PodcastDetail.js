import Header from "../Header";
import {Link} from "react-router-dom";
import ViewedNew from "./items/ViewedNew";
import Footer from "../Footer";
import React from "react";

const PodcastDetail = () => {

    return (
        <div>
            <Header/>
            <main id="main">
                <section className="single-post-content">
                    <div className="container">
                        <div style={{maxWidth: "100%", margin: "auto", marginBottom: "50px"}}>
                            <img style={{maxWidth: "70%", marginLeft: "15%", marginRight: "15%"}}
                                 src={"https://static.vnncdn.net/images/vnn-viet-nam-hung-cuong.svg"}/>
                        </div>
                        <div className="row">
                            <div className="col-md-9 post-content" data-aos="fade-up">
                                <div className="single-post">
                                    {/*{<audio controls>*/}
                                    {/*    <source src={podcast.audio}/>*/}
                                    {/*</audio>}*/}
                                </div>
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12">
                                        <h5 className="comment-title">Bình luận</h5>
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <label htmlFor="comment-name">Tên</label>
                                                <input type="text" className="form-control" id="comment-name"
                                                       placeholder="Nhập tên"></input>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label htmlFor="comment-email">Email</label>
                                                <input type="text" className="form-control" id="comment-email"
                                                       placeholder="Nhập Email"></input>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="comment-message">Nội dung</label>

                                                <textarea className="form-control" id="comment-message"
                                                          placeholder="Nhập nội dung" cols="30" rows="10"></textarea>
                                            </div>
                                            <div className="col-12">
                                                <input type="submit" className="btn btn-primary"
                                                       value="Bình luận"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" style={{marginTop: "140px"}}>
                                <div className="aside-block">
                                    <h3 className="aside-title">Danh mục</h3>
                                    <ul className="aside-links list-unstyled">
                                        <li><Link style={{textDecoration: "none"}} to="/">Trang chủ</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/life">Đời sống</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/education">Giáo dục</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/current-events">Thời sự</Link></li>
                                        <li> <Link style={{textDecoration:"none"}} to="/travel">Du lịch</Link></li>
                                        <li> <Link style={{textDecoration:"none"}} to="/real-estate">Bất động sản</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/business">Kinh doanh</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/sport">Thể thao</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/entertainment">Giải trí</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="aside-block">
                                    <h3 className="aside-title"><Link style={{textDecoration: "none", color: "#000"}}
                                                                      to="/viewed-news">Tin tức đã xem</Link></h3>
                                    {/*<ul className="aside-links list-unstyled">*/}
                                    {/*    {viewedNews.map((news, index) => (*/}
                                    {/*        index < 6 ? <ViewedNew key={index} news={news}/> : ""*/}
                                    {/*    ))}*/}
                                    {/*</ul>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
};

export default PodcastDetail;