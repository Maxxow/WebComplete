const {ProducstService} = require("../service/products.service")

class ProductController{
    static async getAll(req, res){
        try {
            const products = await ProducstService.getAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({message:error.message || "Ocurrio un error, intentalo mas tarde"});
        }
    }
    static async getOneById(req,res){

    }
    static async create(req,res){

    }
    static async update(req,res){
        
    }
    static async delete(req,res){

    }
}

module.exports = {ProductController}