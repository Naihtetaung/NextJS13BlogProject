import mongoose from "mongoose"

const connect = async() => {
  const MONGODB_URL =`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.9ciyzpl.mongodb.net/?retryWrites=true&w=majority`
  let client;  
  try {
    client = await mongoose.connect(MONGODB_URL)
      } catch (error) {
        throw new Error("Conection failed!");
      }
}
export default connect