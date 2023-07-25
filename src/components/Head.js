import React, { useEffect, useState } from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { json } from 'react-router-dom';
import { cacheResults } from '../utils/searchSlice';
const Head=()=>{
    const [searchQuery,setSearchQuery]=useState("");
    const [suggestion,setSuggestion]=useState([]);
    const [showSuggestion,setShowSuggestion]=useState(false);
    const searchCache=useSelector((store)=>store.search);
    const dispatch=useDispatch();
    useEffect(()=>{
       //make api call afetr every key press
       //but if the difference is graeter than 200ms 
       //decline the api call
       const timer=setTimeout(()=>getSearchedSuggestions(),200);
       if(searchCache[searchQuery]){
         setSuggestion(searchCache[searchQuery]);
       }
       else{
         getSearchedSuggestions();
       }
       return ()=>{
        clearTimeout(timer);
       }
    },[searchQuery])
    /*
   key-i
   -render the component
   -useEffect();
   -start timer->make api call after 200ms
   key-ip
   destroy the component if press happens under 200ms
   rerender the component
   -useEffect();








    */
    const getSearchedSuggestions=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json=await data.json();
        console.log(json);
        setSuggestion(json[1]);
        //update the cacheResults
        dispatch(cacheResults({
            [searchQuery]:json[1],
        })
    );
    }
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
            <div className='flex col-span-1'>
              <img 
              onClick={()=>toggleMenuHandler()}
              className="h-8 cursor-pointer" alt="menu"
                   src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png"></img>
              <a href="/">
                <img className="h-8 mx-4" alt="youtube-logo"
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"></img>
             </a>
            </div>
            <div className='col-span-10 px-10'>
                <div className=''>
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full ' type="text"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestion(true)}
                onBlur={()=>setShowSuggestion(false)}
                />
                <button className='border border-gray-400 p-2 rounded-r-full'>search</button>
                </div>
                {showSuggestion&&<div className='bg-white py-2  w-[28rem] shadow-lg rounded-lg border border-gray'>
                <ul>
                    {suggestion.map((s)=>(
                          <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>{s}</li>
                    ))}
                    
                </ul>
            </div>}
            </div>
            
            <div className='col-span-1'>
                <img className="h-8" alt="user"
                     src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"></img>
            </div>
        </div>
    )
}
export default Head;