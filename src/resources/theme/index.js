// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      primary: "#f7fafc",
      secondary: "#1a202c",
      accent: "#69306D"
    },
  },
})

