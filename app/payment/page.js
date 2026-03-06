"use client"

import { useCheckout } from "@/context/CheckoutContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, ShieldCheck } from "lucide-react"

export default function PaymentPage() {
    const { address, cart } = useCheckout()
    const router = useRouter()
    const [isProcessing, setIsProcessing] = useState(false)

    useEffect(() => {
        if (!address) router.push("/checkout")
    }, [address, router])

    if (!cart) return null

    function handlePayment() {
        setIsProcessing(true)
        setTimeout(() => {
            router.push("/success")
        }, 1500)
    }

    return (
        <motion.main
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto p-4 md:p-8 min-h-screen flex flex-col justify-center"
        >
            <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 overflow-hidden relative">

                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900">Payment</h1>
                </div>

                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-50 border border-gray-200 p-6 rounded-2xl mb-8 relative"
                >
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Delivering To</h2>
                    <p className="font-bold text-lg text-gray-900">{address.fullName}</p>
                    <p className="text-gray-600 mt-1">{address.email} • {address.phone}</p>
                    <p className="text-gray-600 mt-1">{address.city}, {address.state} - {address.pinCode}</p>
                </motion.div>

                <motion.button
                    whileHover={!isProcessing ? { scale: 1.02 } : {}}
                    whileTap={!isProcessing ? { scale: 0.98 } : {}}
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-white transition-all duration-300 shadow-lg ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                >
                    {isProcessing ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full" />
                    ) : (
                        <>
                            <ShieldCheck className="w-6 h-6" />
                            Pay Securely Now
                        </>
                    )}
                </motion.button>
            </div>
        </motion.main>
    )
}