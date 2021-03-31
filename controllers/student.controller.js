const { json } = require('body-parser');
const Student=require('../models/student.model')




exports.test=(req,res)=>{
    res.send('Uploaded')
};


exports.student_create=(req, res)=>{
    let student= new Student({
        name:req.body.name,
        age:req.body.age
    });

    student.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Student Created successfully')
    })
};
exports.student_details=(req, res)=>{
    Student.findById(req.params.id, (err, student)=>{
        if(err)
        return next(err);
        res.send(student);

    })



};
exports.student_update=(req, res)=>{
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, student)=>{
        if (err) return next(err);
        res.send('Updated');

    })
};


exports.student_delete=(req,res)=>{
 Student.findByIdAndRemove(req.params.id, (err)=>{
        if (err) return next(err);
        res.send('Deleted');
    })
};

exports.list=(req,res)=>{
    Student.find((err,students)=>{
        if(!err){res.render('student',{page:'Student List',menuId:'list',students:students})}
        else{console.log('Error'+JSON.stringify(err,undefined,2));}
    })
};