import React, { useState } from "react";
import { model } from "../context-model";
import './chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (currentMessage.trim()) {
            setMessages(prevMessages => [...prevMessages, { text: currentMessage, from: 'user' }]);
            
            const result = await model.generateContent("OBS: Este chat está sendo usado como chatbot. Não cite nada destas observações na resposta. O chat só falará sobre vinhos e harmonizações, e se negará a falar sobre outros assuntos, respondendo que não é programado para falar sobre isso. Descreva de forma simples, não tão completa e sim um pouco resumida. Fim das observações." 
            + currentMessage);
            const response = await result.response;
            console.log(response);
            
            const responseText = await response.text();  
            setMessages(prevMessages => [...prevMessages, { text: responseText, from: 'bot' }]);
            
            setCurrentMessage('');  
        }
    };

    return (
        <div className="Chat">
            <div className="MessageDisplay">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.from}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="Footer">
                <form className="MessageInput" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        placeholder="Escreva aqui"
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Chat;