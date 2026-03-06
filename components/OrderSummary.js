import { calculateSubtotal, calculateTotal } from "@/lib/calculations"

export default function OrderSummary({ cartItems, shipping_fee, discount }) {
    const subtotal = calculateSubtotal(cartItems)
    const total = calculateTotal(subtotal, shipping_fee, discount)

    return (
        <div className="bg-linear-to-br from-gray-50 to-gray-100/50 backdrop-blur-md border border-gray-200/60 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                Order Summary
            </h2>

            <div className="space-y-4 text-gray-600 font-medium">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-gray-900">₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-gray-900">₹{shipping_fee}</span>
                </div>

                <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>- ₹{discount}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-3xl font-black text-green-600">₹{total}</span>
                </div>
            </div>
        </div>
    )
}