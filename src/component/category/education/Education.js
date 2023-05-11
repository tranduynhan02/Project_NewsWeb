import '../../../assets/css/variables.css';
import '../../../assets/css/main.css';
// import '../../../assets/vendor/aos/aos.css';
import '../../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Left from "./Left";
const Education = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://cors-anywhere.herokuapp.com/https://vietnamnet.vn/rss/giao-duc.rss'
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
    function getZero() {
        for (let i = 0; i < newsList.length; i++) {
            const news = newsList[i];
            if (i === 0) { // Nếu đến phần tử có index là 1
                return <Left key={i} news={news} />;
            }
        }
    }
    return (
        <div className="Education">
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1>News</h1>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="index.html">Blog</a></li>
                            <li><a href="single-post.html">Single Post</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
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
            <main id="main">
                <section className="category-section">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                            <h2>Giáo dục</h2>
                            <div><a href="category.html" className="more">See All Culture</a></div>
                        </div>
                    </div>
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            {/*{newsList.map((news, index) => (*/}
                            {/*    index===0?*/}
                            {/*    <Left key={index} news={news}/>:""*/}
                            {/*))}*/}
                            {getZero()}
                            {/*{ for (let i = 0; i < numbers.length; i++) {*/}
                            {/*    listItems.push(<li key={numbers[i].toString()}>{numbers[i]}</li>);*/}
                            {/*}}*/}

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
        ;
};

export default Education;