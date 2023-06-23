import { NextResponse } from "next/server"
import Product from "../models/products"


export const newProduct = async (req) => {
    const data = await req.json()
    const product = await Product.create(data)

    return NextResponse.json({ product })
}

export const getProducts = async () => {
    const products = await Product.find()

    return NextResponse.json({ products })
}