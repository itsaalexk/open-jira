
import { Inter } from '@next/font/google'
import { Typography } from '@mui/material'
import { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout';


const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <>
        <Layout >
        <Typography variant='h1'>Hola</Typography>
        </Layout>
    </>
  )
}


export default Home