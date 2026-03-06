import { calculateSubtotal, calculateTotal } from "@/lib/calculations"

export default function OrderSummary({ cartItems, shipping_fee, discount }) {
    const subtotal = calculateSubtotal(cartItems)
    const total = calculateTotal(subtotal, shipping_fee, discount)

    return (
        <div className="border rounded-lg p-6 bg-gray-50">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>₹{shipping_fee}</span>
            </div>

            <div className="flex justify-between mb-4">
                <span>Discount</span>
                <span>₹{discount}</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
            </div>
        </div>
    )
}