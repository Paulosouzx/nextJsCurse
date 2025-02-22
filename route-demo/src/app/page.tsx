import Link from "next/link"

export default function Home() {
    return (
        <>
            <h1>Welcome home</h1>
            <Link
                href="/products"
                style={{
                    padding: "10px",
                    backgroundColor: 'blue',
                    borderRadius: "8px",
                    color: "white"
                }}
            >
                Products
            </Link>
            <Link href="/articles/123?lang=en">Another Language</Link>
        </>
    )
}