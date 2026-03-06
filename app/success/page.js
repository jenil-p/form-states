"use client"

import { useCheckout } from "@/context/CheckoutContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, Home } from "lucide-react"

export default function SuccessPage() {
    const { address } = useCheckout()
    const router = useRouter()

    useEffect(() => {
        if (!address) router.push("/")
    }, [address, router])

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-linear-to-b from-white to-green-50">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="text-green-500 mb-8"
            >
                <CheckCircle2 className="w-32 h-32" strokeWidth={1.5} />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-black text-gray-900 mb-4 text-center"
            >
                Order Successful!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-500 mb-10 text-center max-w-md"
            >
                Thank you for your purchase, {address?.fullName?.split(" ")[0]}.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Link href="/">
                    <button
                        className="bg-gray-900 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-colors duration-300 shadow-xl"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </button>
                </Link>
            </motion.div>
        </main>
    )
}