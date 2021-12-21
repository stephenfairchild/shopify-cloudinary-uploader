const createProduct = require("./createProduct");

createProduct({
    title: "A",
    imageUrl:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80 ",
    body: "Product A",
    variants: [
        {
            option1: "36x26 Canvas",
            price: "10.00",
            sku: "null",
        },
        {
            option1: "Second",
            price: "20.00",
            sku: "null",
        },
    ],
});
