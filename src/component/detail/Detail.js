import '../../assets/css/variables.css';
import '../../assets/css/main.css';
import '../../assets/css/style.css';
import '../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import axios from 'axios';
import React, {useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "./items/Image";
import { useParams } from "react-router-dom";
const Detail = () => {
    const [title, setTitle] = useState();
    const [listImage, setListImage] = useState([]);
    const [listDecription, setListDecription] = useState([]);
    const [summary, setSummary] = useState();
    const [figcaption, setFigcaption] = useState();

    async function ScrapeData() {
        let { link } = useParams();
        const {data} = await axios.get("https://vietnamnet.vn/"+link);
        const cheerio = require('cheerio');
        const $ = cheerio.load(data);
        setTitle($('h1').text());

        setSummary($('h2').text());

        const list = [];
        $('figure img').each((i, el) => {
            const imageUrl = $(el).attr('src');
            list.push(imageUrl);
        });
        setListImage(list);


        const listDes = [];
        $('div p').each((i, el) => {
            const text = $(el).text();
            listDes.push(text);
        });
        setListDecription(listDes);

        const listFigcaption = [];
        $('figure figcaption').each((i, el) => {
            const text = $(el).text();
            listFigcaption.push(text);
        });
        setFigcaption(listFigcaption);
    }

    ScrapeData();

    function getIndex(){
        let x = listDecription.length/listImage.length;
        let y =Math.round(listDecription.length/listImage.length);
        if(y-x >=0.5){
            return y;
        }
        if(y-x <= 0.5){
            return y-1;
        }
    }
    return (
        <div>
            <Header/>
            <main id="main">
                <section className="single-post-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 post-content" data-aos="fade-up">
                                <div className="single-post">
                                    <h1 className="mb-5" style={{maxWidth:"900px"}}>{title}</h1>
                                    <p style={{maxWidth:"800px", fontWeight:"bold"}}>{summary}</p>
                                    {listDecription.map((p, index) => (
                                        index%getIndex()===0? <Image key={index} p={p} link={listImage[index/getIndex()]}/>:
                                        <p key={index} style={{maxWidth:"800px"}}>{p}</p>
                                    ))}
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
                                                <input type="submit" className="btn btn-primary" value="Bình luận"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="aside-block">

                                    <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-popular-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-popular" type="button"
                                                    role="tab" aria-controls="pills-popular"
                                                    aria-selected="true">Popular
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-trending-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-trending" type="button" role="tab"
                                                    aria-controls="pills-trending" aria-selected="false"
                                                    tabIndex="-1">Trending
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-latest-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-latest" type="button" role="tab"
                                                    aria-controls="pills-latest" aria-selected="false"
                                                    tabIndex="-1">Latest
                                            </button>
                                        </li>
                                    </ul>

                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade active show" id="pills-popular" role="tabpanel"
                                             aria-labelledby="pills-popular-tab">
                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Sport</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay
                                                    Focused During Video Calls?</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in
                                                    Layers That Will Inspire Your New Haircut</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Culture</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long
                                                    and Medium Hair</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working
                                                    Mom’s Guide</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Business</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep
                                                    the Pimples Away)</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working
                                                    Mom Should Know</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-trending" role="tabpanel"
                                             aria-labelledby="pills-trending-tab">
                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in
                                                    Layers That Will Inspire Your New Haircut</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Culture</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long
                                                    and Medium Hair</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working
                                                    Mom’s Guide</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Sport</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay
                                                    Focused During Video Calls?</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>
                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Business</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep
                                                    the Pimples Away)</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working
                                                    Mom Should Know</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-latest" role="tabpanel"
                                             aria-labelledby="pills-latest-tab">
                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working
                                                    Mom’s Guide</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Business</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep
                                                    the Pimples Away)</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working
                                                    Mom Should Know</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Sport</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay
                                                    Focused During Video Calls?</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in
                                                    Layers That Will Inspire Your New Haircut</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Culture</span> <span
                                                    className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long
                                                    and Medium Hair</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="aside-block">
                                    <h3 className="aside-title">Video</h3>
                                    <div className="video-post">
                                        <a href="https://www.youtube.com/watch?v=AiFfDjmd0jU"
                                           className="glightbox link-video">
                                            <span className="bi-play-fill"></span>
                                            <img src="assets/img/post-landscape-5.jpg" alt="" className="img-fluid"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="aside-block">
                                    <h3 className="aside-title">Categories</h3>
                                    <ul className="aside-links list-unstyled">
                                        <li><a href="category.html"><i className="bi bi-chevron-right"></i> Business</a>
                                        </li>
                                        <li><a href="category.html"><i className="bi bi-chevron-right"></i> Culture</a>
                                        </li>
                                        <li><a href="category.html"><i className="bi bi-chevron-right"></i> Sport</a>
                                        </li>
                                        <li><a href="category.html"><i className="bi bi-chevron-right"></i> Food</a>
                                        </li>
                                        <li><a href="category.html"><i className="bi bi-chevron-right"></i> Politics</a>
                                        </li>
                                        <li><a href="category.html"><i
                                            className="bi bi-chevron-right"></i> Celebrity</a></li>
                                        <li><a href="category.html"><i className="bi bi-chevron-right"></i> Startups</a>
                                        </li>
                                        <li><a href="category.html"><i className="bi bi-chevron-right"></i> Travel</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="aside-block">
                                    <h3 className="aside-title">Tags</h3>
                                    <ul className="aside-tags list-unstyled">
                                        <li><a href="category.html">Business</a></li>
                                        <li><a href="category.html">Culture</a></li>
                                        <li><a href="category.html">Sport</a></li>
                                        <li><a href="category.html">Food</a></li>
                                        <li><a href="category.html">Politics</a></li>
                                        <li><a href="category.html">Celebrity</a></li>
                                        <li><a href="category.html">Startups</a></li>
                                        <li><a href="category.html">Travel</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Detail;
