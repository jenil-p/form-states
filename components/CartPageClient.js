"use client"

import { useEffect } from "react"
import { useCheckout } from "@/context/CheckoutContext"
import CartItem from "./CartItem"
import OrderSummary from "./OrderSummary"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag, ArrowRight } from "lucide-react"

export default function CartPageClient({ data }) {
    const { setCart } = useCheckout()

    useEffect(() => {
        setCart(data)
    }, [data, setCart])

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-6xl mx-auto p-4 md:p-8 min-h-screen"
        >
            <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-4xl md:text-5xl font-black text-gray-900 mb-10 flex items-center gap-4"
            >
                <ShoppingBag className="w-10 h-10 text-green-600" />
                Your Cart
            </motion.h1>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* items in the cart */}
                <motion.div
                    className="lg:col-span-2 space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {data.cartItems.map((item) => (
                        <CartItem key={item.product_id} item={item} />
                    ))}
                </motion.div>

                {/* cart details */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    className="sticky top-8 h-fit"
                >
                    <OrderSummary
                        cartItems={data.cartItems}
                        shipping_fee={data.shipping_fee}
                        discount={data.discount_applied}
                    />

                    <Link href="/checkout" className="block mt-6">
                        <motion.button
                            className="w-full group bg-gray-900 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                        >
                            Proceed to Checkout
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </motion.main>
    )
}