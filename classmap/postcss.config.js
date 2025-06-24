// postcss.config.js
import tailwindcss from 'tailwindcss'; // Importa tailwindcss directamente, no @tailwindcss/postcss para v3
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};