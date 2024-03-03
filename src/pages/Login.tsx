// src/components/Login.tsx
import React from "react";
// import './App.css';
import PasswordInput from "./PasswordInput";
import { navigate } from "wouter/use-browser-location";

const Login: React.FC = () => {
    const goToHomePage = () => {
        navigate('/');
    }

    return (
        // <div className="min-h-screen bg-gray-100">
        <div className="min-h-screen">
            <header className="bg-white py-6">
                <div className="flex justify-center">
                    <img src="../src/assets/ATALogo.png" alt="ATA logo" className="h-20" />
                </div>
                <div className="flex justify-center">
                    <h1 className="text-1xl font-bold">Talent Pool Database</h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-0 max-w-md">
                <div className="bg-white p-6 rounded shadow-md">
                    <form action="">
                        <div className="mb-4">
                            <input type="email" placeholder="E-mail" className="w-full border border-black p-1 rounded" />
                        </div>
                        <div>
                            <PasswordInput />
                        </div>
                        <a href="/forgotPassword" className="flex justify-end text-sm text-blue-500 underline mt-2">Forgot your password?</a>
                        {/* <p onClick={handleClick} className="text-right text-sm text-blue-500 underline mt-2" >Forgot your password?</p> */}
                        <div className="mt-4 flex justify-center">
                            <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded" onClick={goToHomePage}>Login</button>
                        </div>
                    </form>
                    <div className="flex items-center my-4 mx-6">
                        <div className="border-t border-gray-900 flex-grow mr-3"></div>
                        <span className="text-gray-900">OR</span>
                        <div className="border-t border-gray-900 flex-grow ml-3"></div>
                    </div>
                    <div className="flex justify-center">
                        <p>Don’t have an account?
                            <a href="/signup" className="text-blue-500 underline ml-2">SIGN UP</a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;

// import React from "react";

// const Login: React.FC = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen">
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <p>Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
//             <p>Don't have an account? <a href="/ForgotPassword" className="text-blue-500">ForgotPassword</a></p>
//         </div>
//     );
// };

// export default Login;
