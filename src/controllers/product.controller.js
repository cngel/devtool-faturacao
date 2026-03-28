const { foundAll, foundOne, setProduct,addproductIndb, buyProductOne } = require("../service/products.service.js")

module.exports = {
    getAllProducts: async (req, res) => {
        const { store_id } = req.store;
        const result = await foundAll(store_id);
        res.json({
            response: {
                error: result.errors,
                result: result
            }
        });
    },
    getOneProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await foundOne(id);
            res.json({
                response: {
                    result: result
                }
            });
        } catch (error) {
            res.json({ response: error });
        }
    },
    crateProduct: async (req, res) => {
        const { store_id } = req.store;
        try {
            const result = await setProduct(req.body, store_id);
            res.status(201).json({
                response: { menssage: 'Product created' }
            });
        }
        catch (error) {
            res.status(500).json({ response: 'Internal error' });
        }

    },
    addProduct:async (req,res)=>{
        const {store_id} = req.store;
        const { sku, qnt,expiraction } = req.body;
        const result =await addproductIndb(sku,qnt,store_id,expiraction);
        res.json({response:result});
    },
    buyProduct: async(req,res)=>{
        const {store_id} = req.store;
        const { sku, quantity } = req.body;
        const response = await buyProductOne(sku,quantity,store_id);
        res.json({response:response}); 
    }
}