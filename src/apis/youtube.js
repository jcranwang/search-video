import axios from "axios";

const KEY = "AIzaSyDU8L7LyZdyULFp1JkZKvixHzkiKBUe5mQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
