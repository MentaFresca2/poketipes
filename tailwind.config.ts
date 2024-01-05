import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': 'inset 0px -1px 24px rgba(0, 0, 0, 1)', // Sombra azul personalizada
        'Lcustom-blue': 'inset 0px -1px 24px rgba(0, 0, 0, 0.5)',
        'LLcustom-blue': 'inset 0px -1px 8px rgba(0, 0, 0, 0.8)',
        'r':'10px 0px 24px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, #4C52D1 0%, #3c4597 50%, #3c4597 100%) ',
        'gradient-radial-red': 'radial-gradient(circle at center, #D12228 0%, #b21919 60%, #b21919 100%) ',
        'gradient-radial-yel': 'radial-gradient(circle at center, #D12228 0%, #b21919 60%, #b21919 100%) ',
          
      },
      borderWidth: {
        '2': '2px',
      },
      colors: {
        'red-custom': '#ff0000',
        'darkred':'#6d0000' 
      }
    },
  },
  plugins: [],
}
export default config
