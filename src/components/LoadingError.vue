<script setup>
import { computed } from "vue";

const props = defineProps({
	error: Object,
});

const statusCode404 = computed(() => {
	if (props.error.response) {
		return props.error.response.status === 404;
	}
	return false;
});
</script>

<template>
	<v-card
		:width="statusCode404 ? '250px' : '320px'"
		flat
		variant="outlined"
		style="border-color: rgb(var(--v-theme-secondary))"
	>
		<template v-slot:title>
			<div class="d-flex align-center justify-center">
				<v-icon
					:icon="statusCode404 ? 'search_off' : 'sync_problem'"
					class="material-symbols-outlined mr-3"
					size="55"
					color="grey-darken-2"
				/>
				<h1 class="text-h2 font-weight-medium text-primary">{{statusCode404 ? '404' : 'Error'}}</h1>
			</div>
		</template>
		<template v-slot:subtitle>
			<h5 class="mt-1 text-center text-h5 font-weight-medium">
				{{ statusCode404 ? "Word not found!" : "Something went wrong!" }}
			</h5>
		</template>
		<template v-slot:text>
			<p class="text-center">
				{{ statusCode404 ? "Try entering another one." : "Try again later." }}
			</p>
		</template>
	</v-card>
</template>
