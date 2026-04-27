const mongoose = require("mongoose")

let isConnected = false

async function connectToDatabase() {
  if (isConnected) {
    return
  }

  const mongoUri = process.env.MONGODB_URI
  if (!mongoUri) {
    throw new Error("Missing MONGODB_URI in environment variables")
  }

  await mongoose.connect(mongoUri, {
    maxPoolSize: 10,
  })

  isConnected = true
}

module.exports = { connectToDatabase }
