import React from 'react';
// import '../../../assets/css/style.css';
const Center = ({ news }) => {
    return (
        <div className="post-entry-1">
            <a href={"news/"+news.link}><img src={news.image} alt="" className="img-fluid"></img></a>
            <div className="post-meta"><span>{news.pubDate}</span>
            </div>
            <h2><a href={"news/"+news.link} style={{textDecoration:"none"}}>{news.title}</a></h2>
        </div>
    );
};

export default Center;