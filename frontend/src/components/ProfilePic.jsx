import { useSocketContext } from "../context/SocketContext";

const ProfilePic = ({ user }) => {
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(user._id);
    
    return (
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
    );
};

export default ProfilePic;
