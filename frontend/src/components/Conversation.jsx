import { useAuthContext } from "../context/AuthContext";
import { useSocketContext } from "../context/SocketContext";

const Conversation = ({ message, selectedUser }) => {
    const { authUser } = useAuthContext();
    const receiverId = authUser.data._id === message.receiverId;

    const currDate = new Date();

    const dateTimeString = message.createdAt;
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1; // Months are zero-based (0-11), so add 1
    const day = dateTime.getDate();

    const hours = String(dateTime.getUTCHours()).padStart(2, "0");
    const minutes = String(dateTime.getUTCMinutes()).padStart(2, "0");

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const addSuffix = (day) => {
        if (day === 1 || day === 21 || day === 31) {
            return day + "st";
        } else if (day === 2 || day === 22) {
            return day + "nd";
        } else if (day === 3 || day === 23) {
            return day + "rd";
        } else {
            return day + "th";
        }
    };



    return (
        <>
            {!(currDate.getDate() === day &&
                currDate.getMonth() + 1 === month &&
                currDate.getFullYear() === year &&
                year) && (
                <div className="flex justify-center mb-3 items-center w-full">
                    <span className="px-3 py-[2px] rounded-3xl text-xs dark:text-gray-500 bg-gray-300 dark:bg-gray-900">
                        {addSuffix(day)} {monthNames[month-1]}, {year}
                    </span>
                </div>
            )}
            {message && (
                <div className="flex items-end gap-2.5">
                    {receiverId && (
                        <img
                            className="lg:block hidden w-8 h-8 rounded-full"
                            src={`https://avatar.iran.liara.run/public/boy?${selectedUser.username}`}
                            alt="Jese image"
                        />
                    )}
                    <div
                        className={`flex flex-col w-full max-w-[320px] leading-1.5 py-1 px-3 border-gray-200 bg-gray-100 ${
                            receiverId
                                ? "rounded-ss-xl rounded-e-xl"
                                : "rounded-tr-xl rounded-s-xl"
                        } dark:bg-gray-700`}
                    >
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                            {message?.message}
                        </p>
                        <div className="flex flex-row items-center gap-2 justify-between">
                            <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M12.354 4.354a.5.5 0 00-.708-.708L5 10.293 1.854 7.146a.5.5 0 10-.708.708l3.5 3.5a.5.5 0 00.708 0l7-7zm-4.208 7l-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 01.708.708l-7 7a.5.5 0 01-.708 0z" />
                                    <path d="M5.354 7.146l.896.897-.707.707-.897-.896a.5.5 0 11.708-.708z" />
                                </svg>
                            </span>
                            <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                                {hours}:{minutes}
                            </span>
                        </div>
                    </div>
                    {!receiverId && (
                        <img
                            className="lg:block hidden w-8 h-8 rounded-full"
                            src={`https://avatar.iran.liara.run/public/boy?${authUser.username}`}
                            alt="Jese image"
                        />
                    )}
                    {/* <button
                    id="dropdownMenuIconButton"
                    data-dropdown-toggle="dropdownDots"
                    data-dropdown-placement="bottom-start"
                    className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                    type="button"
                >
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 4 15"
                    >
                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                </button>
                <div
                    id="dropdownDots"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconButton"
                    >
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Reply
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Forward
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Copy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Report
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </li>
                    </ul>
                </div> */}
                </div>
            )}
        </>
    );
};

export default Conversation;
