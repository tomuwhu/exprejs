let express = require('express')
let app = express()
app.set('view engine', 'ejs')
app.set('view options', { delimiter: '?' })

app.get('/', (req, res) => {
  let x = Array( 90 )
            .fill( )
            .map( (v, i) => i )
            .sort( () => Math.random() - .5 )
            .slice( 0, 5 )
            .sort( (a, b) => a - b )
  res.render( 'index', { x } )
})

app.listen(4000)