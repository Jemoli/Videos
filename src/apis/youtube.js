import axios from "axios";

const KEY = "AIzaSyDQSL9TaBMmzaag-nJC_T597xAVXjX1IIQ";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
