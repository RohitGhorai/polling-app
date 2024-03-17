import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import useGetUsers from "../hooks/useGetUsers";
import { useSocketContext } from "../context/SocketContext";

const Sidebar = ({ users, loading, selected, setSelected, setOpen }) => {
    console.log(selected);

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(selected._id);

    const handleSelect = (e, user) => {
        e.preventDefault();
        setSelected(user);
        setOpen(false);
    };
    return (
        <div className="flex flex-col overflow-hidden h-full dark:text-white">
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
                            <div className="ps-5 p-3 flex justify-start gap-2 items-center hover:bg-gray-300 dark:hover:bg-gray-700 hover:bg-opacity-[0.3] dark:hover:bg-opacity-[0.5] cursor-pointer">
                                <img
                                    src={`https://avatar.iran.liara.run/public/boy?${user.username}`}
                                    className="h-10 w-10 border rounded-full"
                                />
                                <span
                                    className={`relative flex mb-7 ml-[-20px] h-3 w-3 ${
                                        !isOnline && "hidden"
                                    }`}
                                >
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>

                                <span>{user.fullName}</span>
                            </div>
                            <div className="p-[0.01rem] h-[0.8px] w-full bg-gray-300 dark:bg-gray-600" />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Sidebar;
