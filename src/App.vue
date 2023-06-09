<script setup>
import { ref } from "vue";
import DictionaryAPI from "./services/DictionaryAPI";
import TheAppBar from "./components/TheAppBar.vue";
import SearchBar from "./components/SearchBar.vue";
import WordDetails from "./components/WordDetails.vue";
import LoadingError from "./components/LoadingError.vue"

const wordData = ref("");
const error = ref("");

const loadWord = async () => {
	try {
		const response = await DictionaryAPI.getWordData("dictionary");
    wordData.value = response.data[0];
    error.value = ""
	} catch (e) {
		error = e;
	}
};

loadWord();
</script>

<template>
	<v-app>
		<!-- App Bar -->
		<TheAppBar />

		<v-container class="mt-16">
			<!-- Search Bar -->
			<SearchBar />

			<!-- Word Found -->
			<div v-if="!error">
				<!-- Word -->
				<WordDetails />
			</div>

			<!-- Word Not Found -->
			<div v-else class="mx-auto mt-8 d-flex justify-center">
				<LoadingError :error="error" />
			</div>

			<!-- Footer -->
			<div class="mt-10 text-body-2">
				<v-divider></v-divider>
				<p class="mt-6 text-blue-grey-lighten-1">
					Powered by
					<a
						href="https://dictionaryapi.dev/"
						target="_blank"
						class="text-black ml-3"
						>Dictionary API
						<v-icon color="blue-grey-lighten-1" size="medium" class="ml-1"
							>open_in_new</v-icon
						></a
					>
				</p>
			</div>
		</v-container>
	</v-app>
</template>

<style>
.material-symbols-outlined {
	font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

.logo {
	letter-spacing: 1px;
}
</style>
