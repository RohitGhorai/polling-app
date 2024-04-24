import React, { useState } from "react";
import SearchInput from "./SearchInput";
import ProfilePic from "./ProfilePic";
import useConversation from "../hooks/useConversation";
import { useSocketContext } from "../context/SocketContext";
import LogoutButton from "./LogoutButton";

const Sidebar = ({ users, loading, setOpen }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(selectedConversation?._id);

    const handleSelect = (e, user) => {
        e.preventDefault();
        console.log(user._id);
        setSelectedConversation(user);
        setOpen(false);
    };

    return (
        <div className="flex top-0 flex-col overflow-hidden h-full dark:text-white">
            <div className="p-3 md:p-2 flex flex-row bg-gray-200 border-none dark:bg-gray-700 bg-opacity-10 border rounded-t-md rounded-e-[0] justify-center items-center">
                <SearchInput />
            </div>
            <div className="flex flex-col bg-gray-100 dark:bg-transparent overflow-y-auto">
                {loading ? (
                    <div className="flex flex-col bg-gray-100 dark:bg-transparent overflow-y-auto">
                        {[...Array(10)].map((_, index) => (
                            <div key={index}>
                                <div className="ps-5 p-3 flex justify-start gap-2 items-center animate-pulse">
                                    <div className="h-10 w-10 border rounded-full bg-gray-300 dark:bg-gray-600"></div>
                                    <span className="relative flex mb-7 ml-[-20px] h-3 w-3 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                                    <span className="flex-grow bg-gray-300 dark:bg-gray-600 h-4 rounded-lg"></span>
                                </div>
                                <div className="p-[0.01rem] h-[0.8px] w-full bg-gray-300 dark:bg-gray-600" />
                            </div>
                        ))}
                    </div>
                ) : (
                    users.map((user, index) => (
                        <div key={index} onClick={(e) => handleSelect(e, user)}>
                            <ProfilePic user={user} />
                            {index !== users.length - 1 && (
                                <div className="p-[0.01rem] h-[0.8px] w-full bg-gray-300 dark:bg-gray-600" />
                            )}
                        </div>
                    ))
                )}
            </div>

            <div className="p-3 md:p-2 flex justify-center items-center overflow-hidden h-[50px]">
                <LogoutButton />
            </div>
        </div>
    );
};

export default Sidebar;
