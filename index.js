let express = require('express')
let app = express()
app.set('view engine', 'ejs')
app.set('view options', { delimiter: '?' })
let x = [3,4,5,2,3,5]

app.get('/', (req, res) => {
  res.render('index', { x })
})

app.listen(4000)