const Shopify = require("./Shopify");
const sendToCloudinary = require("./sendToCloudinary");

async function createProduct({ title, imageUrl, body, variants }) {
    // Create the product listing
    const {
        data: { product },
    } = await Shopify.product.create({
        title,
        body_html: body,
        vendor: "Haley M. Fairchild",
        product_type: "Painting",
        variants,
    });

    // Add product to the base collection
    await Shopify.collection.create(product.id, "275626492100");

    // Upload the product image to Cloudinary
    sendToCloudinary(imageUrl, async function (cloudinaryImageUrl) {
        Shopify.image.create(product.id, cloudinaryImageUrl);
    });
}

module.exports = createProduct;
