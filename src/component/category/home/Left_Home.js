import React from 'react';
const Left_Home = ({ news }) => {
    let text = news.title + "";
    let title = MyComponent(text);
    return (
            <div className="post-entry-1 lg">
                <div className="col-lg-5 " style={{float :"left", height: 150}}>
                    <a to={news.link}><img src={news.image} alt=""
                                           className="img-fluid"></img></a>
                </div>
                <div className="col-lg-6 " style={{float:"right", height: 150}}>
                    <p><a href={news.link} style={{textDecoration:"none",color:"black"}}>{title}</a>
                    </p>
                </div>
            </div>
    );
};

const MAX_LENGTH = 55; //Giới hạn số ký tự cho phép hiển thị
const ELLIPSIS = '...'; //Dấu ba chấm để hiển thị ẩn đi

function MyComponent(text) {
    const [summary, detail] = text.split(' ').reduce((acc, value) => {
        if (acc[0].length + value.length < MAX_LENGTH) {
            acc[0] += ` ${value}`;
        } else {
            acc[1] += ` ${value}`;
        }
        return acc;
    }, ['', '']);

    const displayText = `${summary}${detail.length > 0 ? ELLIPSIS : ''}`;

    return (
        <div>
            <p>{displayText}</p>
        </div>
    );
}

export default Left_Home;