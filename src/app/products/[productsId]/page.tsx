export default async function ProductsDetails({ params, }: {
    params: Promise<{ productsId: string }>
}) {
    const productId = (await params).productsId
    return (
        <>
            <h1>Details about {productId}</h1>
        </>
    )
}