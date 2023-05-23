import '../../../assets/css/variables.css';
import '../../../assets/css/main.css';
import '../../../assets/css/style.css';
import '../../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Center from "../../Items/Center";
import Bottom from "../../Items/Bottom";
import Header from "../../Header";
import Footer from "../../Footer";
import Small_Center from "../home/Small_Center";
import {Link} from "react-router-dom";
import Detail from "../../detail/Detail";

const Travel = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/du-lich.rss'
            );
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            let items = xml.querySelectorAll('item');
            let results = [];

            items.forEach((item) => {
                let result = {
                    title: item.querySelector('title').textContent,
                    description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                    link: item.querySelector('link').textContent,
                    image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                    pubDate: item.querySelector('pubDate').textContent,
                };
                results.push(result);
            });
            setNewsList(results);
        };
        fetchNews();
    }, []);

    return (
        <div className="Travel">
            <Header/>
            <main id="main">
                <section className="category-section">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                            <h2>Du lịch</h2>

                        </div>
                    </div>
                    <div className="container" data-aos="fade-up">
                        <div className="row g-12">
                            <div className="col-lg-12">
                                <div className="row g-5">
                                    <div className="col-lg-6 border-start custom-border">
                                        {newsList.map((news, index) => (
                                            index == 0 ? <Center key={index} news={news}/> : ""
                                        ))}
                                        <div className="col-lg-3 " style={{float: "left", marginLeft: 40}}>
                                            {newsList.map((news, index) => (
                                                index == 1 ? <Small_Center key={index} news={news}/> : ""
                                            ))}
                                        </div>
                                        <div className="col-lg-3 " style={{float: "left" , marginLeft: 40, marginRight: 40}}>
                                            {newsList.map((news, index) => (
                                                index == 2 ? <Small_Center key={index} news={news}/> : ""
                                            ))}
                                        </div>
                                        <div className="col-lg-3 " style={{float: "left"}}>
                                            {newsList.map((news, index) => (
                                                index == 3 ? <Small_Center key={index} news={news}/> : ""
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-lg-3 border-start custom-border">
                                        {newsList.map((news, index) => (
                                            index > 3 && index < 6 ? <Center key={index} news={news}/> : ""
                                        ))}
                                    </div>
                                    <div className="col-lg-3 border-start custom-border">
                                        {newsList.map((news, index) => (
                                            index > 5 && index < 8 ? <Center key={index} news={news}/> : ""
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {newsList.map((news, index) => (
                                index > 7 && index < 15 ? <Bottom key={index} news={news}/> : ""
                            ))}

                            <div className="container" data-aos="fade-up" style={{ marginTop: 50}}>
                                <div className="row g-5">
                                    <div className="col-lg-3 " style={{float: "left"}}>
                                        {newsList.map((news, index) => (
                                            index == 15 ? <Small_Center key={index} news={news}/> : ""
                                        ))}
                                    </div>
                                    <div className="col-lg-3 " style={{float: "left"}}>
                                        {newsList.map((news, index) => (
                                            index == 16 ? <Small_Center key={index} news={news}/> : ""
                                        ))}
                                    </div>
                                    <div className="col-lg-3 " style={{float: "left"}}>
                                        {newsList.map((news, index) => (
                                            index == 17 ? <Small_Center key={index} news={news}/> : ""
                                        ))}
                                    </div>
                                    <div className="col-lg-3 " style={{float: "left"}}>
                                        {newsList.map((news, index) => (
                                            index == 18 ? <Small_Center key={index} news={news}/> : ""
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {newsList.map((news, index) => (
                                index > 17 && index < 41 ? <Bottom key={index} news={news}/> : ""
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Travel;