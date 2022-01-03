const express = require("express");

const router = express.Router();

const Receipy = require("../models/receipy.model");

router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const receipy = await Receipy.create(req.body);

        return res.status(200).send(receipy)
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})
        
    }
})

router.get("/", async (req, res) => {
    try {
        const receipy = await Receipy.find().lean().exec();
        // console.log(receipy)
        return res.status(200).send(receipy)
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})
        
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const receipy = await Receipy.deleteOne({_id: req.params.id}).lean().exec();
        console.log(req.params.id)
        return res.status(200).send(receipy)
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})
        
    }
})

module.exports = router;