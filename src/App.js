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
