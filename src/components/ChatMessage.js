const ChatMessage=({name,message})=>{
    return(
        <div className="flex items-center shadow-sm">
            <img
             className="h-8"
             alt="user"
             src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            />
            <span className="font-bold px-2">
                {name}
            </span>

            <span>
                {message}
            </span>
        </div>
    )
}
export default ChatMessage;
