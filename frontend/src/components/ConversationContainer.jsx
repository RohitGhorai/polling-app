import React, { useEffect, useRef, useState } from "react";
import Conversation from "./Conversation";
import Sidebar from "../components/Sidebar";
import SendMessage from "../components/SendMessage";
import Hamburger from "hamburger-react";
import useGetMessages from "../hooks/useGetMessages";
import { useAuthContext } from "../context/AuthContext";
import { useSocketContext } from "../context/SocketContext";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import useConversation from "../hooks/useConversation";
import useListenMessages from "../hooks/useListenMessages";

const ConversationContainer = ({ users, loading }) => {
    const [isOpen, setOpen] = useState(false);
    const { authUser } = useAuthContext();
    // const [allMessage, aetAllMessage] = useState(messages);
    const { selectedConversation } = useConversation();
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(selectedConversation?._id);
    const { messages, messagesLoading } = useGetMessages();
    const isSelected = selectedConversation !== null;
    // if (isSelected)
    console.log(isSelected);
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);

    console.log(isOnline);

    return (
        <div className="md:border-e md:border-y md:border-l-1 border rounded-md md:rounded-s-none md:rounded-e-md flex flex-col h-full w-full md:w-3/4 overflow-hidden dark:text-gray-200">
            {isOpen && (
                <Sidebar users={users} loading={loading} setOpen={setOpen} />
            )}
            {isSelected ? (
                <>
                    <div className="flex w-fit z-10 flex-row gap-3 justify-start items-center p-2 fixed">
                        <button className={`md:hidden block`}>
                            <Hamburger
                                toggled={isOpen}
                                size={20}
                                toggle={setOpen}
                            />
                        </button>
                        <img
                            src={`https://avatar.iran.liara.run/public/boy?${selectedConversation?.username}`}
                            className={`w-[40px] h-[40px] p-[0.04rem] border rounded-full ${
                                isOpen && "hidden"
                            }`}
                        />
                        <span
                            className={`relative flex mb-7 ml-[-25px] h-3 w-3 ${
                                (isOpen || !isOnline) && "hidden"
                            }`}
                        >
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        <span className={`${isOpen && "hidden"}`}>
                            {selectedConversation?.fullName}
                        </span>
                    </div>

                    <div
                        className={`h-full ps-1 pt-[60px] overflow-auto ${
                            isOpen && "hidden"
                        }`}
                    >
                        {messagesLoading ? (
                            <MessageSkeleton />
                        ) : (
                            <div className="flex flex-col h-full overflow-y-auto">
                                {messages?.map((message, index) => (
                                    <div
                                        id={index}
                                        key={index}
                                        ref={lastMessageRef}
                                        className={`flex ${
                                            authUser.data?._id ===
                                            message?.receiverId
                                                ? "items-start"
                                                : "items-end"
                                        } p-1 flex-col w-full h-fit`}
                                    >
                                        <Conversation message={message} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div
                        className={`${
                            isOpen && "hidden"
                        } flex flex-row bg-gray-300 dark:bg-gray-600 rounded-e-md rounded-t-none justify-between pe-1 items-center`}
                    >
                        <SendMessage selectedUser={selectedConversation} />
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
                </>
            ) : (
                <>
                    <div className="flex w-fit z-10 flex-row gap-3 justify-start items-center p-2 fixed">
                        <button className={`md:hidden block`}>
                            <Hamburger
                                toggled={isOpen}
                                size={20}
                                toggle={setOpen}
                            />
                        </button>
                    </div>
                    <div
                        className={`flex flex-col gap-3 justify-center h-full ${
                            isOpen && "hidden"
                        } items-center overflow-hidden dark:text-gray-200`}
                    >
                        <span className="text-3xl text-gray-600 dark:text-gray-300 font-medium">
                            Welcome 👋{" "}
                            <span className="text-blue-600">
                                {authUser.data?.fullName} ❄
                            </span>
                        </span>
                        <p>Select a chat to start messaging</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default ConversationContainer;
