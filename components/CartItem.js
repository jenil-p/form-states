"use client"

import { motion } from "framer-motion"

export default function CartItem({ item }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ boxShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}
            className="flex gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all"
        >
            <div className="relative overflow-hidden rounded-xl">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={item.image}
                    alt={item.product_name}
                    className="w-24 h-24 object-cover transition-transform duration-500"
                />
            </div>

            <div className="flex flex-col justify-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">{item.product_name}</h3>
                <p className="text-gray-500 text-sm mt-1">
                    ₹{item.product_price} <span className="text-gray-400 mx-1">x</span> {item.quantity}
                </p>
                <p className="font-extrabold text-green-600 text-lg mt-2">
                    ₹{item.product_price * item.quantity}
                </p>
            </div>
        </motion.div>
    )
}