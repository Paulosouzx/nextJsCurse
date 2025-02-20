"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter();
    function handleClick() {
        console.log('placing your order')
        router.push('/')
    }
    return (
        <>
            <h1>Order page</h1>
            <button onClick={handleClick}>Order</button>
        </>
    )
}