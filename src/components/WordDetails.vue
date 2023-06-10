<script setup>
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

	<div v-for="(meaning, index) in wordData.meanings" :key="index" class="mt-10">
		<h2 class="text-h5 font-weight-bold font-italic">
			{{ meaning.partOfSpeech }}
		</h2>
		<v-divider></v-divider>
		<h3 class="mt-6 ml-6 text-h5 text-blue-grey-lighten-1">Meaning</h3>
		<v-list class="ml-4 mt-1">
			<v-list-item v-for="(definition, idx) in meaning.definitions" :key="idx">
				<div class="d-flex">
					<v-icon color="primary" size="small" class="mt-1 mr-3"
						>arrow_forward</v-icon
					>
					<div>
						<p>{{ definition.definition }}</p>
						<p v-if="definition.example" class="mt-1 text-blue-grey-darken-1">
							"{{ definition.example }}"
						</p>
					</div>
				</div>

				<div v-if="definition.synonyms.length > 0" class="mt-6 ml-6 d-flex">
					<h3 class="text-h5 text-blue-grey-lighten-1 mr-6">Synonym</h3>
					<p class="text-h5 font-weight-medium text-primary">
						{{ definition.synonyms[0] }}
					</p>
				</div>
			</v-list-item>
		</v-list>
	</div>
</template>
