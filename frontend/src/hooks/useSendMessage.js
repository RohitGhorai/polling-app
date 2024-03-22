import React, { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "./useConversation";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const sendMessage = async (message) => {
        console.log(message);

        if (!message) return toast.error("Message field is blank");
        setLoading(true);
        try {
            const res = await fetch(
                `/api/v1/messages/send/${selectedConversation._id}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        message,
                    }),
                }
            );

            const data = await res.json();

            if (data.error) return toast.error(data.error);
            setMessages([...messages, data]);
        } catch (e) {
            toast.error(e.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, sendMessage };
};

export default useSendMessage;
