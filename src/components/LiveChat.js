import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDeferredValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generaterandomName, makeRandomMessage } from "../utils/helper";
const LiveChat=()=>{
    const [LiveMessage,setLivemessage]=useState("");
    const dispatch=useDispatch();
    const ChatMessages=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i=setInterval(()=>{
          //API polling
          console.log("api polling")
          dispatch(
            addMessage({
                name:generaterandomName(),
                message:makeRandomMessage(20),
            })
          );
        },2000);
        return ()=>clearInterval(i);
     },[])
    return(
        <>
        <div className=" w-full h-[420px] ml-2 p-2 border border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
          <div>
          {ChatMessages.map((c,i)=>(
             <ChatMessage  key={i} name={c.name} message={c.message}/>
          ))}
        </div>
       
        </div>
        <form className="w-full p-2 ml-2 border border-black"
        onSubmit={(e)=>{
           e.preventDefault();
           dispatch(addMessage({
              name:"suraj yadav",
              message:LiveMessage
           }))
        }}
        >
            <input className="w-88" type="text" value={LiveMessage} 
            onChange={(e)=>{
                setLivemessage(e.target.value);
            }}
            />
            <button className="px-2 mx-2 bg-green-100">Submit</button>
         </form>
        </>
    )
}
export default LiveChat;