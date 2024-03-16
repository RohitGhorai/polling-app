import React from "react";
import Conversation from "./Conversation";

const ConversationContainer = () => {
    return (
        <div className="flex flex-col h-full overflow-y-auto">
            <div className=" flex items-end p-2 flex-col w-full h-fit">
                <Conversation />
            </div>
            <div className=" flex items-start p-2 flex-col w-full h-fit">
                <Conversation type={"received"} />
            </div>
            <div className=" flex items-end p-2 flex-col w-full h-fit">
                <Conversation />
            </div>
            <div className=" flex items-start p-2 flex-col w-full h-fit">
                <Conversation type={"received"} />
            </div>
            <div className=" flex items-end p-2 flex-col w-full h-fit">
                <Conversation />
            </div>
            <div className=" flex items-start p-2 flex-col w-full h-fit">
                <Conversation type={"received"} />
            </div>
            <div className=" flex items-end p-2 flex-col w-full h-fit">
                <Conversation />
            </div>
            <div className=" flex items-start p-2 flex-col w-full h-fit">
                <Conversation type={"received"} />
            </div>
        </div>
    );
};

export default ConversationContainer;
