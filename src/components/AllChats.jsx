import { useEffect } from "react"
import ChatCard from "./SignleChat/ChatCard"

// https://caht-app.vercel.app/
// eslint-disable-next-line react/prop-types
const AllChats = ({ chats, user }) => {
    useEffect(() => {
        const scool = document.getElementById("scool");
        if (scool) {
            scool.scrollTop = scool.scrollHeight;
        }

    }, [chats]);
    return (
        <div id="scool" className="h-[320px] w-[42y]  flex flex-col  overflow-auto ">
            {
                // eslint-disable-next-line react/prop-types
                chats && chats.map((cu, i) => {
                    return <ChatCard key={i} data={cu} mychat={cu.user == user} />
                })
            }
        </div>
    )
}

export default AllChats