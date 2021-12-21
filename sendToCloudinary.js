var cloudinary = require("cloudinary").v2;

function sendToCloudinary(imageUrl, callback) {
    const cloudinaryKey = process.env.CLOUDINARY_KEY;
    const cloudinarySecret = process.env.CLOUDINARY_SECRET;
    const cloudinaryUrl = process.env.CLOUDINARY_URL;
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

    cloudinary.config({
        cloud_name: cloudName,
        api_key: cloudinaryKey,
        api_secret: cloudinarySecret,
        secure: true,
    });

    cloudinary.uploader.upload(
        imageUrl,
        { tags: "basic_sample" },
        function (err, image) {
            if (err) {
                console.warn(err);
            }
            console.log("Public ID: " + image.public_id);
            callback(image.url);
        }
    );
}

module.exports = sendToCloudinary;
