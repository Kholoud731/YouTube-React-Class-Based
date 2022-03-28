import React from "react";
import "../css/video.css"

const VideoItem = ({video, onSelect}) => {
    // console.log(video)
    return ( 
        <div className="video-item item" onClick={() => onSelect(video)}>
            <img alt={video.snippet.title}
            className="ui image" 
            src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>

        </div>
     );
}
 
export default VideoItem;