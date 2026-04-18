/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary": "#00665a",
        "on-background": "#191c1e",
        "on-secondary-container": "#723400",
        "on-secondary": "#ffffff",
        "primary-fixed-dim": "#9acbff",
        "surface-bright": "#f7f9fb",
        "outline": "#707882",
        "inverse-on-surface": "#eff1f3",
        "surface-container": "#eceef0",
        "secondary-fixed-dim": "#ffb68a",
        "on-primary-container": "#f7f9ff",
        "background": "#f7f9fb",
        "outline-variant": "#c0c7d2",
        "on-tertiary-fixed": "#00201c",
        "tertiary-fixed-dim": "#59dbc7",
        "on-secondary-fixed-variant": "#743500",
        "on-secondary-fixed": "#321300",
        "primary-fixed": "#cfe5ff",
        "primary": "#005e97",
        "on-error": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-container": "#e4fff8",
        "inverse-primary": "#9acbff",
        "on-surface-variant": "#404751",
        "surface": "#f7f9fb",
        "tertiary-container": "#008173",
        "on-primary-fixed-variant": "#004a79",
        "primary-container": "#0077be",
        "surface-dim": "#d8dadc",
        "on-primary-fixed": "#001d34",
        "surface-container-highest": "#e0e3e5",
        "secondary-fixed": "#ffdbc8",
        "on-surface": "#191c1e",
        "surface-container-high": "#e6e8ea",
        "on-tertiary-fixed-variant": "#005047",
        "on-error-container": "#93000a",
        "error": "#ba1a1a",
        "on-primary": "#ffffff",
        "surface-container-low": "#f2f4f6",
        "surface-tint": "#00629e",
        "inverse-surface": "#2d3133",
        "tertiary-fixed": "#79f7e3",
        "secondary": "#95490d",
        "secondary-container": "#fd9b5a",
        "on-tertiary": "#ffffff",
        "error-container": "#ffdad6",
        "surface-variant": "#e0e3e5"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ['"Plus Jakarta Sans"', "sans-serif"],
        "body": ['"Manrope"', "sans-serif"],
        "label": ['"Manrope"', "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
