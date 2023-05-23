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
    // lấy tin tức du lịch
    const [travelList, setTravelList] = useState([]);
    // lấy tin tức bất động sản
    const [realEstateList, setRealEstateList] = useState([]);
    // lấy tin tức thời sự
    const [newsList, setNewsList] = useState([]);
    // lấy tin tức giáo dục
    const [educationList, setEducationList] = useState([]);
    // lấy tin tức đời sống
    const [lifeList, setLifeList] = useState([]);
    // lấy tin tức kinh doanh
    const [businessList, setBusinessList] = useState([]);
    // lấy tin tức thể thao
    const [sportList, setSportList] = useState([]);
    // lấy tin tức giải trí
    const [entertainmentList, setEntertainmentList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/du-lich.rss'
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
            setTravelList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/bat-dong-san.rss'
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
            setRealEstateList(results);
        };
        fetchNews();
    }, []);
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
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/giao-duc.rss'
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
            setEducationList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/doi-song.rss'
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
            setLifeList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/kinh-doanh.rss'
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
            setBusinessList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/the-thao.rss'
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
            setSportList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/giai-tri.rss'
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
            setEntertainmentList(results);
        };
        fetchNews();
    }, []);
    return (
        <div className="Home">
            <Header/>
            <main id="main">
                <section id="posts" className="posts">
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            <div className="col-lg-3">
                                {lifeList.map((news, index) => (
                                    index >=0 && index < 2 ? <Left_Home key={index} news={news}/> : ""
                                ))}
                                {businessList.map((news, index) => (
                                    index >=0 && index < 2 ? <Left_Home key={index} news={news}/> : ""
                                ))}
                                {realEstateList.map((news, index) => (
                                    index >=0 && index < 2 ? <Left_Home key={index} news={news}/> : ""
                                ))}


                            </div>

                            <div className="col-lg-9">
                                <div className="row g-5">
                                    <div className="col-lg-8 border-start custom-border">
                                        {newsList.map((news, index) => (
                                            index == 0 ? <Center_Home key={index} news={news}/> : ""
                                        ))}
                                        <div className="col-lg-3 " style={{float: "left"}}>
                                            {sportList.map((news, index) => (
                                                index == 0 ? <Small_Center key={index} news={news}/> : ""
                                            ))}
                                        </div>
                                        <div className="col-lg-3 "style={{float: "left",marginLeft: 80}}>
                                            {educationList.map((news, index) => (
                                                index == 0 ? <Small_Center key={index} news={news}/> : ""
                                            ))}
                                        </div>
                                        <div className="col-lg-3 " style={{float: "right"}}>
                                            {entertainmentList.map((news, index) => (
                                                index == 0 ? <Small_Center key={index} news={news}/> : ""
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-lg-4">

                                        <div className="trending">
                                            <h3>Trending</h3>
                                            <ul className="trending-post">
                                                <li>
                                                    {travelList.map((news, index) => (
                                                        index == 1 ? <Trending_Home key={index} news={news}/> : ""
                                                    ))}
                                                </li>
                                                <li>
                                                    {newsList.map((news, index) => (
                                                        index == 1 ? <Trending_Home key={index} news={news}/> : ""
                                                    ))}
                                                </li>
                                                <li>
                                                    {educationList.map((news, index) => (
                                                        index == 1 ? <Trending_Home key={index} news={news}/> : ""
                                                    ))}
                                                </li>
                                                <li>
                                                    {sportList.map((news, index) => (
                                                        index == 1 ? <Trending_Home key={index} news={news}/> : ""
                                                    ))}
                                                </li>
                                                <li>
                                                    {entertainmentList.map((news, index) => (
                                                        index == 1 ? <Trending_Home key={index} news={news}/> : ""
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
                                {lifeList.map((news, index) => (
                                    index == 2 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {entertainmentList.map((news, index) => (
                                    index == 2 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {sportList.map((news, index) => (
                                    index == 2 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {educationList.map((news, index) => (
                                    index == 2 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="posts">
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            <div className="col-lg-3">
                                {travelList.map((news, index) => (
                                    index > 1 && index < 4 ? <Left_Home key={index} news={news}/> : ""
                                ))}
                                {realEstateList.map((news, index) => (
                                    index > 1 && index < 4 ? <Left_Home key={index} news={news}/> : ""
                                ))}
                                {newsList.map((news, index) => (
                                    index == 2 ? <Left_Home key={index} news={news}/> : ""
                                ))}
                                {lifeList.map((news, index) => (
                                    index > 2 && index < 5 ? <Left_Home key={index} news={news}/> : ""
                                ))}
                                {businessList.map((news, index) => (
                                    index > 1 && index < 4 ? <Left_Home key={index} news={news}/> : ""
                                ))}
                                {sportList.map((news, index) => (
                                    index > 2 && index < 5 ? <Left_Home key={index} news={news}/> : ""
                                ))}
                                {entertainmentList.map((news, index) => (
                                    index > 2 && index < 5 ? <Left_Home key={index} news={news}/> : ""
                                ))}


                            </div>

                            <div className="col-lg-9">
                                <div className="row g-5">
                                    <div className="col-lg-7 border-start custom-border">
                                        {newsList.map((news, index) => (
                                            index == 3 ? <Center_Home key={index} news={news}/> : ""
                                        ))}
                                        {educationList.map((news, index) => (
                                            index >2 && index<5 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {businessList.map((news, index) => (
                                            index == 4 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {travelList.map((news, index) => (
                                            index == 4 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {realEstateList.map((news, index) => (
                                            index == 4 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {educationList.map((news, index) => (
                                            index >3 && index<6 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {newsList.map((news, index) => (
                                            index ==6 ? <Center_Home key={index} news={news}/> : ""
                                        ))}
                                        {entertainmentList.map((news, index) => (
                                            index == 5 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {sportList.map((news, index) => (
                                            index == 5 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {businessList.map((news, index) => (
                                            index == 5 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {lifeList.map((news, index) => (
                                            index == 5 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {educationList.map((news, index) => (
                                            index == 5 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {newsList.map((news, index) => (
                                            index == 7 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {realEstateList.map((news, index) => (
                                            index == 5 ? <SmallTrending key={index} news={news}/> : ""
                                        ))}
                                        {travelList.map((news, index) => (
                                        index == 5 ? <SmallTrending key={index} news={news}/> : ""
                                    ))}

                                    </div>

                                    <div className="col-lg-5">

                                        <div className="col-lg-12 border-start custom-border">
                                            {sportList.map((news, index) => (
                                                index ==6 ? <Center_Home key={index} news={news}/> : ""
                                            ))}
                                            {educationList.map((news, index) => (
                                                index == 6 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {newsList.map((news, index) => (
                                                index == 8 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {realEstateList.map((news, index) => (
                                                index == 6 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {travelList.map((news, index) => (
                                                index == 7 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {entertainmentList.map((news, index) => (
                                                index == 6 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {sportList.map((news, index) => (
                                                index == 7 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {businessList.map((news, index) => (
                                                index == 6 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {lifeList.map((news, index) => (
                                                index == 6 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {travelList.map((news, index) => (
                                                index ==6 ? <Center_Home key={index} news={news}/> : ""
                                            ))}
                                            {sportList.map((news, index) => (
                                                index == 8 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {entertainmentList.map((news, index) => (
                                                index == 7 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {travelList.map((news, index) => (
                                                index == 8 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {realEstateList.map((news, index) => (
                                                index == 7 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {newsList.map((news, index) => (
                                                index == 9 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {educationList.map((news, index) => (
                                                index == 7 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {educationList.map((news, index) => (
                                                index == 7 ? <SmallTrending key={index} news={news}/> : ""
                                            ))}
                                            {businessList.map((news, index) => (
                                                index == 7 ? <SmallTrending key={index} news={news}/> : ""
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
                                {educationList.map((news, index) => (
                                    index == 8 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {lifeList.map((news, index) => (
                                    index == 8 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {businessList.map((news, index) => (
                                    index == 8 ? <Small_Center key={index} news={news}/> : ""
                                ))}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {entertainmentList.map((news, index) => (
                                    index == 8 ? <Small_Center key={index} news={news}/> : ""
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