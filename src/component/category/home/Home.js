import '../../../assets/css/variables.css';
import '../../../assets/css/main.css';
import '../../../assets/css/style.css';
import '../../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from "../../Header";
import Footer from "../../Footer";
import Left_Home from "./Left_Home";
import Center_Home from "./Center_Home";
import Trending_Home from "./Trending_Home";
import Small_Center from "./Small_Center";
import SmallTrending from "./SmallTrending";

const Home = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/thoi-su.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
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
        <div className="Life">
            <Header/>
            <main id="main">
                <section id="posts" className="posts">
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            <div className="col-lg-3">
                                {newsList.map((news, index) => (
                                    index > 0 && index < 7 ? <Left_Home key={index} news={news}/> : ""
                                ))}


                            </div>

                            <div className="col-lg-9">
                                <div className="row g-5">
                                    <div className="col-lg-8 border-start custom-border">
                                        {newsList.map((news, index) => (
                                            index == 4 ? <Center_Home key={index} news={news}/> : ""
                                        ))}
                                        <div className="col-lg-3 " style={{float: "left"}}>
                                            {newsList.map((news, index) => (
                                                index == 5 ? <Small_Center key={index} news={news}/> : ""
                                            ))}
                                        </div>
                                        <div className="col-lg-3 "style={{float: "left",marginLeft: 80}}>
                                            {newsList.map((news, index) => (
                                                index == 6 ? <Small_Center key={index} news={news}/> : ""
                                            ))}
                                        </div>
                                        <div className="col-lg-3 " style={{float: "right"}}>
                                            {newsList.map((news, index) => (
                                                index == 7 ? <Small_Center key={index} news={news}/> : ""
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-lg-4">

                                        <div className="trending">
                                            <h3>Trending</h3>
                                            <ul className="trending-post">
                                                <li>
                                                    {newsList.map((news, index) => (
                                                        index == 8 ? <Trending_Home key={index} news={news}/> : ""
                                                    ))}
                                                </li>
                                                <li>
                                                    {newsList.map((news, index) => (
                                                        index == 9 ? <Trending_Home key={index} news={news}/> : ""
                                                    ))}
                                                </li>
                                                <li>
                                                    {newsList.map((news, index) => (
                                                        index == 10 ? <Trending_Home key={index} news={news}/> : ""
                                                    ))}
                                                </li>
                                                <li>
                                                    {newsList.map((news, index) => (
                                                        index == 11 ? <Trending_Home key={index} news={news}/> : ""
                                                    ))}
                                                </li>
                                                <li>
                                                    {newsList.map((news, index) => (
                                                        index == 12 ? <Trending_Home key={index} news={news}/> : ""
                                                    ))}
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container" data-aos="fade-up" style={{backgroundColor: 'rgb(246,246,246)', marginTop: 50}}>
                        <div className="row g-5">
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {newsList.map((news, index) => (
                                    index == 12 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {newsList.map((news, index) => (
                                    index == 13 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {newsList.map((news, index) => (
                                    index == 14 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {newsList.map((news, index) => (
                                    index == 15 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="posts">
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            <div className="col-lg-3">
                                {newsList.map((news, index) => (
                                    index > 0 && index < 14 ? <Left_Home key={index} news={news}/> : ""
                                ))}


                            </div>

                            <div className="col-lg-9">
                                <div className="row g-5">
                                    <div className="col-lg-7 border-start custom-border">
                                        {newsList.map((news, index) => (
                                            index ==14 ? <Center_Home key={index} news={news}/> : ""
                                        ))}
                                        {newsList.map((news, index) => (
                                            index >14 && index<23 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {newsList.map((news, index) => (
                                            index ==23 ? <Center_Home key={index} news={news}/> : ""
                                        ))}
                                        {newsList.map((news, index) => (
                                            index >23 && index<32 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                    </div>

                                    <div className="col-lg-5">

                                        <div className="col-lg-12 border-start custom-border">
                                            {newsList.map((news, index) => (
                                                index ==32 ? <Center_Home key={index} news={news}/> : ""
                                            ))}
                                            {newsList.map((news, index) => (
                                                index >32 && index<41 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {newsList.map((news, index) => (
                                                index ==41 ? <Center_Home key={index} news={news}/> : ""
                                            ))}
                                            {newsList.map((news, index) => (
                                                index >41 && index<50 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container" data-aos="fade-up" style={{backgroundColor: 'rgb(246,246,246)', marginTop: 50}}>
                        <div className="row g-5">
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {newsList.map((news, index) => (
                                    index == 50 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {newsList.map((news, index) => (
                                    index == 51 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {newsList.map((news, index) => (
                                    index == 52 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {newsList.map((news, index) => (
                                    index == 53 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;