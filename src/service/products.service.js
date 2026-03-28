const PRODUCTS = require("../models/product");
const sequelize = require("../config/dbconfig");
const PRODUCT_BATCHES = require("../models/product_batches");
const { query } = require("express-validator");
module.exports = {
    foundAll: async (store_id) => {
        try {
            return PRODUCTS.findAll({
                where: {
                    store_id: store_id
                }
            });
        } catch (error) {
            console.log(error);
            return new Error("internal error");
        }
    },
    foundOne: async (id) => {
        return await PRODUCTS.findOne({
            where: {
                id
            }
        })
    },
    setProduct: async (data, store_id) => {
        const dataSet = {
            store_id,
            nome: data.nome,
            sku: data.sku,
            price_per_unit: data.price_per_unit,
            unit_type: data.unit_type
        }
        try {
            return PRODUCTS.create(dataSet);

        } catch (error) {
            return error;
        }
    },
    addproductIndb: async (sku, qnt, store_id, expiraction) => {
        try {
            //product_id
            const { id } = await PRODUCTS.findOne({ where: { sku, store_id } })
            await PRODUCT_BATCHES.create({
                product_id: id,
                store_id,
                quantity: qnt,
                store_id,
                expiraction_date: expiraction
            });
            return { message: 'Adicionou um novo lote' }
        } catch (error) {
            return error;
        }
    },
    buyProductOne: async (sku, qunatitySet, store_id) => {
        try {
            const { id , price_per_unit } = await PRODUCTS.findOne({ where: { sku, store_id }, attributes: ['id','price_per_unit'] });
            let { quantity } = await PRODUCT_BATCHES.findOne({ where: { product_id: id } });
            quantity = Number(quantity);
            qunatitySet = Number(qunatitySet);
            const qnt = Number(quantity - qunatitySet);
            console.log(`Total : ${price_per_unit* qunatitySet}`);
            if( qunatitySet > quantity ){
                return { mensage:'Quantidade superio a existente' }
            }
            const res = await PRODUCT_BATCHES.update({ quantity: qnt }, {
                where: {
                    store_id: store_id,
                    product_id: id
                }
            });

            return {mensage:'vendeu o produto'};

        } catch (error) {
            return { mensage: 'internal error' }
        }
    }
}