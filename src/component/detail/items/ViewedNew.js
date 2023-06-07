import React from "react";

const ViewedNew = ({news}) => {
    return (
        <div className="post-entry-1 border-bottom">
            <div className="post-meta"></div>
            <h2 className="mb-2"><a style={{textDecoration:"none"}} href={"/news/"+news.link}>{news.title}</a></h2>
        </div>
    );
};

export default ViewedNew;