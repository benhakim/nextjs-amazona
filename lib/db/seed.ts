import data from "@/lib/data";
import {connectToDatabase} from ".";
import Product from "./models/product.model";
import {loadEnvConfig} from "@next/env";
import { cwd} from "process";


loadEnvConfig(cwd())
const main = async () => {
    try {
    const {products} = data
    await connectToDatabase(process.env.MONGODB_URI)
    await Product.deleteMany()
    const createdProducts = await Product.insertMany(products)
    console.log({
        createdProducts,
        massage: "Products created successfully"
    })
    process.exit(0)

} catch (error) {
    console.error(error)
    throw new Error ("Failed to seed database")
}
}
main()