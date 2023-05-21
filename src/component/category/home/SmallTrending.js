import React from 'react';
const SmallTrending = ({ news }) => {
    return (
        <a to={news.link}> <h5><a href={news.link}>{news.title}</a>
        </h5></a>
    );
};

export default SmallTrending;