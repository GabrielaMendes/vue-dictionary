<script setup>
import {ref} from "vue"

const fontOptions = ["serif", "sans serif", "monospace"];
const darkMode = ref(false)
</script>

<template>
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
</template>