import React from 'react';
const Left_Home = ({ news }) => {
    return (
            <div className="post-entry-1 lg">
                <div className="col-lg-5 " style={{float :"left", height: 150}}>
                    <a to={news.link}><img src={news.image} alt=""
                                           className="img-fluid"></img></a>
                </div>
                <div className="col-lg-6 " style={{float:"right", height: 150}}>
                    <p><a href={news.link}>{news.title}</a>
                    </p>
                </div>
            </div>
    );
};

export default Left_Home;