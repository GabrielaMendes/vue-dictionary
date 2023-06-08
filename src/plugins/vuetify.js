// Styles
import 'vuetify/styles'
import { aliases, md } from 'vuetify/iconsets/md'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
	icons: {
		defaultSet: "md",
		aliases,
		sets: {
			md,
		},
	},
	theme: {
		themes: {
			light: {
				colors: {
					primary: "#009688",
					secondary: "#80CBC4",
				},
			},
		},
	},
});
