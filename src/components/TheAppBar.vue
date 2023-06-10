<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const fontOptions = ["serif", "sans serif", "monospace"];
const fontChoice = ref("serif");
const darkMode = ref(false);
const theme = useTheme();

const toggleTheme = () => {
	const themeValue = darkMode.value ? "dark" : "light";
	theme.global.name.value = themeValue;
	localStorage.setItem("theme", themeValue);
};

onMounted(() => {
 	if (localStorage.getItem("theme")) {
    console.log(localStorage.getItem("theme"))
  darkMode.value = (localStorage.getItem("theme") === "dark");
 	}
});
</script>

<template>
	<v-app-bar flat color="background">
		<!-- Logo -->
		<template v-slot:prepend>
			<v-icon color="primary" size="x-large" class="material-symbols-outlined"
				>menu_book</v-icon
			>
		</template>
		<v-app-bar-title class="font-weight-medium">
			<span class="logo text-text-primary">VueDictionary</span>
		</v-app-bar-title>

		<!-- Actions -->
		<template v-slot:append>
			<!-- Larger Screens -->
			<v-menu>
				<template v-slot:activator="{ props }">
					<v-btn
						v-bind="props"
						class="text-capitalize text-body-1 text-text-primary d-none d-sm-flex"
					>
						<span>serif</span>
						<v-icon class="ml-1" size="x-large" color="primary"
							>expand_more</v-icon
						>
					</v-btn>
				</template>
				<v-list>
					<div v-for="font in fontOptions" :key="font">
						<v-hover v-slot="{ isHovering, props }">
							<v-list-item
								v-bind="props"
								style="cursor: pointer"
								class="text-text-primary"
								:class="{ 'bg-tertiary': isHovering }"
							>
								<v-list-item-title :value="font" class="text-capitalize">{{
									font
								}}</v-list-item-title>
							</v-list-item>
						</v-hover>
					</div>
				</v-list>
			</v-menu>

			<v-divider
				:vertical="true"
				:inset="true"
				class="ml-2 d-none d-sm-flex"
			></v-divider>

			<v-switch
				inset
				color="primary"
				class="ml-6 d-none d-sm-flex"
				v-model="darkMode"
				@change="toggleTheme"
			>
				<template v-slot:label>
					<v-icon
						v-if="darkMode"
						size="x-large"
						class="material-symbols-outlined"
						color="primary"
						>dark_mode</v-icon
					>
					<v-icon v-else size="x-large" class="material-symbols-outlined"
						>brightness_5</v-icon
					>
				</template>
			</v-switch>

			<!-- Smaller screens -->
			<v-menu>
				<template v-slot:activator="{ props }">
					<v-btn icon v-bind="props" class="d-flex d-sm-none">
						<v-icon>more_vert</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item>
						<v-btn
							flat
							class="mr-4 text-text-primary"
							:color="darkMode ? 'inherit' : 'tertiary'"
							@click="
								darkMode = false;
								toggleTheme();
							"
							><span class="mr-2">light</span
							><v-icon size="large" class="material-symbols-outlined"
								>brightness_5</v-icon
							></v-btn
						>
						<v-btn
							flat
							class="text-text-primary"
							:color="darkMode ? 'tertiary' : 'inherit'"
							@click="
								darkMode = true;
								toggleTheme();
							"
							><span class="mr-2">dark</span
							><v-icon size="large" class="material-symbols-outlined"
								>dark_mode</v-icon
							></v-btn
						>
					</v-list-item>

					<v-divider class="mt-2"></v-divider>

					<v-list-item
						style="cursor: pointer"
						v-for="font in fontOptions"
						:key="font"
						class="text-center text-capitalize text-text-primary"
						:class="{ 'bg-tertiary': fontChoice === font }"
					>
						<v-list-item-title :value="font" class="text-capitalize">{{
							font
						}}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</template>
	</v-app-bar>
</template>
