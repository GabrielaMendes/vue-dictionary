<template>
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
				<v-icon size="large" color="primary" class="mr-1">search</v-icon>
			</v-btn>
		</template>
	</v-text-field>
</template>
