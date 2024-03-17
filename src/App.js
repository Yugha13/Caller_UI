import React from 'react'
import Dial from './components/Dial'
import Contact from './components/Contact'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

const app = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <form>
      <Contact/>
      <div style={{float: 'buttom'}}>
      <Dial />
      </div>
    </form>
    </ThemeProvider>
  )
}

export default app
