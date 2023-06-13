<script setup>
import { onMounted, ref } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";
import { useFonts } from "./composables/useFonts";
import DictionaryAPI from "./services/DictionaryAPI";
import TheAppBar from "./components/TheAppBar.vue";
import SearchBar from "./components/SearchBar.vue";
import WordDetails from "./components/WordDetails.vue";
import LoadingError from "./components/LoadingError.vue";

const wordData = ref("");
const error = ref("");
const loading = ref(true);
const theme = useTheme();
const { setFont } = useFonts();

const loadWordData = async (word) => {
	try {
		const response = await DictionaryAPI.getWordData(word);
		wordData.value = response.data[0];
		error.value = "";
	} catch (e) {
		error.value = e;
	}
};

const onSearchRequest = async (word) => {
	loading.value = true;
	await loadWordData(word);
	loading.value = false;
};

onMounted(async () => {
	await loadWordData("keyboard");
	loading.value = false;

	theme.global.name.value = localStorage.getItem("theme") || "light";
	
  const fontFamily = localStorage.getItem("font") || "serif";
	setFont(fontFamily);
});
</script>

<template>
	<v-app class="customFont">
		<!-- App Bar -->
		<TheAppBar />

		<v-container class="mt-16">
			<!-- Search Bar -->
			<SearchBar @search-request="onSearchRequest" />

			<!-- Progress Bar -->
			<v-progress-linear
				v-if="loading"
				indeterminate
				:height="7"
				rounded
				bg-color="tertiary"
				color="primary"
				class="mt-4"
			></v-progress-linear>

			<!-- Request Completed -->
			<div v-else>
				<!-- Word Found -->
				<div v-if="!error">
					<WordDetails :wordData="wordData" />
				</div>
				<!-- Word Not Found -->
				<div v-else class="mx-auto mt-8 d-flex justify-center">
					<LoadingError :error="error" />
				</div>
			</div>

			<!-- Footer -->
			<div class="mt-10 text-body-2">
				<v-divider></v-divider>
				<p class="mt-6 text-text-secondary">
					Powered by
					<a
						href="https://dictionaryapi.dev/"
						target="_blank"
						class="text-text-primary ml-3"
						>Dictionary API
						<v-icon color="text-secondary" size="medium" class="ml-1"
							>open_in_new</v-icon
						></a
					>
				</p>
			</div>
		</v-container>
	</v-app>
</template>

<style lang="scss">
.material-symbols-outlined {
	font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

.logo {
	letter-spacing: 1px;
}

.v-application {
	.v-theme--light:not(.v-btn) {
		color: rgb(var(--v-theme-text-primary));

		[class*="text-"] {
			color: rgb(var(--v-theme-text-primary));
		}
	}

	.v-theme--dark:not(.v-btn) {
		color: rgb(var(--v-theme-text-primary));

		[class*="text-"] {
			color: rgb(var(--v-theme-text-primary));
		}
	}
}
</style>
