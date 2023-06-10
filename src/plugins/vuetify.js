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
				dark: false,
				colors: {
					background: "#FDFDFD",
					"text-primary": "#17171F",
					primary: "#009688",
					secondary: "#80CBC4",
					tertiary: "#E0F2F1",
				},
			},
			dark: {
				dark: true,
				colors: {
					background: "#17171F",
					"text-primary": "#FDFDFD",
					primary: "#00BFA5",
					secondary: "#64FFDA",
					tertiary: "#00695C",
				},
			},
		},
	},
});
