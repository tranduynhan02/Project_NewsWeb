import React from 'react';
const Small_Center = ({ news }) => {
    return (
        <div className="post-entry-1">
            <a href={news.link}><img src={news.image} alt="" className="img-fluid"></img></a>
            <h2><a href={news.link}>{news.title}</a></h2>
        </div>
    );
};

export default Small_Center;