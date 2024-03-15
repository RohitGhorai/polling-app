import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({
        firstName,
        lastName,
        username,
        password,
        confirmPassword,
        gender,
    }) => {
        const success = handleErrors({
            firstName,
            lastName,
            username,
            password,
            confirmPassword,
            gender,
        });
        if (!success) return;
        const fullName = `${firstName} ${lastName}`;
        setLoading(true);
        try {
            const res = await fetch("/api/v1/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    username,
                    password,
                    confirmPassword,
                    gender,
                }),
            });

            const data = await res.json();

            if (data.error) return toast.error(data.error);

            localStorage.setItem("chat-user", JSON.stringify(data));
        } catch (e) {
            toast.error(e.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleErrors({
    firstName,
    lastName,
    username,
    password,
    confirmPassword,
    gender,
}) {
    if (
        [firstName, lastName, username, password, confirmPassword, gender].some(
            (field) => field?.trim() === ""
        )
    ) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("passwords do not match");
        return false;
    }

    if (username.length < 8) {
        toast.error("username must be at least 8 characters");
        return false;
    }

    if (password.length < 6) {
        toast.error("password must be at least 6 characters");
        return false;
    }

    return true;
}
