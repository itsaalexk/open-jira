import { Card, CardContent, Typography, CardActions, CardActionArea } from '@mui/material';
import { Entry } from '../../interfaces/entry';
import {  DragEvent, FC, useContext } from 'react';
import { UIContext } from '../../context/ui';

interface Props {
    entry: Entry;
}


export const EntryCard:FC<Props> = ({entry}) => {
    
   const {startDragging, endDragging} =  useContext(UIContext)


    const onDragStart =(e:DragEvent<HTMLDivElement>)=>{
        
      const dataTransfer =  e.dataTransfer.setData('_textDiv',entry._id)
          startDragging()
    }


  return (
    <Card sx={{marginBottom: 1}}
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={endDragging}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace: "pre-line"}}>
                    {entry.description}
                </Typography>

            </CardContent>
                <CardActions sx ={{display:"flex", justifyContent:"end", paddingRight:2}}>
                    <Typography variant="body2"> hace 30 minutos</Typography>

                </CardActions>
        </CardActionArea>
    

    </Card>
  )
}
