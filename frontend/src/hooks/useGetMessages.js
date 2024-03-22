import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "./useConversation";

const useGetMessages = () => {
    const [messagesLoading, setMessagesLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setMessagesLoading(true);
            try {
                const res = await fetch(
                    `/api/v1/messages/${selectedConversation._id}`
                );
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                console.log(data);
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setMessagesLoading(false);
            }
        };

        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { messages, messagesLoading };
};
export default useGetMessages;
