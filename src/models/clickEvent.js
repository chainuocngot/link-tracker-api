const mongoose = require("mongoose")

const ClickEventSchema = new mongoose.Schema(
  {
    linkId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Link",
      required: true,
      index: true,
    },
    clickedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
    ipAddress: {
      type: String,
      default: null,
      maxlength: 128,
    },
    userAgent: {
      type: String,
      default: null,
      maxlength: 500,
    },
    referer: {
      type: String,
      default: null,
      maxlength: 500,
    },
  },
  {
    timestamps: false,
  },
)

module.exports = mongoose.model("ClickEvent", ClickEventSchema)
