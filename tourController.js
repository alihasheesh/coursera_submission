const fs = require('fs');
const Tour = require('./../Model/tourModel');

let tours = JSON.parse(fs.readFileSync('./data.json','utf8'));

console.log(tours[4].review)
const asyncCreate = fn =>{
    return (req,res,next)=>{
        fn(req,res,next).catch(err => next(err));
    }
}

exports.deleteReview = (req,res)=>{
    let id = parseInt(req.params.id) - 1;
    tours[id].review = "";
    id += 1; 
    res.status(201).json({
        id,
        message: "Review Deleted",
        tours
    })
};

exports.postReview = (req,res)=>{
    const id = parseInt(req.params.id) - 1;
    tours[id].review = req.body.review;
    // console.log(tours)
    // fs.writeFile('./data.json',JSON.stringify(tours))
    res.status(201).json({
        id: id,
        review: tours[id].review,
        tours
    })
};

exports.getAlltour = (req,res)=>{
    const tour = Tour.find();
    console.log('tour')
    res.status(200).json({
        status: 'success',
        result: tours.length,
        data: tours
    })
};
exports.getTourOnID = (req, res) => {
    const id = req.params.id;
    const data = tours.find(el => {
        return el.id.toString() === id.toString()
    });
    res.status(200).json({
      status: 'success',
      data
    })
};
exports.postTour = (req,res)=>{
    
    let id = tours.length+1
    const addData = Object.assign({id},req.body)
    tours.push(addData)
    fs.writeFile('./data.json','\n'+JSON.stringify(tours),err=>{
        console.log(err)
    })
    res.status(201).json({
        status: "success",
        results: tours.length,
        data: tours
    });
};

exports.patchReview = (req,res)=>{
    const id = parseInt(req.params.id) - 1;
    tours[id].review = req.body.review;
    fs.writeFileSync('./data.json',JSON.stringify(tours));
    res.status(200).json({
        status: "success",
    })
    
};

exports.patchTour = (req,res)=>{
    const id = req.params.id;
    const data = tours.find(el => el.id.toString() === id.toString());
    if (!data) {
        res.status(404).json({ message: 'NOT FOUND' });
    }
    res.status(200).json({
        status:'success',
        data:'<Updated Tour>'
    })
    app.redirect('/api/v1/book')
};
exports.deleteTour = (req,res)=>{
    const id = req.params.id;
    const data = tours.find(el => el.id.toString() === id.toString());
    if (!data) {
      res.status(404).json({ message: 'NOT FOUND' });
    }
    res.status(500).json({
        status:"success",
        message:"<deleted Tour>"
    })
}