<script setup>
import {ref} from "vue"

const fontOptions = ["serif", "sans serif", "monospace"];

const darkMode = ref(false)
</script>

<template>
	<v-app>
		<!-- App Bar -->
		<v-app-bar elevation="0">
			<template v-slot:prepend>
				<v-icon color="primary" size="x-large" class="material-symbols-outlined"
					>menu_book</v-icon
				>
			</template>
			<v-app-bar-title class="font-weight-medium">
				<span class="logo">VueDictionary</span>
			</v-app-bar-title>

			<v-spacer></v-spacer>

			<v-menu open-on-hover>
				<template v-slot:activator="{ props }">
					<v-btn v-bind="props" class="text-capitalize text-body-1">
						serif
						<v-icon size="x-large" color="primary">expand_more</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="font in fontOptions" :key="font" variant="plain">
						<v-list-item-title :value="font" class="text-capitalize">{{
							font
						}}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-divider :vertical="true" :inset="true" class="ml-2"></v-divider>

      <template v-slot:append>
        <v-switch inset color="primary" class="ml-6 pt-5" v-model="darkMode">
          <template v-slot:label>
            <v-icon v-if="darkMode" size="x-large" class="material-symbols-outlined" color="primary"
                  >dark_mode</v-icon>
            <v-icon v-else size="x-large" class="material-symbols-outlined"
                  >brightness_5</v-icon>
          </template>
        </v-switch>
      </template>
		</v-app-bar>

		<v-container class="mt-16">
			<!-- Search Bar -->
			<v-text-field
				class="mt-4"
				variant="filled"
				:autofocus="true"
				:rules="[]"
				rounded="lg"
				base-color="transparent"
				color="transparent"
			>
				<template v-slot:append-inner>
					<v-btn icon elevation="0" color="transparent" class="mr-n2">
						<v-icon size="x-large" color="primary" class="mr-1">search</v-icon>
					</v-btn>
				</template>
			</v-text-field>

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
						<v-list-item-title
							>To type on a computer keyboard</v-list-item-title
						>
						<v-list-item-subtitle class="mt-1 text-body-1"
							>"Keyboarding is the part of this job I like the
							most."</v-list-item-subtitle
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
