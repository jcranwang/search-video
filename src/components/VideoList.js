import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const showVideoList = this.props.videos.map((video) => {
      return <VideoItem video={video} key={video.id.videoId}/>
    });
    return <div className="ui relaxed divided list">{showVideoList}</div>
  }
}

export default VideoList;