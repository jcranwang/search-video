import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <div className="video-item item" onClick={() => onSelectedVideo(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
