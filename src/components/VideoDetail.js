import React from "react";

const VideoDetail = ({video}) => {
    return ( 
        <>
        <div className="ui container segment">
        <div className="ui embed">
            <iframe 
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title="Youtube video player"
            />
        </div>
        </div>

        <div className="ui container segment">
            <div className="ui header">
                {video.snippet.title}
            </div>
            <p>{video.snippet.description}</p>
        </div>
</>
     );
}
 
export default VideoDetail;