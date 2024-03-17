import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../app.css'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function RowAndColumnSpacing() {
  const [num,setnum]=React.useState([])
  const arr =[1,2,3,4,5,6,7,8,9,'C',0,'B']
  const handleValue=(val)=>{
    if(val=='C'){
      setnum([]);
      return 0;
    }
    if(val=='B'){
      let tempNum = [...num];
      tempNum?.pop();
      setnum(tempNum);
      return;

    }
    if(num.length <= 10){
      setnum([...num, val]);
    }
  }

  const handleSave=()=>{

  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
    <div style={{width: '25%'}}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <div className='numInput'>{num?.map(item=>(item))}</div>
        <Button 
        variant="contained"
        onClick={handleSave}
        >New</Button>
      </div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          {arr.map((val)=>(
            <Grid item xs={4}>
              <Item onClick={()=>handleValue(val)}>{val}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
    </div>
  );
}
