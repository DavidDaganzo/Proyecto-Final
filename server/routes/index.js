module.exports = app => {
  app.use("/api/properties", require("./Properties.routes"))
}
