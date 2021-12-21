const axios = require("axios");
const baseUrl = process.env.SHOPIFY_BASE_URL;

const Shopify = {
    product: {
        get: async () => {
            const resource = "/products.json";
            const { data: products } = await axios.get(`${baseUrl}${resource}`);

            return products;
        },
        create: async (data) => {
            const resource = "/products.json";
            const response = await axios.post(`${baseUrl}${resource}`, {
                product: data,
            });

            return response;
        },
    },
    collection: {
        create: async (productId, collectionId) => {
            const response = await axios.post(`${baseUrl}/collects.json`, {
                collect: {
                    collection_id: collectionId,
                    product_id: productId,
                },
            });

            return response;
        },
    },
    image: {
        create: async (productId, imageUrl) => {
            const response = await axios.post(
                `${baseUrl}/products/${productId}/images.json`,
                {
                    image: {
                        src: imageUrl,
                    },
                }
            );

            return response;
        },
    },
};

module.exports = Shopify;
