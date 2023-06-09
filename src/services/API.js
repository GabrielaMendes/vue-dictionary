import axios from "axios";

export default (url = "https://api.dictionaryapi.dev/api/v2/entries/en") => {
	return axios.create({
		baseURL: url,
	});
};
