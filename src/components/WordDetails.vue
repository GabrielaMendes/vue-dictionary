<script setup>
import { ref } from "vue";
import WordDetailsMeaning from "./WordDetailsMeaning.vue";

const props = defineProps({
	wordData: Object,
});

const disableBtn = ref(false);

const playWord = async () => {
	disableBtn.value = true;
	const audioUrl = props.wordData.phonetics.find((p) => {
		return p.audio !== "";
	});

	const audio = new Audio(await audioUrl.audio);
	audio.play();
	disableBtn.value = false;
};
</script>

<template>
	<!-- Word Phonetics -->
	<div
		class="d-flex justify-space-between align-center w-100 mt-6 text-text-primary"
		elevation="0"
	>
		<div>
			<h3 class="text-h2 font-weight-medium">{{ wordData.word }}</h3>
			<p class="text-primary text-h5 font-weight-normal mt-4">
				{{ wordData.phonetic }}
			</p>
		</div>
		<v-btn
			:disabled="disableBtn"
			aria-label="play"
			size="70"
			variant="tonal"
			color="secondary"
			icon
		>
			<v-icon color="primary" size="40" @click="playWord">play_arrow</v-icon>
		</v-btn>
	</div>

	<WordDetailsMeaning
		v-for="(meaning, index) in wordData.meanings"
		:key="index"
		:meaning="meaning"
	/>
</template>
