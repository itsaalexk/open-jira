import {List, Paper} from "@mui/material";
import { EntryCard } from './EntryCard';

export const EntryList = () => {
  return (
    //TODO: AQUI SE VA A HACER UN DROP
    <div>
        <Paper sx={{height:"calc(100vh - 190px)", backgroundColor:"transparent"}}>
            <List sx={{opacity:1}}>
                <EntryCard></EntryCard>
            </List>
        </Paper>

    </div>
  )
}
