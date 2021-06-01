const CategoryModel = require('../models/Category.model');

class CategoryController {
    //[POST] /create
    async categoryPost(req, res){
        const newCat = new CategoryModel(req.body);
        try {
            const savedCategory = await newCat.save();
            res.status(200).json(savedCategory)
        } catch (error) {
            res.status(500).json(error);
        }
    }
    //[GET] /
    async categoryGet(req, res){
        try {
            const cats = await CategoryModel.find()
            res.status(200).json(cats);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new CategoryController();