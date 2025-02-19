export default async function ProductReview({ params, }: {
    params: Promise<{ productsId: string, reviewsId: string }>
}) {
    const { productsId, reviewsId } = await params
    return <h1>Review {productsId} for product {reviewsId} </h1>
}