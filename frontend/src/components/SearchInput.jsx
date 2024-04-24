import React, { useState } from "react";
import useConversation from "../hooks/useConversation";
import toast from "react-hot-toast";
import useGetUsers from './../hooks/useGetUsers';

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { users } = useGetUsers();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error(
                "Search term must be at least 3 characters long"
            );
        }

        const conversation = users.find((c) =>
            c.fullName?.toLowerCase().includes(search.toLowerCase())
        );

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!");
    };
    console.log(search);
    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center justify-between w-[80%]"
        >
            <label htmlFor="simple-search" className="sr-only">
                Search
            </label>
            <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(17,24,39,0.9)] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button
                type="submit"
                className="p-2.5 ms-1.5 text-sm font-medium text-gray-600 hover:text-gray-700 dark:text-white hover:dark:text-gray-500 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-blue-300 dark:hover:bg-gray-800 dark:focus:ring-gray-900"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                >
                    <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                    <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 00-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z" />
                </svg>
            </button>
        </form>
    );
};

export default SearchInput;
