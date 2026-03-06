"use client"

import { useCheckout } from "@/context/CheckoutContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"

export default function SuccessPage() {
    const { address } = useCheckout()
    const router = useRouter()

    useEffect(() => {
        if (!address) {
            router.push("/")
        }
    }, [address, router])

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">

            <h1 className="text-3xl font-bold text-green-600 mb-4">
                Order Successful!
            </h1>

            <p className="mb-6">
                Thank you for your purchase.
            </p>

            <Link href="/">
                <button className="bg-green-600 text-white px-6 py-3 rounded">
                    Back to Home
                </button>
            </Link>

        </main>
    )
}