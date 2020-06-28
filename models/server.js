const mongoose = require("mongoose")

const serverSchema = new mongoose.Schema({
  serverName: { type: String, required: true },
  serverId: { type: String, required: true },
  prefix: { type: String, default: "-" },
  ea: { type: Boolean, default: false },
  owner: String
})
const serverModel = mongoose.model("server", serverSchema)

module.exports = serverModel