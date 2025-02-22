import NotFound from "@/app/not-found";

export default async function ProductReview({ params, }: {
    params: Promise<{ productsId: string, reviewsId: string }>
}) {
    const { productsId, reviewsId } = await params;
    if (parseInt(reviewsId) > 1000) {
        NotFound();
    }
    return <h1>Review {productsId} for product {reviewsId} </h1>
}