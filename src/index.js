const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const hbs = exphbs.create( { extname: '.hbs'})
const path = require('path'); 



// Use static folder
app.use(express.static(path.join(__dirname, 'public')));


app.engine('hbs', hbs.engine )
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})