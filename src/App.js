import React,{useState} from 'react'
import './style.css'

const App = () => {
  const [state,setstate] = useState("");
  const nums = ["C","+/-","%","B",'1','2','3',"+",'4','5','6',"-",'7','8','9',"/",'0',".","="]
  const handleCal = (value)=>{
    switch(value){
      case '=':
        try{
          return setstate(eval(state));
        }catch{
          return setstate("BC")
        }
      
      case "B":
        return setstate(state.slice(0,-1))
      
      case "C":
        return setstate('')

      case '+/-':
        const cal=eval(state)
        return setstate(-cal)

      case '%':
        try{
          return setstate(eval(state)/100)
        }catch{
          return setstate("BC")
        }

      default:
        return setstate(state + value)
    }
      //vankam da mapla
  }
  return (
    <div className='overall'>
      <input disabled value={state} style={{textAlign: 'right'}}/>
      <table className='grid'>
          {nums.map(num=>{
              return (
              <td className={`${(num=="=")?"span2":null}`}>
                  <button onClick={(e)=>handleCal(num)}>{num}</button>
              </td>
              )
          })}
      </table>
    </div>
  )
}

export default App
