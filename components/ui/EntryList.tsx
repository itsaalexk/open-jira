import {List, Paper} from "@mui/material";
import { EntryCard } from './EntryCard';
import { EntryStatus } from '../../interfaces/entry';
import { FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';


interface Props {
  status: EntryStatus;
}
export const EntryList:FC<Props> = ({status}) => {

 const {entries} = useContext(EntriesContext);
 console.log(entries)

 const entriesByStatus = useMemo(()=>{entries.filter(entry => entry.status === status)},[entries])



  return (
    //TODO: AQUI SE VA A HACER UN DROP
    <div>
        <Paper sx={{height:"calc(100vh - 190px)", backgroundColor:"transparent", padding:"1px 5px"}}>
            <List sx={{opacity:1}}>
              {entriesByStatus.map((entry , i)=>  <EntryCard key ={i} entry={entry} />)}
               
            </List>
        </Paper>

    </div>
  )
}
