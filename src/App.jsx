import { useEffect, useState } from "react";
import AddChats from "./components/AddChats";
import AllChats from "./components/AllChats";
import LoginPage from "./components/Auth/LoginPage";

const App = () => {
  const [chat, setChat] = useState(JSON.parse(localStorage.getItem("chats")) || []);
  const [user, setUser] = useState('');

  const addNewChat = (newChat) => {
    const chats = {
      newChat,
      time: new Date(),
      user: user,
    };
    const updatedChats = [...chat, chats];
    setChat(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "chats") {
        const updated = JSON.parse(localStorage.getItem("chats"));
        setChat(updated || []);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl overflow-hidden flex flex-col h-[480px]">
        {/* Header */}
        <header className="bg-blue-600 text-white text-center py-4 px-6 text-xl font-bold shadow-md">
          Chat App {user && `- ${user}`}
        </header>

        {/* Content */}
        {user ? (
          <>
            {/* Chat Display */}
            <div className="flex-1 overflow-y-auto px-4 py-3 custom-scrollbar">
              <AllChats chats={chat} user={user} />
            </div>

            {/* Chat Input */}
            <div className="border-t px-4 py-3 bg-gray-50">
              <AddChats chatadd={addNewChat} />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center p-4">
            <LoginPage setuser={setUser} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
