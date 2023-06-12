import React, {useEffect, useState} from 'react';
// import '../../../assets/css/style.css';
const Center = ({podcast}) => {
    const [audioDuration, setAudioDuration] = useState([]);

    const getAudioDuration = async () => {
        try {
            const audio = new Audio(podcast.audio);
            await new Promise(resolve => {
                audio.addEventListener("loadedmetadata", () => {
                    const duration = Math.floor(audio.duration / 60);
                    setAudioDuration(`${duration} phút`);
                    resolve();
                });
            });
        } catch (e) {
            console.log(e);
            setAudioDuration('Không thể tính toán thời lượng');
        }
    };

    useEffect(() => {
        getAudioDuration();
    }, []);

    return (
        <div className="post-entry-1">
            <a href={"/podcast/" + podcast.link}>
                <img src="headphone.png" alt="podcast" width={"30px"} height={"30px"} style={{
                    position: "absolute",
                    margin: "5px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(242,242,242,0.3)"
                }}/>
                <img src={podcast.image} alt="" className="img-fluid"></img>
            </a>
            <div className="post-meta"><span>{podcast.pubDate}</span>
            </div>
            <h2><a href={"/podcast/" + podcast.link}
                   style={{textDecoration: "none"}}>{podcast.title}</a></h2>
            <div><img src="headphone.png" alt="podcast" width={"30px"} height={"30px"} style={{margin: "auto"}}/>
                <span style={{marginLeft: "15px"}}>{audioDuration}</span>
            </div>
        </div>
    );
};

export default Center;