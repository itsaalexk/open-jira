
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export const Navbar = () => {

  return (
    <AppBar position="sticky" elevation={0}>
        <Toolbar>
            <IconButton size="large" edge="start" >
                <MenuRoundedIcon />
            </IconButton>
            <Typography variant ="h5">OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}
