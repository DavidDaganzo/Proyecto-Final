module.exports = app => {
  app.use("/api/properties", require("./Properties.routes"))
  // app.use("/api/reserves", require("./Reserves.routes"))
  app.use("/api/auth", require("./auth.routes"))
  app.use("/api/upload", require("./upload.routes"))
}
