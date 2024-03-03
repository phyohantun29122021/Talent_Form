// src/components/SignUp.tsx
import React from "react";
import PasswordInput from "./PasswordInput";
import ConfirmPassword from "./ConfirmPassword";
import { navigate } from "wouter/use-browser-location";

const SignUp: React.FC = () => {
    const goToHomePage = () => {
        navigate('/');
    }

    return (
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
                            <input type="username" placeholder="Username" className="w-full border border-black p-1 rounded" />
                        </div>
                        <div className="mb-4">
                            <input type="email" placeholder="E-mail" className="w-full border border-black p-1 rounded" />
                        </div>
                        <div className="mb-4">
                            <PasswordInput />
                        </div>
                        <div>
                            <ConfirmPassword />
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded" onClick={goToHomePage}>Sign Up</button>
                        </div>
                    </form>
                    <div className="flex items-center my-4 mx-6">
                        <div className="border-t border-gray-900 flex-grow mr-3"></div>
                        <span className="text-gray-900">OR</span>
                        <div className="border-t border-gray-900 flex-grow ml-3"></div>
                    </div>
                    <div className="flex justify-center">
                        <p>Already have an account?
                            <a href="/login" className="text-blue-500 underline ml-2">Login</a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignUp;


// src/components/SignUp.tsx
// import React from "react";

// const SignUp: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//       <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
//     </div>
//   );
// };

// export default SignUp;

