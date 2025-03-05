const {AppDatasource} = require("../backend/data/source")

const ProductRepository = AppDatasource.getRepository(Product);

MediaSourceHandle.exports = {ProductRepository}