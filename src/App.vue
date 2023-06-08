<script setup>
import TheAppBar from "./components/TheAppBar.vue"
import SearchBar from "./components/SearchBar.vue"
</script>

<template>
	<v-app>
		<!-- App Bar -->
		<TheAppBar />

		<v-container class="mt-16">
			<!-- Search Bar -->
			<SearchBar />

			<!-- Word Phonetics -->
			<div
				class="d-flex justify-space-between align-center w-100 mt-8"
				elevation="0"
			>
				<div>
					<h3 class="text-h2 font-weight-medium">keyboard</h3>
					<p class="text-primary text-h5 font-weight-normal mt-4">/'kibc:d/'</p>
				</div>
				<v-btn size="70" variant="tonal" color="secondary" icon>
					<v-icon color="primary" size="40">play_arrow</v-icon>
				</v-btn>
			</div>

			<!-- Meanings -->
			<div class="mt-10">
				<h2 class="text-h5 font-weight-bold font-italic">noun</h2>
				<v-divider></v-divider>
				<h3 class="mt-6 ml-6 text-h5 text-blue-grey-lighten-1">Meaning</h3>
				<v-list class="ml-4 mt-1">
					<v-list-item>
						<template v-slot:prepend>
							<v-icon color="primary" size="small">arrow_forward</v-icon>
						</template>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
						quisquam eaque. Optio magni ratione, enim necessitatibus repellat
						placeat vel alias, nihil aut voluptatum at sequi impedit incidunt
						perspiciatis deserunt aliquam.
					</v-list-item>
					<v-list-item>
						<template v-slot:prepend>
							<v-icon color="primary" size="small">arrow_forward</v-icon>
						</template>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
						quisquam eaque. Optio magni ratione, enim necessitatibus repellat
						placeat vel alias, nihil aut voluptatum at sequi impedit incidunt
						perspiciatis deserunt aliquam.
					</v-list-item>
					<v-list-item>
						<template v-slot:prepend>
							<v-icon color="primary" size="small">arrow_forward</v-icon>
						</template>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
						magnam.
					</v-list-item>
				</v-list>
				<div class="mt-6 ml-6 d-flex">
					<h3 class="text-h5 text-blue-grey-lighten-1 mr-6">Synonyms</h3>
					<p class="text-h5 font-weight-medium text-primary">
						eletronic keyborad
					</p>
				</div>
			</div>

			<div class="mt-10">
				<h2 class="text-h5 font-weight-bold font-italic">verb</h2>
				<v-divider></v-divider>
				<h3 class="mt-6 ml-6 text-h5 text-blue-grey-lighten-1">Meaning</h3>
				<v-list class="ml-4 mt-1">
					<v-list-item>
						<template v-slot:prepend>
							<v-icon color="primary" size="small">arrow_forward</v-icon>
						</template>
						<p
							>To type on a computer keyboard</p
						>
						<p class="mt-1 text-blue-grey-darken-1"
							>"Keyboarding is the part of this job I like the
							most."</p
						>
					</v-list-item>
				</v-list>
			</div>

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
