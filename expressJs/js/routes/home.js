const router = require('express').Router()
const path = require('path')
const rootDir = require('../../utils/fetchPath')

router.get('/home', (req, res) => {
  console.log(rootDir)
  const file = path.join(rootDir, 'views', 'home.html')
  console.log(file)
  // res.send("<h1>HOME</h1>")
  res.sendFile(file)
})
router.use('/', (req, res) => {
  res.redirect('/home')
})


module.exports = router