"use client"

import { useCheckout } from "@/context/CheckoutContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import OrderSummary from "@/components/OrderSummary"

export default function PaymentPage() {
    const { address, cart } = useCheckout()
    const router = useRouter()

    useEffect(() => {
        if (!address) {
            router.push("/checkout")
        }
    }, [address, router])

    if (!cart) return null

    function handlePayment() {
        router.push("/success")
    }

    return (
        <main className="max-w-3xl mx-auto p-6">

            <h1 className="text-2xl font-bold mb-6">
                Payment & Confirmation
            </h1>

            <div className="border p-6 rounded mb-6">

                <h2 className="font-semibold mb-2">Shipping Address</h2>

                <p>{address.fullName}</p>
                <p>{address.email}</p>
                <p>{address.phone}</p>
                <p>
                    {address.city}, {address.state} - {address.pinCode}
                </p>

            </div>

            <button
                onClick={handlePayment}
                className="w-full bg-green-600 text-white py-3 rounded"
            >
                Pay Securely
            </button>

        </main>
    )
}