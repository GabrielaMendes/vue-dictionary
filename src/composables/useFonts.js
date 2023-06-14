import { ref } from "vue";

const fonts = {
  serif: "'Noto Serif', serif",
  "sans serif": "'Poppins', sans-serif",
  monospace: "'JetBrains Mono', Courier, monospace",
};

const currFont = ref("serif")

export const useFonts = () => {
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
