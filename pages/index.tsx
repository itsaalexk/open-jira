
import { Inter } from '@next/font/google'
import { Grid,Card, CardHeader } from '@mui/material'
import { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout';


const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <>
        <Layout title = "Home Page" >
          <Grid container spacing={2}>
              <Grid item xs={12} sm ={4}>
                  <Card sx={{height:"90vh"}}>
                    <CardHeader title="Pendientes" />
                  </Card>
              </Grid>
              <Grid item xs={12} sm ={4}>
                  <Card sx={{height:"90vh"}}>
                    <CardHeader title="En Proceso" />
                  </Card>
              </Grid>
              <Grid item xs={12} sm ={4}>
                  <Card sx={{height:"90vh"}}>
                    <CardHeader title="Completadas" />
                    
                  </Card>
              </Grid>
          </Grid>
        </Layout>
    </>
  )
}


export default Home