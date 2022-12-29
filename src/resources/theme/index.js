// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const colors = {
    brand: {
      primary: "#f7fafc",
      secondary: "#1a202c",
      accent: "#69306D"
    },
  }

const Button = {
    baseStyle:{
        fontWeight:'light',
        _hover:{
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"
        }
    },
    sizes:{
        lg:{
            fontWeight:'bold',
            borderRadius: '10px'
        }
    },
    variants:{
        outline:{
            _hover:{
                bg: 'brand.accent',
                color:'white'
            }
        }
    }
}

export const theme = extendTheme({colors, components: {Button}})