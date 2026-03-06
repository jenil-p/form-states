"use client"

import { useEffect } from "react"
import { useCheckout } from "@/context/CheckoutContext"
import CartItem from "./CartItem"
import OrderSummary from "./OrderSummary"
import Link from "next/link"

export default function CartPageClient({ data }) {

    const { setCart } = useCheckout()

    useEffect(() => {
        setCart(data)
    }, [data, setCart])

    return (
        <main className="max-w-6xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-8">
                Cart Summary
            </h1>

            <div className="grid md:grid-cols-2 gap-10">

                <div className="space-y-6">
                    {data.cartItems.map((item) => (
                        <CartItem key={item.product_id} item={item} />
                    ))}
                </div>

                <div>
                    <OrderSummary
                        cartItems={data.cartItems}
                        shipping_fee={data.shipping_fee}
                        discount={data.discount_applied}
                    />

                    <Link href="/checkout">
                        <button className="w-full bg-green-600 text-white py-3 rounded-lg mt-4">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>

            </div>

        </main>
    )
}