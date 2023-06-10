<script setup>
defineProps({
	meaning: Object,
});
</script>

<template>
	<div class="mt-10 text-text-primary">
		<h2 class="text-h5 font-weight-bold font-italic">
			{{ meaning.partOfSpeech }}
		</h2>
		<v-divider></v-divider>
		<h3 class="mt-6 ml-6 text-h5 text-text-secondary">Meaning</h3>
		<v-list class="ml-4 mt-1 bg-background">
			<v-list-item
				v-for="(definition, index) in meaning.definitions"
				:key="index"
			>
				<div class="d-flex text-text-primary">
					<v-icon color="primary" size="small" class="mt-1 mr-3"
						>arrow_forward</v-icon
					>
					<div>
						<p>{{ definition.definition }}</p>
						<p v-if="definition.example" class="mt-1 text-text-secondary">
							"{{ definition.example }}"
						</p>
					</div>
				</div>
			</v-list-item>
		</v-list>
    
    <div v-if="meaning.synonyms.length > 0" class="mt-6 ml-6 d-flex">
      <h3 class="text-h5 text-text-secondary mr-6">Synonym</h3>
      <p class="text-h5 font-weight-medium text-primary">
        {{ meaning.synonyms[0] }}
      </p>
    </div>
	</div>
</template>
