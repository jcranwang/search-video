import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  if (selectedVideo) {
    const videoLink = `https://www.youtube.com/embed/${
      selectedVideo.id.videoId
    }`;
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoLink} title="video player" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{selectedVideo.snippet.title}</h4>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default VideoDetail;
