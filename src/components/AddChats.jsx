import { useState } from "react";
import Button from "./Button/Button";

// eslint-disable-next-line react/prop-types
const AddChats = ({ chatadd }) => {
    const [first, setfirst] = useState("");

    const chatAdd = () => {
    
        if (!first.trim()) {
            alert("Please enter a message");
            return;
        }
        chatadd(first.trim());
        setfirst("");
    };

    return (
        <div className="flex items-center justify-between gap-2">
            <input
                value={first}
                onChange={(e) => setfirst(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                type="text"
                placeholder="Enter message..."
            />

            <button
                // disabled={!first}
                className="  text-white px-4 py-2 rounded-lg transition"
                onClick={chatAdd}
            >
                <Button />
            </button>
        </div>
    );
};

export default AddChats;
