import React, {useState} from 'react';

const Bottom = ({news}) => {
    const [viewedNews, setViewedNews] = useState(JSON.parse(localStorage.getItem("viewedNews")));

    //Kiem tra tin tuc trung lap trong LocalStorage
    function checkDuplicateNews(news, viewedNews) {
        for (let i = 0; i < viewedNews.length; i++) {
            if (news.link === viewedNews[i].link) {
                // Xoa value cu trong LocalStorage
                viewedNews.splice(i, 1);
                localStorage.setItem("viewedNews", JSON.stringify(viewedNews));
                // Them tin tuc da xem vao lich su xem tin tuc
                const newViewedNews = [news, ...viewedNews];
                setViewedNews(newViewedNews);
                // Luu lich su xem tin tuc vao LocalStorage
                localStorage.setItem('viewedNews', JSON.stringify(newViewedNews));
                return true;
            }
        }
        return false;
    }

    const handleViewNews = (news) => {
        if (!checkDuplicateNews(news, viewedNews)) {
            // Them tin tuc da xem vao lich su xem tin tuc
            const newViewedNews = [news, ...viewedNews];
            setViewedNews(newViewedNews);
            // Lưu lich su xem tin tuc vao LocalStorage
            localStorage.setItem('viewedNews', JSON.stringify(newViewedNews));
        }
    };
    return (
        <div className="post-entry-1 border-bottom">
            <div className="left-layout">
                <a href={"/news/" + news.link} onClick={() => handleViewNews(news)}><img src={news.image} alt=""
                                                                                        className="img-fix-size"></img></a>
            </div>
            <div className="right-layout">
                <div className="mar-left">
                    <div className="post-meta"><span
                        className="mx-1">•</span> <span>{news.pubDate}</span></div>
                    <h2 className="mb-2"><a href={"/news/" + news.link} style={{textDecoration: "none"}}
                                            onClick={() => handleViewNews(news)}>{news.title}</a></h2>
                    <p>{news.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Bottom;