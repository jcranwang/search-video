import React from "react";
import AppButton from "./AppButton";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  onTermChange = e => {
    this.setState({ term: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onTermChange}
            />
          </div>
          <AppButton text="search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
