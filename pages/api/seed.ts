// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database'
import { seedData } from '../../database/seed-data'
import { Entry } from '../../models'

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  if (process.env.NODE_ENV === 'production') return res.status(401).json({message: 'You are unable to connect'})
  try {
    await db.connectDB()
    await Entry.deleteMany()
    await Entry.insertMany(seedData.entries)
    console.log('Grabado en la base de datos satisfactoriamente')
    await db.disconnectDB()
  
    res.status(200).json({ message: 'Proceso realizado con exito' })

  }
  catch(error){
    console.log(error)
    throw new Error('No se ha podido guardar en la base de datos')
  }

}
