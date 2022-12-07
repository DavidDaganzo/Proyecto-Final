const router = require("express").Router()

const uploader = require('./../config/cloudinary.config')

router.post('/image', uploader.array('imageData'), (req, res) => {

  if (!req.files) {
    res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
    return
  }

  res.json({ cloudinary_urls: req.files })
})


module.exports = router