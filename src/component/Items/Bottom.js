import React from 'react';
const Bottom = ({ news }) => {
    return (
        <div className="post-entry-1 border-bottom">
            <div className="left-layout">
                <a href={news.link}><img src={news.image} alt="" className="img-fix-size"></img></a>
            </div>
            <div className="right-layout">
               <div className="mar-left">
                   <div className="post-meta"><span
                       className="mx-1">•</span> <span>{news.pubDate}</span></div>
                   <h2 className="mb-2"><a href={news.link} style={{textDecoration:"none"}}>{news.title}</a></h2>
                   <p>{news.description}</p>
               </div>
            </div>
        </div>
    );
};

export default Bottom;