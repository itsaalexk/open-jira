const mongoose = require('mongoose');



const mongooseConnection = {

    isConnected:0
}

export const connectDB = async()=>{
    if (mongooseConnection.isConnected){
        console.log('Conectado');
        return;
    }
    if (mongoose.connections.length > 0){
        mongooseConnection.isConnected = mongoose.connections[0].readyState

        if(mongooseConnection.isConnected === 1 ){
            console.log('usando la conexion anterior')
            return;
        }
        await mongoose.disconnect()
    }
    await mongoose.connect(process.env.MONGO_URL);
    mongooseConnection.isConnected = 1;
    console.log('Conectado a la base de datos')

}

export const disconnect = async()=>{

    if(mongooseConnection.isConnected !== 0) return

    await mongoose.disconnect()
    console.log('Base de datos desconectada')


}