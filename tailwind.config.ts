import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      animation:{
        'spin-slow':'spin 6s linear infinite',
        'spin-delay':'spin 6s linear infinite -3s'
      },
    }
  },

  plugins: [typography]
} satisfies Config;
