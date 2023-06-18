import React, {useState} from 'react';

const Bottom = ({news}) => {
    const [viewedNews, setViewedNews] = useState(JSON.parse(localStorage.getItem("viewedNews")));

    const handleViewNews = (news) => {
        // bien found kiem tra phan tu ton tai
        let found = false;
        const newViewedNews = viewedNews.filter((item) => {
            if (item.link === news.link) {
                // ton tai
                found = true;
                // tra ve false de loai bo phan tu khoi man viewedNews
                return false;
            }
            // tra ve true vi khong co phan tu nao trung lap
            return true;
        });
        if (found) {
            // found=true
            // dua news vao dau mang
            newViewedNews.unshift(news);
            // cap nhat mang viewedNews
            setViewedNews(newViewedNews);
            // luu vao LocalStoragre
            localStorage.setItem('viewedNews', JSON.stringify(newViewedNews));
            return true;
        } else {
            // found=false
            // tao mang moi them news vao dau
            const updatedViewedNews = [news, ...viewedNews];
            // cap nhat mang viewedNews
            setViewedNews(updatedViewedNews);
            // luu vao LocalStorage
            localStorage.setItem('viewedNews', JSON.stringify(updatedViewedNews));
            return false;
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