"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useCheckout } from "@/context/CheckoutContext"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function CheckoutPage() {
    const router = useRouter()
    const { setAddress } = useCheckout()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data) {
        setAddress(data)
        router.push("/payment")
    }

    const inputClasses = "w-full bg-gray-50 border border-gray-200 text-gray-900 p-4 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 focus:bg-white outline-none transition-all shadow-sm"

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto p-4 md:p-8 min-h-screen flex flex-col justify-center"
        >
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-green-100 rounded-full text-green-600">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900">
                        Shipping Details
                    </h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <input placeholder="Full Name" {...register("fullName", { required: true })} className={inputClasses} />
                            {errors.fullName && <span className="text-red-500 text-xs ml-2 mt-1">Required</span>}
                        </div>
                        <div>
                            <input placeholder="Email" type="email" {...register("email", { required: true })} className={inputClasses} />
                            {errors.email && <span className="text-red-500 text-xs ml-2 mt-1">Required</span>}
                        </div>
                    </div>

                    <div>
                        <input placeholder="Phone" {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })} className={inputClasses} />
                        {errors.phone && <span className="text-red-500 text-xs ml-2 mt-1">Valid 10-digit phone required</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="md:col-span-1">
                            <input placeholder="PIN Code" {...register("pinCode", { required: true })} className={inputClasses} />
                        </div>
                        <div className="md:col-span-1">
                            <input placeholder="City" {...register("city", { required: true })} className={inputClasses} />
                        </div>
                        <div className="md:col-span-1">
                            <input placeholder="State" {...register("state", { required: true })} className={inputClasses} />
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gray-900 hover:bg-green-600 text-white font-bold py-4 rounded-xl mt-8 transition-colors duration-300 shadow-lg"
                    >
                        Continue to Payment
                    </motion.button>
                </form>
            </div>
        </motion.main>
    )
}