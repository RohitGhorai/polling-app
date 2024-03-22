import React from "react";

const MessageSkeleton = () => {
    return (
        <>
            {[...Array(7)].map((_, index) => (
                <>
                    {index % 2 === 0 ? (
                        <div
                            key={index}
                            className="flex mx-4 justify-center items-start my-2 flex-col gap-5 bg-gray-100 dark:bg-transparent overflow-y-auto overflow-hidden"
                        >
                            <div className={`flex w-2/5`}>
                                <div className="px-2 pt-6 flex justify-start items-end animate-pulse">
                                    <div className="h-10 w-10 border rounded-full bg-gray-300 dark:bg-gray-600" />
                                </div>
                                <div
                                    className={`h-16 animate-pulse w-full max-w-[320px] py-1 px-3 border-gray-200 bg-gray-100 rounded-e-xl rounded-tl-xl dark:bg-gray-700`}
                                />
                            </div>
                        </div>
                    ) : (
                        <div
                            key={index}
                            className="flex mx-4 justify-center items-end my-2 flex-col gap-5 bg-gray-100 dark:bg-transparent overflow-y-auto overflow-hidden"
                        >
                            <div className={`flex w-2/5`}>
                                <div
                                    className={`h-16 animate-pulse w-full max-w-[320px] py-1 px-3 border-gray-200 bg-gray-100 rounded-se-xl rounded-s-xl dark:bg-gray-700`}
                                />
                                <div className="px-2 pt-6 flex justify-start items-end animate-pulse">
                                    <div className="h-10 w-10 border rounded-full bg-gray-300 dark:bg-gray-600" />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ))}
        </>
    );
};

export default MessageSkeleton;
