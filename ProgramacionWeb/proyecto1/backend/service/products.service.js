const {ProductRepository} = require("../repositories/product.repository")

class ProductService{
    async function getAll(){
        return await ProductRepository.find();
    }

    async getOneBy(id){
        return await ProductRepository.findOneBy({id});
    }

    async create(product){
        const neProduct = ProductRepository.create(product);
        return await ProductRepository.save(newProduct);
    }

    async update(id, data){
        awair ProductRepository.update(id,{data});
        //{
        //    nombre:"",
        //    precio:
        //}
        return await ProductRepository.findOneBy({id});
    }


    async delete(id){
        return await ProductRepository.delete({id});
    }


};

MediaSourceHandle.exports={ProducstService: new ProducstService{}};