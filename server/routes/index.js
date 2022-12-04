module.exports = app => {
  app.use("/api/properties", require("./Properties.routes"))
  app.use("/api/auth", require("./auth.routes"))
}
