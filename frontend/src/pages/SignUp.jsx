import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, GenderCheckbox } from "../components";
import useSignup from "../hooks/useSignup";
import toast from "react-hot-toast";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });
    const navigate = useNavigate();
    const { loading, signup } = useSignup();

    const handleCheckBoxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleChange = (e, field) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [field]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
        toast.success("User registered successfully..");
        navigate("/login");
    };
    console.log(inputs);
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <div className="w-[80%] md:w-[40%] p-3 lg:w-[30%] bg-gray-100 dark:bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm dark:bg-opacity-20 border-[0.5px] border-gray-400">
                <span className="flex flex-row justify-center items-center py-3 text-xl md:text-3xl font-semibold dark:text-gray-300">
                    Sign-up&nbsp;
                    <span className="text-blue-500">Web-Chat</span>
                </span>

                <form
                    className="max-w-md mx-auto pt-5 px-2"
                    onSubmit={handleSubmit}
                >
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <Input
                            type={"text"}
                            label={"First Name"}
                            value={inputs.firstName}
                            handleChange={(e) => handleChange(e, "firstName")}
                        />
                        <Input
                            type={"text"}
                            label={"Last Name"}
                            value={inputs.lastName}
                            handleChange={(e) => handleChange(e, "lastName")}
                        />
                    </div>
                    <Input
                        type={"text"}
                        label={"Username"}
                        value={inputs.username}
                        handleChange={(e) => handleChange(e, "username")}
                    />
                    <Input
                        type={"password"}
                        label={"Password"}
                        value={inputs.password}
                        handleChange={(e) => handleChange(e, "password")}
                    />
                    <Input
                        type={"password"}
                        label={"Confirm Password"}
                        value={inputs.confirmPassword}
                        handleChange={(e) => handleChange(e, "confirmPassword")}
                    />

                    <div className="flex items-center mb-4">
                        <span className="flex items-center mb-4 text-gray-500 dark:text-gray-400">
                            Gender
                        </span>
                        <GenderCheckbox
                            handleChange={handleCheckBoxChange}
                            checked={inputs.gender}
                        />
                    </div>

                    <div className="flex justify-center items-center py-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-1/2 text-white text-sm md:text-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {loading ? (
                                <svg
                                    aria-hidden="true"
                                    role="status"
                                    className="inline w-4 h-4 me-3 text-white animate-spin"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            ) : (
                                "Sign Up to your account"
                            )}
                        </button>
                    </div>
                    <div className="flex justify-center text-xs font-medium">
                        <span className="text-gray-600 dark:text-gray-300 font-semibold">
                            Already have an account? &nbsp;
                        </span>
                        <Link to={"/"}>
                            <span className="cursor-pointer text-blue-700 hover:underline dark:text-blue-500">
                                Login account
                            </span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
