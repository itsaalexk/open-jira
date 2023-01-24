import { useState, FC } from 'react';
import { Button, Box, TextField } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { ShowField } from './ShowField';

export const NewEntry:FC = () => {
  const [showText, setShowText] = useState<Boolean>(false)

  const onHandleClick =()=>{
    setShowText(!showText)
    
  }
  return (
    <Box sx ={{marginBottom:2, paddingX:1 }}>

        {showText ? (<ShowField setShowText = {setShowText}/>)
        : (<Button fullWidth startIcon ={<UnfoldMoreIcon/>} onClick ={onHandleClick}>Agregar tareas</Button>)}
        
    </Box>
  )
}
