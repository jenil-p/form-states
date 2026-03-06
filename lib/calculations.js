export function calculateSubtotal(items) {
    return items.reduce(
        (total, item) => total + item.product_price * item.quantity, 0
    )
}

export function calculateTotal(subtotal, shipping, discount) {
    return subtotal + shipping - discount
}