import React from 'react';
const Trending_Home = ({ news }) => {
    return (
    <a to={news.link}> <h3><a href={news.link}>{news.title}</a>
    </h3></a>
    );
};

export default Trending_Home;