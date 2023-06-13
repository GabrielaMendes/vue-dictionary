import { ref } from "vue";

export const useFonts = () => {
	const fonts = {
		serif: "'Noto Serif', serif",
		"sans serif": "'Poppins', sans-serif",
		mono: "'JetBrains Mono', monospace",
	};

  const currFont = ref("serif")

  const root = document.querySelector(":root");
  const setFont = (newFont) => {
    currFont.value = newFont;
    root.style.setProperty('--font-family', fonts[newFont]);
  }

  return {
    fonts,
    currFont,
    setFont,
  }
};
