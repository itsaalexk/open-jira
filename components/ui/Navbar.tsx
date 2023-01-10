
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

export const Navbar = () => {

 const {openSideMenu} = useContext(UIContext)

  return (
    <AppBar position="sticky" elevation={0}>
        <Toolbar>
            <IconButton size="large" edge="start"  onClick={openSideMenu}>
                <MenuRoundedIcon />
            </IconButton>
            <Typography variant ="h5">OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}
