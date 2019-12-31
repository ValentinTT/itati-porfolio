import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    // golden: "#fdcb6e",
    // black: "#2d3436",
    // white: "#d5d6d6",
    primary: "#06B49A",
    primaryVariant: "#",
    secondary: "#06B49A",
    secondaryVariant: "#",
    background: "#FFFFFF",
    surface: "#FFFDF9",
    error: "#FF0000",
    onPrimary: "#FFFFFF",
    onSecondary: "#FFFFFF",
    onBackground: "#000000",
    onSurface: "#000000",
    onError: "#FFFFFF",

    //   powderWhite: "#FFFDF9",
    //   persianGreen: "#06B49A",
    //   lightBlue: "#AFDBD2",
    //   onyx: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
    huge: "3.5em",
  },
  spacing: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    navbar: "5rem",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
