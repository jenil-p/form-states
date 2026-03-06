import { cartData } from "@/data/cartData.js"

export async function GET() {
    return Response.json(cartData)
}