import React from "react";

const SendMessage = () => {
    return (
        <form className="relative w-full p-2">
            <input
                type="text"
                id="search-dropdown"
                className="block rounded-lg  p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Send a message..."
                required
            />
            <button
                type="submit"
                className="absolute top-2 end-2 py-2 px-3 text-sm font-medium text-gray-600 hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-200 rounded-e-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
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
