let express = require('express')
let app = express()
app.set('view engine', 'ejs')
app.set('view options', { delimiter: '?' })
let y = 0
app.use('/', (req, res) => {
  y++
  let x = Array( 90 )
            .fill( )
            .map( (v, i) => i+1 )
            .sort( () => Math.random() - .5 )
            .slice( 0, 5 )
            .sort( (a, b) => a - b )
  res.render( 'index', { x, y } )
})

app.listen(4000)