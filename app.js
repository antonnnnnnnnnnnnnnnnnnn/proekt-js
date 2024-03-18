const app = require('./app2')

const port = process.env.PORT || 3000


// app.get ('/', function(req,res){
//     res.status(200).json({
//         message:'Working'
//     })
// })

app.listen(port, function(){
    console.log(`server lqklnk ${port} port`)
})