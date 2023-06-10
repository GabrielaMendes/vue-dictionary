<script setup>
import WordDetailsMeaning from "./WordDetailsMeaning.vue";

defineProps({
	wordData: Object,
});
</script>

<template>
	<!-- Word Phonetics -->
	<div
		class="d-flex justify-space-between align-center w-100 mt-6"
		elevation="0"
	>
		<div>
			<h3 class="text-h2 font-weight-medium">{{ wordData.word }}</h3>
			<p class="text-primary text-h5 font-weight-normal mt-4">
				{{ wordData.phonetic }}
			</p>
		</div>
		<v-btn size="70" variant="tonal" color="secondary" icon>
			<v-icon color="primary" size="40">play_arrow</v-icon>
		</v-btn>
	</div>

	<WordDetailsMeaning
		v-for="(meaning, index) in wordData.meanings"
		:key="index"
		:meaning="meaning"
	/>
</template>
