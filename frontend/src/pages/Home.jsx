import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ConversationContainer from "../components/ConversationContainer";
import SendMessage from "../components/SendMessage";
import Hamburger from "hamburger-react";

const Home = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="flex justify-center items-center overflow-hidden h-screen">
            <div className="flex flex-row justify-center items-center h-[80%] w-[80%] rounded-md dark:border-gray-600">
                <div className="hidden border-s border-y rounded-s-md md:block h-full w-[300px]">
                    <Sidebar />
                </div>
                <div className="md:border-e md:border-y md:border-l-0 border rounded-md md:rounded-s-none md:rounded-e-md flex flex-col h-full w-full md:w-3/4 overflow-hidden dark:text-gray-200">
                    <div className="flex w-fit z-10 flex-row gap-3 justify-start items-center p-2 fixed">
                        <button className={`md:hidden block`}>
                            <Hamburger
                                toggled={isOpen}
                                size={20}
                                toggle={setOpen}
                            />
                        </button>
                        <img
                            src="https://avatar.iran.liara.run/public/boy?rock"
                            className={`w-[40px] h-[40px] border rounded-full ${
                                isOpen && "hidden"
                            }`}
                        />
                        <span className={`${isOpen && "hidden"}`}>
                            Rohit Ghorai
                        </span>
                    </div>

                    {isOpen && <Sidebar />}
                    <div
                        className={`h-full ps-1 pt-[60px] overflow-auto ${
                            isOpen && "hidden"
                        }`}
                    >
                        <ConversationContainer />
                    </div>
                    {/* <div className="flex flex-row gap-3 justify-start items-center p-2"> */}
                    <div
                        className={`${
                            isOpen && "hidden"
                        } flex flex-row bg-gray-300 dark:bg-gray-600 rounded-e-md rounded-t-none justify-between pe-1 items-center`}
                    >
                        <SendMessage />
                        <button className="p-1 text-gray-600 hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-200">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="2em"
                                width="2em"
                            >
                                <path d="M.002 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-12a2 2 0 01-2-2V3zm1 9v1a1 1 0 001 1h12a1 1 0 001-1V9.5l-3.777-1.947a.5.5 0 00-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 00-.63.062L1.002 12zm5-6.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                            </svg>
                        </button>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
