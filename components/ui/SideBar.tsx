import { Box, Drawer, Typography ,List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';


const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"]

export const SideBar = () => {


  return (
    <Drawer anchor="left" open ={true}>
         <Box sx ={{padding:"5px 10px"}}>
            <Typography variant='h4'>Menú</Typography>
         </Box>

         <List>
            {menuItems.map((text,index)=>{
                return(
                    <ListItem key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxRoundedIcon /> : <EmailRoundedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )
            })}
         </List>
    </Drawer>
   
  )
}
