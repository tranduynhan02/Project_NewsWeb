import '../../../assets/css/variables.css';
import '../../../assets/css/main.css';
import '../../../assets/css/style.css';
import '../../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Left from "../../Items/Left";
import Center from "../../Items/Center";
import Bottom from "../../Items/Bottom";
import Header from "../../Header";
import Footer from "../../Footer";

const CurrentEvents = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://cors-anywhere.herokuapp.com/https://vietnamnet.vn/rss/thoi-su.rss'
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
            if (i === 0) {
                return <Left key={i} news={news}/>;
            }
        }
    }
    return (
        <div className="Life">
            <Header/>
            <main id="main">
                <section className="category-section">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                            <h2>Thời sự</h2>

                        </div>
                    </div>
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            {getZero()}
                            <div className="col-lg-8">
                                <div className="row g-5">
                                    <div className="col-lg-4 border-start custom-border">
                                        {newsList.map((news, index) => (
                                            index > 0 && index < 3 ? <Center key={index} news={news}/> : ""
                                        ))}
                                    </div>
                                    <div className="col-lg-4 border-start custom-border">
                                        {newsList.map((news, index) => (
                                            index > 2 && index < 5 ? <Center key={index} news={news}/> : ""
                                        ))}
                                    </div>
                                    <div className="col-lg-4 border-start custom-border">
                                        {newsList.map((news, index) => (
                                            index > 4 && index < 7 ? <Center key={index} news={news}/> : ""
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {newsList.map((news, index) => (
                                index > 6 ? <Bottom key={index} news={news}/> : ""
                            ))}


                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default CurrentEvents;