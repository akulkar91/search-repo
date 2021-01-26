/*
consume the themecontext and make it a provider on the root of the app 
acts similar to store mechanism
pass a property to navbar so as to handle the dark mode using call backs
*/
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ThemeContext, { themes } from './Theme/ThemeContext'

function App() {
  const [theme, setTheme] = useState(themes.dark)
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className='App' style={theme} data-testid='container'>
        <Navbar toggleTheme={toggleTheme} />
        <div className='App-container'>
          {/* <SearchBar /> */}
          <Home />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
