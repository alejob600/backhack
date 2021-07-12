const express = require('express')
const app = express()
const morgan= require('morgan')
const port = 3000
//setting 
app.set('port', process.env.PORT || 3000);
//Middlewares

app.use(morgan ('dev'));//recibe informacion del cliente en la consola del servidor
app.use(express.json());


//Routes

app.use('/api/tasks',require('./routes/task.routes'))


//Static files



app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${port}`)
})