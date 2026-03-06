"use client"

import { createContext, useContext, useState } from "react"

const CheckoutContext = createContext()

export function CheckoutProvider({ children }) {

    const [cart, setCart] = useState(null)
    const [address, setAddress] = useState(null)

    return (
        <CheckoutContext.Provider value={{ cart, setCart, address, setAddress }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export function useCheckout() {
    return useContext(CheckoutContext)
}