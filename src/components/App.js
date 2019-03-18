import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videoList: []
    };
  }

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({videoList: response.data.items});
    console.log(this.state.videoList);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <div className="ui grid" />
      </div>
    );
  }
}

export default App;
