import {List, Paper} from "@mui/material";
import { EntryCard } from './EntryCard';
import { EntryStatus } from '../../interfaces/entry';
import { DragEvent, FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from "../../context/ui";
import styles from "./EntryList.module.css"


interface Props {
  status: EntryStatus;
}
export const EntryList:FC<Props> = ({status}) => {

 const {entries, updateEntry} = useContext(EntriesContext);
 const {isDragging} = useContext(UIContext);
 const entriesByStatus = useMemo(()=>entries.filter(entry => entry.status === status),[entries])
  
 const allowDrop =(e:DragEvent<HTMLDivElement>)=>{
  e.preventDefault()

}

  const onDropEntry =(e:DragEvent<HTMLDivElement>)=>{

   const id = e.dataTransfer.getData('_textDiv')
   const entry = entries.find(e => e._id === id)!;
   entry.status = status
   updateEntry(entry)
    
  }


  return (
    
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
        <Paper sx={{height:"calc(100vh - 190px)", backgroundColor:"transparent", padding:"1px 5px"}}>
            <List sx={{opacity:isDragging ? 0.1 : 1, transition:'all .5s'}}>
              {entriesByStatus.map((entry , i)=>  <EntryCard key ={i} entry={entry} />)}
               
            </List>
        </Paper>

    </div>
  )
}
