import React, { useState, useEffect } from 'react';
import annyang from 'annyang';
import {Link, useHistory } from "react-router-dom";
const SpeechRecognitionComponent = () => {
    const history = useHistory();
    const [text, setText] = useState('');

    function handleInput(input) {
        setText(input);
    }
    function startListening() {
        // Khởi tạo recognition object
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'vi-VN';
        // Khi nhận dạng có kết quả trả về, set giá trị văn bản vào input
        recognition.onresult = function(event) {
            const result = event.results[event.resultIndex][0].transcript;
            handleInput(result);
        };

        recognition.start();
    }

    if (annyang) {
        // Định nghĩa lệnh bằng giọng nói
        const commands = {
            'type *text': function(text) {
                handleInput(text);
            }
        };
        // Thêm lệnh cho annyang
        annyang.addCommands(commands);
    }
    if (text.endsWith('.')) {
        setText(text.slice(0, -1));
        history('search/'+text);
    }
    return (
        <div>
            <button onClick={startListening}>Bắt đầu nhận dạng giọng nói</button>
            {/*<input type="text" style={{display:"none"}} value={text} onChange={(event) => handleInput(event.target.value)} />*/}
            <p>{text}</p>
            <Link to={`/search/${text}`}><button style={{border:"none"}}><i className="fa fa-search"></i></button></Link>
        </div>
    );
};
export default SpeechRecognitionComponent;
