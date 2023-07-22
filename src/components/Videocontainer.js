import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard,{AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';
const Videocontainer=()=>{
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        getVideos();
    },[]);
    async function getVideos() {
        const response = await fetch(YOUTUBE_VIDEOS_API);
        const video = await response.json();
        // console.log(video.items[0]);
        setVideos(video.items);
       
      }
    return (
        <div className='flex flex-wrap'>
        {videos[0]&&<AdVideoCard info={videos[0]}/>}
        {videos.map((vid)=>(
        <Link to={"/watch?v="+vid.id}>
            <VideoCard key={vid.id} info={vid}/>
        </Link>
        ))
           
    }
        </div>
    )
}
export default Videocontainer;