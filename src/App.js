import React,{useState} from 'react'
import './style.css'

const App = () => {
  const [state,setstate] = useState("");
  const nums = ["C","+/-","%","B",'1','2','3',"+",'4','5','6',"-",'7','8','9',"/",'0',".","="]
  const handleCal = (value)=>{
    if(value=='='){
      return setstate(eval(state));
    }
    if(value=="B"){
      
    }
    if(value=="C"){
      return setstate('')
    }
    return setstate(state + value)
  }
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
