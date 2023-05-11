import React from 'react';
import '../../../assets/css/style.css';
const Left = ({ news }) => {
    return (
        <div className="col-lg-4">
            <div className="post-entry-1 lg">
                <a to={news.link}><img src={news.image} alt=""
                                className="img-fluid"></img></a>
                <div className="post-meta"><span className="date">Giáo dục & </span>{news.pubDate} <span></span></div>
                <h2><a href={news.link}>{news.title}</a>
                </h2>
                <p className="mb-4 d-block">{news.description}</p>
            </div>

        </div>
    );
};

export default Left;