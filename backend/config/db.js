import mongoose from "mongoose";
let url='mongodb+srv://crbs:crbs123@cluster0.bbgzv.mongodb.net/crbs?retryWrites=true&w=majority'

// let url = "mongodb://127.0.0.1:27017/test2";
let connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      { useCreateIndex: true }
    );
    console.log(`Mongoose Connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
