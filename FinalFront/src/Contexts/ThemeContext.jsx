import { createContext } from "react";


export const themes = {
    dark: {
        color1: '#000000' ,
        color2: '#1E1E1E',
        colorLetra: '#D9D9D9'
    },

    light: {
        color1: '#D9D9D9',
        color2: '#FFFFFF',
        colorLetra: '#1E1E1E'
    }

}

export const ThemeContext = createContext(themes.light)
