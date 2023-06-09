<template>
	<v-card width="250px" flat variant="outlined" style="border-color: #80cbc4">
		<template v-slot:title>
			<div class="d-flex align-center justify-center">
				<v-icon
					icon="search_off"
					class="material-symbols-outlined mr-3"
					size="55"
					color="grey-darken-2"
				/>
				<h1 class="text-h2 font-weight-medium text-primary">404</h1>
			</div>
		</template>
		<template v-slot:subtitle>
			<h5 class="mt-1 text-center text-h5 font-weight-medium">
				Word not found!
			</h5>
		</template>
		<template v-slot:text>
			<p class="text-center">Try entering another one.</p>
		</template>
	</v-card>
</template>
