const mongoose = require("mongoose")

let connectionPromise = null

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return
  }

  if (connectionPromise) {
    await connectionPromise
    return
  }

  const mongoUri = process.env.MONGODB_URI
  if (!mongoUri) {
    throw new Error("Missing MONGODB_URI in environment variables")
  }

  connectionPromise = mongoose
    .connect(mongoUri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    })
    .catch((error) => {
      connectionPromise = null
      throw error
    })

  await connectionPromise
}

module.exports = { connectToDatabase }
