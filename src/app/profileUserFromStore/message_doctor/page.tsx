"use client";
import React, { useState, useEffect } from "react";

const predefinedReplies = [
  "Здравствуйте! Чем могу помочь?",
  "Можете описать симптомы подробнее?",
  "Понимаю. А когда это началось?",
  "Рекомендую записаться на приём.",
  "Пожалуйста, не забывайте пить больше воды и отдыхать.",
];

const MessageDoctor = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "doctor", text: "Здравствуйте! Я ваш виртуальный доктор." },
  ]);
  const [input, setInput] = useState("");
  const [replyIndex, setReplyIndex] = useState(0);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    // Автоответ доктора с задержкой
    setTimeout(() => {
      if (replyIndex < predefinedReplies.length) {
        setMessages((prev) => [
          ...prev,
          { sender: "doctor", text: predefinedReplies[replyIndex] },
        ]);
        setReplyIndex((prev) => prev + 1);
      }
    }, 1000);
  };

  return (
    <section className="pt-32 px-5 max-w-xl mx-auto">
      <h1 className="text-5xl font-bold text-[#537494] mb-8">MessageDoctor</h1>
      <div className="border rounded-xl p-4 h-96 overflow-y-auto bg-white shadow-md mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg max-w-[70%] ${
              msg.sender === "user"
                ? "bg-blue-100 self-end ml-auto"
                : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Напишите сообщение..."
        />
        <button
          onClick={handleSend}
          className="bg-[#537494] text-white px-4 py-2 rounded-lg hover:bg-[#3e5e78]"
        >
          Отправить
        </button>
      </div>
    </section>
  );
};

export default MessageDoctor;
