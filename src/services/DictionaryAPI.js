import API from "./API";

export default {
	getWordData(word) {
		return API().get(`/${word}`);
	},
};
