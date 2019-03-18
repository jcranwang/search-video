import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      selectedVideo: null
    };
  }

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videoList: response.data.items, selectedVideo: response.data.items[0]});
    console.log(this.state.videoList);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videoList}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
