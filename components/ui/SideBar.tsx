import {useContext} from "react"
import { Box, Drawer, Typography ,List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Divider from '@mui/material/Divider';
import { UIContext } from '../../context/ui/UIContext';


const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"]

export const SideBar = () => {

  const {sidemenuOpen,closeSideMenu} = useContext(UIContext)


  return (
    <Drawer anchor="left" open ={sidemenuOpen} onClose ={closeSideMenu}>
        <Box sx={{width:"250px"}}>
            <Box sx ={{padding:"5px 10px"}}>
                <Typography variant='h4'>Menú</Typography>
                <Divider />
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
                <Divider />
        </Box>

    </Drawer>
   
  )
}
