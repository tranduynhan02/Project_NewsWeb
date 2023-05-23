import React from 'react';
// import '../../../assets/css/style.css';
const Left = ({ news }) => {
    return (
        <div className="col-lg-4">
            <div className="post-entry-1 lg">
                <a to={"news/"+news.link}><img src={news.image} alt=""
                                       className="img-fluid"></img></a>
                <div className="post-meta">{news.pubDate}</div>
                <h2><a href={"news/"+news.link} style={{textDecoration:"none"}}>{news.title}</a>
                </h2>
                <p className="mb-4 d-block">{news.description}</p>
            </div>

        </div>
    );
};

export default Left;