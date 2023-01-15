import { Card, CardActionArea, CardContent, Typography, CardActions} from '@mui/material';

export const EntryCard = () => {
  return (
    <Card sx={{marginBottom: 1}}>
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace: "pre-line"}}>
                    Descripcion
                </Typography>
            </CardContent>
                <CardActions>
                    <Typography variant="body2">Creado hace 30 minutos</Typography>

                </CardActions>
        </CardActionArea>
    

    </Card>
  )
}
