const router = require('express').Router()
const path = require('path')
const rootDir = require('../../utils/fetchPath')
router.get('/user', (req, res) => {
  const file = path.join(rootDir, 'views', 'user.html')
  console.log(file)
  res.sendFile(file)
})


module.exports = router