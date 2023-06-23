import dbConnect from "@/server/configs/dbConnect";
import { getProducts, newProduct } from "@/server/controllers/productController";
import { createRouter } from "next-connect";

const router = createRouter()

dbConnect();

router.post(newProduct);
router.get(getProducts)

export async function POST(request, ctx) {
    return router.run(request, ctx)
}


export async function GET(request, ctx) {
    return router.run(request, ctx)
}