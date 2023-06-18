import React, { useState, useEffect } from 'react';
import annyang from 'annyang';
import {Link, useNavigate } from "react-router-dom";
const SpeechRecognitionComponent = () => {
    const history = useNavigate();
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
    if(text!=''){
        if (text.endsWith('.')) {
            history(`/search/${text.slice(0, -1)}`);
            setText('');
        }
    }
    return (
        <div>
            <button onClick={startListening} style={{border:"none"}}><i className="fa fa-microphone"></i></button>
        </div>
    );
};
export default SpeechRecognitionComponent;
