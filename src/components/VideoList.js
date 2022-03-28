import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onSelect}) => {
    
    return ( 
        <div className="ui container relaxed divided list">

            {videos.map(elm => {

                return <VideoItem onSelect={onSelect} key={elm.id.videoId} video={elm}/>
            })}
            
        </div>
     );
}
 
export default VideoList;