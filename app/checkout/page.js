"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useCheckout } from "@/context/CheckoutContext"

export default function CheckoutPage() {
    const router = useRouter()
    const { setAddress } = useCheckout()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    function onSubmit(data) {
        setAddress(data)
        router.push("/payment")
    }

    return (
        <main className="max-w-xl mx-auto p-6">

            <h1 className="text-2xl font-bold mb-6">
                Shipping Address
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <input
                    placeholder="Full Name"
                    {...register("fullName", { required: true })}
                    className="w-full border p-2 rounded"
                />

                <input
                    placeholder="Email"
                    {...register("email", { required: true })}
                    className="w-full border p-2 rounded"
                />

                <input
                    placeholder="Phone"
                    {...register("phone", {
                        required: true,
                        pattern: /^[0-9]{10}$/
                    })}
                    className="w-full border p-2 rounded"
                />

                <input
                    placeholder="PIN Code"
                    {...register("pinCode", { required: true })}
                    className="w-full border p-2 rounded"
                />

                <input
                    placeholder="City"
                    {...register("city", { required: true })}
                    className="w-full border p-2 rounded"
                />

                <input
                    placeholder="State"
                    {...register("state", { required: true })}
                    className="w-full border p-2 rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded"
                >
                    Continue to Payment
                </button>

            </form>
        </main>
    )
}