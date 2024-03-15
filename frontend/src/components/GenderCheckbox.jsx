import React, { useState } from "react";

const GenderCheckbox = ({ handleChange, checked }) => {
    return (
        <>
            <div className="ms-6 flex items-center mb-4">
                <input
                    id="male"
                    type="checkbox"
                    value="Male"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={checked === "Male"}
                    onChange={() => handleChange("Male")}
                />
                <label
                    htmlFor="male"
                    className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                    Male
                </label>
            </div>
            <div className="ms-6 flex items-center mb-4">
                <input
                    id="female"
                    type="checkbox"
                    value="Female"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={checked === "Female"}
                    onChange={() => handleChange("Female")}
                />
                <label
                    htmlFor="female"
                    className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                    Female
                </label>
            </div>
        </>
    );
};

export default GenderCheckbox;
