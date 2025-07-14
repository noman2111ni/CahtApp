import { MdChatBubbleOutline } from "react-icons/md";
import moment from "moment";
import clsx from "clsx";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const ChatCard = ({ mychat, data }) => {
    if (!data) return null;

    return (
        <div
            className={clsx(
                "flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 transition-colors",
                mychat ? "justify-end" : "justify-start"
            )}
        >
            <div className="w-1/2">
                <h2 className="break-words text-sm flex items-center gap-2 font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-3 rounded-t-md shadow-md">
                    <MdChatBubbleOutline />
                    {data.newChat}
                </h2>

                <p className="text-end text-xs text-gray-500 mt-1">
                    {moment(new Date(data.time)).fromNow()}
                </p>
            </div>
        </div>
    );
};

ChatCard.propTypes = {
    mychat: PropTypes.bool,
    data: PropTypes.shape({
        newChat: PropTypes.string.isRequired,
        time: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Date),
        ]).isRequired,
    }).isRequired,
};

export default ChatCard;
