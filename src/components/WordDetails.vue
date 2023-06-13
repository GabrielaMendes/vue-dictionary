<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";
import WordDetailsMeaning from "./WordDetailsMeaning.vue";

const { xs: mobile } = useDisplay()

const props = defineProps({
	wordData: Object,
});

const audioUrl = props.wordData.phonetics.find((p) => {
		return p.audio !== "";
});

const disableBtn = ref(!Boolean(audioUrl));

const playWord = () => {
	disableBtn.value = true;

	const audio = new Audio(audioUrl.audio);
	audio.play();
	disableBtn.value = false;
};
</script>

<template>
	<!-- Word Phonetics -->
	<div
		class="d-flex justify-space-between align-center w-100 mt-6"
		elevation="0"
	>
		<div>
			<h2 
        class="font-weight-medium text-text-primary"
        :style="{'font-size': mobile ? '54px' : '62px'}"
      >
        {{ wordData.word }}
      </h2>
			<p class="text-primary text-h5 font-weight-normal mt-4">
				{{ wordData.phonetic }}
			</p>
		</div>
		<v-btn
			:disabled="disableBtn"
			aria-label="play"
			:size="mobile ? '60' : '70'"
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
