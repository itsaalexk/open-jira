import { FC, useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';




interface Props {
    setShowText:boolean
}

export const ShowField:FC<Props> = ({ setShowText}) => {

    const {error, setError} = useState<Boolean>(false)
    const {form , setForm} = useState<String>("")

    const onHandleClick = () =>{
        setShowText(false)
    }


    const onHandleError = ({e}) =>{
        if (e.target.value.length === 0) {setError(true)}
    }

    const handleChange = ({target:{value}})=>{
        setForm(value)
        console.log(form)
    }
  return (
    <>
    <TextField onChange ={handleChange} fullWidth sx ={{marginTop:2, marginBottom: 1}} placeholder ="Nueva Entrada" autofocus multiline label ="Nueva Entrada" helperText ={error && "Ingrese un texto"} error={setError}/>
    <Box display ="flex" justifyContent ="space-between">
        <Button onClick={onHandleClick} variant ="text" color ="error" endIcon={<CancelIcon />}>
            Cancelar
        </ Button>
        <Button onClick ={onHandleError} variant ="outlined" color ="secondary" endIcon={<SaveAltIcon />}>
            Guardar
        </ Button>
    </Box>
        </>
  )
}
