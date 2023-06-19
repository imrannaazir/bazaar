import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product!"]
    },
    description: {
        type: String,
        required: [true, "Please Enter description!"]
    },
    cost: {
        type: Number,
        required: [true, "Please enter const!"]
    },
    price: {
        type: Number,
        required: [true, "Please enter price!"]
    },
    unit: {
        type: String,
        required: [true, "Please enter product unit"],
        enum: {
            values: [
                "kg",
                "gram",
                "pc",
                "liter"
            ]
        }
    },
    number_unit: {
        type: Number,
        required: [true, "Please enter number of unit"]
    },
    img: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            }

        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product categories!"],
        enum: {
            values: [
                "Fish & Meat"
            ],
            message: "Please select correct category!"
        }
    },
    creator: {
        type: String,
        required: [true, "Please input creator username"]
    }


}, { timestamps: true });

const Product = mongoose.models.Product ||
    mongoose.model("Product", productSchema);
export default Product;