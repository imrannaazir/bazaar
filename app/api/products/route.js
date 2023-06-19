import dbConnect from "@/server/configs/dbConnect";
import { newProduct } from "@/server/controllers/productController";
import { createRouter } from "next-connect";

const router = createRouter()

dbConnect();

router.post(newProduct);

export async function POST(request, ctx) {
    return router.run(request, ctx)
}