const mongoose = require("mongoose")

const LinkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    targetUrl: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
      lowercase: true,
      match: /^[a-z0-9-]{4,64}$/,
    },
    clickCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    lastClickedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model("Link", LinkSchema)
