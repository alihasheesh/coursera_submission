const express = require('express');
const mongoose = require('mongoose');
const tourRoute = require('./routes/tourRoutes');  

// const DB = 'mongodb+srv://natour:shamali786@cluster0.xh03m6l.mongodb.net/?retryWrites=true&w=majority'

const app = express();


// mongoose
// .connect("mongodb://localhost:27017/NATour", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(()=>console.log('database established'))
// .catch(()=> console.log('not connected'))


app.use(express.json());
app.use('/api/v1/',tourRoute);

// app.all('*',(req,res,next)=>{
//   const err = new Error('You enter the bad request.');
//   err.statusCode= 404;
//   err.status = 'fail';

//   next(err);
// })

// app.use((err,req,res,next)=>{
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || "fail";
//   console.log(err)
//   res.status(err.statusCode).json({
//     status : err.status,
//     message : err.message
//   })
// })

module.exports = app;

// const main = fs.readFileSync('./file.html','utf-8');
// const product = fs.readFileSync('./product.html','utf-8');
// const tem_pro = fs.readFileSync('./temppro.html','utf-8');
// const dataObj = JSON.parse(fs.readFileSync('./data.json','utf-8'));


// const tem_replace = (tem,num) =>{
//     let output = tem.replace(/{%name%}/g,num.name)
//     output = output.replace(/{%disc%}/g,num.discrip)
//     output = output.replace(/{%id%}/g,num.id)

//     return output;
// }


//     const {query,pathname} = url.parse(req.url,true);
//     if(pathname==='/' || pathname==='/main'){
    //     res.writeHead(200,{'content-type':'text/html'});
    //     let output = dataObj.map(el => tem_replace(product,el)).join('')
//     output = main.replace('{%main%}',output)
//     res.end(output)
//    }
//    else if(pathname==='/product'){
//     let id = dataObj[query.id-1]
//     console.log(id)
//     res.writeHead(200,{'content-type':'text/html'});
//     let output = tem_replace(product,id)
//     output = tem_pro.replace('{$product$}',output)
//     res.end(output)
//    } else{
//     res.writeHead(404,{'content-type':'text/html'});
//     res.end('<h2>page not found</h2>')
//    }  