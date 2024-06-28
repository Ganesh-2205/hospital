// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
//     })
//     .then(() => {   
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log("Some error occured while connecting to database:", err);
//     });
    
// };
import mongoose from 'mongoose';

export const dbConnection=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://ganesh:ganeshmongo123@cluster0.qnoxxqu.mongodb.net/MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM");
        // console.log(Connected to MongoDb ${conn.connection.host});
    }
    catch(error){
        console.log(`Error in MongoDb is ${error}`)
    }
}
 
 