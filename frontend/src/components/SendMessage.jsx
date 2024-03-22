import React, { useState } from "react";
import useSendMessage from "../hooks/useSendMessage";

const SendMessage = () => {
    const [message, setMessage] = useState("");

    const { loading, sendMessage } = useSendMessage();

    const handleSend = async (e) => {
        e.preventDefault();
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form className="relative w-full p-2">
            <input
                type="text"
                id="search-dropdown"
                value={message}
                className="block rounded-lg dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(17,24,39,0.9)]  p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Send a message..."
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                type="submit"
                disabled={message.trim() === ""}
                className="absolute top-2 end-2 py-2 px-3 text-sm font-medium text-gray-600 hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-200 rounded-e-lg focus:outline-none"
                onClick={(e) => handleSend(e, message)}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.8em"
                    width="1.8em"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                </svg>
            </button>
        </form>
    );
};

export default SendMessage;
