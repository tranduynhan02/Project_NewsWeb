import React from 'react';
const Center_Home = ({ news }) => {
    return (
        <div className="post-entry-1">
            <a href={news.link}><img src={news.image} alt="" className="img-fluid"></img></a>
            <div className="post-meta">
            </div>
            <h3><a href={news.link}>{news.title}</a></h3>
            <p className="mb-4 d-block">{news.description}</p>
        </div>
    );
};

export default Center_Home;