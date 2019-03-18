import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectedVideo }) => {
  const showVideoList = videos.map(video => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onSelectedVideo={onSelectedVideo}
      />
    );
  });
  return <div className="ui relaxed divided list">{showVideoList}</div>;
};

export default VideoList;
