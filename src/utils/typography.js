import Typography from "typography"
// import irvingTheme from "typography-theme-irving"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Cairo",
      styles: ["700"],
    },
  ],
  headerFontFamily: ["Cairo"],
  bodyFontFamily: ["Cairo"],
}) //new Typography(irvingTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
