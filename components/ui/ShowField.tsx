
import { Button, Box, TextField } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { FC } from 'react';



interface Props {
    setShowText:boolean
}

export const ShowField:FC<Props> = ({ setShowText}) => {
    const onHandleClick = () =>{
        setShowText(false)
    }
  return (
    <>
    <TextField  fullWidth sx ={{marginTop:2, marginBottom: 1}} placeholder ="Nueva Entrada" autofocus multiline label ="Nueva Entrada" helperText ="Por favor ingrese un valor"/>
    <Box display ="flex" justifyContent ="space-between">
        <Button onClick={onHandleClick} variant ="text" color ="error" endIcon={<CancelIcon />}>
            Cancelar
        </ Button>
        <Button variant ="outlined" color ="secondary" endIcon={<SaveAltIcon />}>
            Guardar
        </ Button>
    </Box>
        </>
  )
}
