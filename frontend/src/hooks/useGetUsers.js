import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetUsers = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch("/api/v1/users", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                if (!response.ok) {
                    return toast.error("Failed to fetch users");
                }
                const data = await response.json();
                if (data.error) throw new Error(data.error);
                console.log(data);
                setUsers(data);
            } catch (error) {
                throw new Error(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);
    return { loading, users };
};

export default useGetUsers;
