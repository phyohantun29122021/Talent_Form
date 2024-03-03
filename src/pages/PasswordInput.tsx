import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const PasswordInput = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPasswordVisible(!passwordVisible)
    };

    return (
        <div className="relative">
            <input type={passwordVisible ? "text" : "password"} placeholder="Password" className="w-full border border-black p-1 rounded" />
            <button className="absolute top-0 right-3 h-full w-10 flex items-center justify-center" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} className="text-gray-800 hover:text-gray-600" />
            </button>
        </div>
    );
};

export default PasswordInput;
