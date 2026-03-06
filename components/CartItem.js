export default function CartItem({ item }) {
    return (
        <div className="flex gap-4 border-b pb-4">
            <img
                src={item.image}
                alt={item.product_name}
                className="w-20 h-20 object-cover rounded"
            />

            <div className="flex flex-col justify-between">
                <h3 className="font-semibold">{item.product_name}</h3>

                <p className="text-gray-600">
                    ₹{item.product_price} x {item.quantity}
                </p>

                <p className="font-semibold">
                    ₹{item.product_price * item.quantity}
                </p>
            </div>
        </div>
    )
}