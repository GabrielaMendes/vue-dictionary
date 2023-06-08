<script setup>
const fontOptions = ["serif", "sans serif", "monospace"];
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
			<v-btn icon class="ml-2">
				<v-icon size="x-large" class="material-symbols-outlined"
					>dark_mode</v-icon
				>
			</v-btn>
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
