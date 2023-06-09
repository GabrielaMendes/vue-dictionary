<template>
	<!-- Word Phonetics -->
	<div
		class="d-flex justify-space-between align-center w-100 mt-6"
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
			<p class="text-h5 font-weight-medium text-primary">eletronic keyborad</p>
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
				<p>To type on a computer keyboard</p>
				<p class="mt-1 text-blue-grey-darken-1">
					"Keyboarding is the part of this job I like the most."
				</p>
			</v-list-item>
		</v-list>
	</div>
</template>
