const exp=require('express') //import
const app=exp()
const bodyParser = require('body-parser')

const port =8000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log('get response')
    res.send('request received')
})


app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body)

})


// app.get('/',(req,res)=>{
//     console.log('call Get apis')
//     res.send('heelo')
// })0


app.listen(port,()=>{
console.log('server work',port)
})