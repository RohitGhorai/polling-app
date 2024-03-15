import React, { useState } from "react";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const login = async ({ username, password }) => {
        const success = handleErrors({
            username,
            password,
        });
        if (!success) return;
        setLoading(true);

        try {
            const res = await fetch("/api/v1/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await res.json();

            if (data.error) {
                return toast.error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
        } catch (e) {
            toast.error(e.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

export default useLogin;

function handleErrors({ username, password }) {
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    return true;
}
