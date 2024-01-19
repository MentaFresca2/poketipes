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
        'custom-blue': 'inset 0px -1px 24px rgba(0, 0, 0, 1)', 
        'Lcustom-blue': 'inset 0px -1px 24px rgba(0, 0, 0, 0.5)',
        'LLcustom-blue': 'inset 0px -1px 8px rgba(0, 0, 0, 0.8)',
        'r':'10px 0px 24px rgba(0, 0, 0, 0.1)',
        'plane':'1.5px 1.5px 0px rgba(0, 0, 0, 1)',
        'lin':'inset 1px 1px 4px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, #4C52D1 0%, #3c4597 50%, #3c4597 100%) ',
        'gradient-radial-red': 'radial-gradient(circle at center, #D12228 0%, #b21919 60%, #b21919 100%) ',
        'gradient-radial-yel': 'radial-gradient(circle at center, #E2E21B 0%, #DAC400 50%, #DAC400 100%) ',
        'gradient-radial-gre': 'radial-gradient(circle at center, #0FB100 0%, #0C9300 60%, #0C9300 100%) ',
          
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
