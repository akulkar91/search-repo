/* 
Set of constants holding color changes for dark theme vs light  
create a context to share the theme across the application flow  
*/

import { createContext } from "react"

export const themes = {
    dark: {
        color: 'white',
        backgroundColor:'#0d1117',
        borderColor:'white'
    },
    light: {
        color: '#0d1117',
        backgroundColor: 'white',
        borderColor:'#0d1117'
    }
}

const ThemeContext = createContext(themes.dark);

export default  ThemeContext;