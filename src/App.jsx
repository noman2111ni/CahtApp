import { useEffect, useState } from "react";
import AddChats from "./components/AddChats";
import AllChats from "./components/AllChats";
import LoginPage from "./components/Auth/LoginPage";
const App = () => {
  const [chat, setchat] = useState(JSON.parse(localStorage.getItem("chats")) || []);
  const [user, setUser] = useState('');
  const addNewChat = (newChat) => {
    const chats = {
      newChat,
      time: new Date(),
      user: user
    }
    const updatedChats = [...chat, chats];
    setchat(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));
  }
useEffect(() => {
  const handleStorageChange = (e) => {
    if (e.key === "chats") {
      const updated = JSON.parse(localStorage.getItem("chats"));
      setchat(updated || []);
    }
    return () => {
      setUser(localStorage.getItem("user") || '');
    }
  };
  window.addEventListener("storage", handleStorageChange);
  return () => window.removeEventListener("storage", handleStorageChange);
}, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4 py-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl bg-white border border-gray-200 rounded-lg shadow-md flex flex-col h-screen">
        <h1 className="text-center text-2xl font-semibold p-4 border-b text-blue-600 border-gray-300">
          Chat Application {user}
        </h1>
        {
          user ? (
            <>
              <div className="flex-1 overflow-y-auto px-4 py-2">
                <AllChats chats={chat} user={user} />
              </div>
              <div className="border-t border-gray-300 px-4 py-3">
                <AddChats chatadd={addNewChat} />
              </div>
            </>
          ) :
            (
              <LoginPage setuser={setUser} />
            )
        }
      </div>
    </div>
  );
};

export default App;
