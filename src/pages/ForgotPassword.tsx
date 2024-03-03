import React from "react";

const ForgotPassword: React.FC = () => {
    return (
        <div className="min-h-screen">
            <header className="bg-white py-6">
                <div className="flex justify-center">
                    <img src="../src/assets/ATALogo.png" alt="ATA logo" className="h-20" />
                </div>
                <div className="flex justify-center">
                    <h1 className="text-1xl font-bold">Talent Pool Database</h1>
                </div>
                <main className="container mx-auto px-4 py-0 max-w-md">
                    <div className="bg-white p-6 rounded shadow-md">
                        <p className="text-sm text-center text-gray-600">Forgot your password? Enter your email address below, and we'll send you instructions to reset it.</p>
                        <div className="mb-4 mt-4">
                            <input type="email" placeholder="E-mail" className="w-full border border-black p-1 rounded" />
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded" >Request reset link</button>
                        </div>
                        <div className="flex items-center my-4 mx-6">
                            <div className="border-t border-gray-900 flex-grow mr-3"></div>
                            <span className="text-gray-900">OR</span>
                            <div className="border-t border-gray-900 flex-grow ml-3"></div>
                        </div>
                        <div className="flex justify-center">
                            <p>Back to
                                <a href="/login" className="text-blue-500 underline ml-2">Login</a>
                            </p>
                        </div>
                    </div>
                </main>
            </header>
        </div>
    );
};

export default ForgotPassword;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const ForgotPassword: React.FC = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         // Handle form submission logic here
//         console.log('Email:', email);
//         navigate('/login');
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center">
//             <div className="w-full max-w-md">
//                 <div className="text-center">
//                     <h1 className="text-4xl font-bold mb-4">Advanced Technology Asia</h1>
//                     <p className="text-gray-600">Forgot your password? Enter your email address below, and we'll send you instructions to reset it.</p>
//                 </div>
//                 <form onSubmit={handleSubmit} className="mt-8 bg-white shadow-md rounded-lg p-8">
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(event) => setEmail(event.target.value)}
//                             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             placeholder="Enter your email"
//                             required
//                         />
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                             Request Reset Link
//                         </button>
//                         <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
//                             Back to Login
//                         </Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ForgotPassword;

// import React from "react";

// const ForgotPassword: React.FC = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen">
//             <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
//             <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
//         </div>
//     );
// };

// export default ForgotPassword;