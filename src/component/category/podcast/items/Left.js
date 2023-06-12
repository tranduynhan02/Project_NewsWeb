import React, {useEffect, useState} from 'react';
// import '../../../assets/css/style.css';
const Left = ({podcast}) => {
    const [audioDuration, setAudioDuration] = useState([]);

    const getAudioDuration = async () => {
        try {
            const audio = new Audio(podcast.audio);
            // chờ tệp audio được tải xuống trước khi truy cập vào thuộc tính duration
            await audio.addEventListener("loadedmetadata", () => {
                const duration = Math.floor(audio.duration / 60);
                setAudioDuration(`${duration} phút`);
            });
            audio.load(); // để tải dữ liệu trước khi đăng ký sự kiện.
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getAudioDuration();
    }, []);

    return (<div className="col-lg-4">
        <div className="post-entry-1 lg">
            <a to={"/podcast/" + podcast.link}>
                <img src="headphone.png" alt="podcast" width={"30px"} height={"30px"} style={{position: "absolute", margin: "5px", borderRadius: "50%", backgroundColor:"rgb(242,242,242,0.3)"}}/>
                <img src={podcast.image} alt="" className="img-fluid"></img>
            </a>
            <div className="post-meta">{podcast.pubDate}</div>
            <h2><a href={"/podcast/" + podcast.link}
                   style={{textDecoration: "none"}}>{podcast.title}</a>
            </h2>
            <div><img src="headphone.png" alt="podcast" width={"30px"} height={"30px"} style={{margin: "auto"}}/>
                <span style={{marginLeft: "15px"}}>{audioDuration}</span>
            </div>
            <p className="mb-4 d-block">{podcast.description}</p>
        </div>

    </div>);
};

export default Left;