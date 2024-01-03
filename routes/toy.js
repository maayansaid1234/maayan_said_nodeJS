// const express = require("express");

// const router=express.Router();

const router = require("express").Router();
const toyModel = require("../models/toy");

let arr = [
    { id: 1, name: "אליאס", price: 150 },
    { id: 2, name: "זיכרון ", price: 150 },
    { id: 3, name: "רמי ", price: 40 },
];



router.get("/", (req, res) => {

    toyModel.find({}).then(toys => {
        res.json(toys)
    }).catch(err=>{
        res.status(400).send("לא ניתן לקבל את כל הצעצועים")
    })

   // res.json(arr);
})

router.get("/:id", (req, res) => {
    let toy = arr.find(item => item.id == req.params.id);
    if (!toy)
        return res.status(404).send("מצטערים אין צעצוע עם קוד כזה")
    res.json(toy);
})

router.delete("/:id", (req, res) => {
    let index = arr.findIndex(item => item.id == req.params.id);
    if (index == -1)
        return res.status(404).send(" מצטערים אין צעצוע עם קוד כזה למחיקה")
    let toy = arr.splice(index, 1)[0];
    res.json(toy);

})

router.post("/", (req, res) => {
    console.log(req.body);
    req.body.id = arr[arr.length - 1].id + 1;
    arr.push(req.body)
    res.json(req.body);
})

router.put("/:id", (req, res) => {
    let toy = arr.find(item => item.id == req.params.id);
    if (!toy)
        return res.status(404).send(" מצטערים אין צעצוע עם קוד כזה לעדכון")
        toy.name = req.body.name || toy.name;
        toy.price = req.body.price || toy.price;
    res.json(toy);

})

module.exports = router;