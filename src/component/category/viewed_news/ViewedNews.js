import React, {useState} from "react";
import Header from "../../Header";
import Left from "../../Items/Left";
import Center from "../../Items/Center";
import Bottom from "../../Items/Bottom";
import Footer from "../../Footer";
import {Outlet} from "react-router-dom";

const ViewedNews = () => {
    // const [viewedNews, setViewedNews] = useState(JSON.parse(localStorage.getItem('viewedNews')));
    //
    // return (
    //     <div className="NewsWatched">
    //         <Header/>
    //         <main id="main">
    //             <section className="category-section">
    //                 <div className="container" data-aos="fade-up">
    //                     <div className="section-header d-flex justify-content-between align-items-center mb-5">
    //                         <h2>Tin tức đã xem</h2>
    //                     </div>
    //                 </div>
    //                 <div className="container" data-aos="fade-up">
    //                     <div className="row g-5">
    //                         {viewedNews.map((news, index) => (
    //                             <Bottom key={index} news={news}/>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </section>
    //         </main>
    //         <Footer/>
    //         <Outlet/>
    //     </div>
    // );
};

export default ViewedNews;