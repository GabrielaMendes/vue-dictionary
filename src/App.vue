<script setup>
import TheAppBar from "./components/TheAppBar.vue"
import SearchBar from "./components/SearchBar.vue"
import WordDetails from "./components/WordDetails.vue"
</script>

<template>
	<v-app>
		<!-- App Bar -->
		<TheAppBar />

		<v-container class="mt-16">
			<!-- Search Bar -->
			<SearchBar />

      <!-- Word -->
      <WordDetails />

      <!-- Footer -->
      <div class="mt-10 text-body-2">
				<v-divider></v-divider>
        <p class="mt-6 text-blue-grey-lighten-1">Powered by 
          <a href="https://dictionaryapi.dev/" target="_blank" class="text-black ml-3">Dictionary API <v-icon color="blue-grey-lighten-1" size="medium" class="ml-1">open_in_new</v-icon></a>
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
