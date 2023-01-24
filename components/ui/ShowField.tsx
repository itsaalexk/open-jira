import { ChangeEvent, FC, useState, useContext } from 'react';
import { Button, Box, TextField } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import { EntriesContext } from '../../context/entries/EntriesContext';





interface Props {
    setShowText:boolean
}

export const ShowField:FC<Props> = ({ setShowText}) => {

    const [inputValue, setInputValue]= useState('')
   const {addNewEntry} = useContext(EntriesContext)
    

    const onHandleClick = () =>{
        setShowText(false)
        
    }

    const onSave = ()=>{
        if (inputValue.length === 0 ) return
        console.log(inputValue)
        addNewEntry(inputValue)
    }



    const onChange = ({target:{value}}:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(value)
         
        
    }
  return (
    <>
    <TextField  
        value={inputValue} 
        onChange ={onChange} 
        fullWidth sx ={{marginTop:2, marginBottom: 1}} 
        placeholder ="Nueva Entrada" 
        autoFocus 
        multiline 
        label ="Nueva Entrada" 
        helperText ={inputValue.length === 0  && 'Ingrese un valor'} 
        error={inputValue.length === 0 }
    />
    <Box display ="flex" justifyContent ="space-between">
        <Button onClick={onHandleClick} variant ="text" color ="error" endIcon={<CancelIcon />}>
            Cancelar
        </ Button>
        <Button onClick={onSave} variant ="outlined" color ="secondary" endIcon={<SaveAltIcon />}>
            Guardar
        </ Button>
    </Box>
        </>
  )
}
