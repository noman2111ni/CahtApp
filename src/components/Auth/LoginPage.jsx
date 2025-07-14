import { useState } from "react";

const LoginPage = ({ setuser }) => {
    const [input, setinput] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!input.trim()) {
            alert("Please enter a valid username");
            return;
        }
        setuser(input.trim());
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Welcome to the Chat Application
                </h2>

                <div className="flex flex-col gap-4">
                    <input
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                        type="text"
                        placeholder="Enter your username"
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={handleLogin}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
