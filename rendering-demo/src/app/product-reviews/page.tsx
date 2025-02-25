import { Products } from "@/app/components/products";
import { Reviews } from "@/app/components/reviews";
import { Suspense } from "react";
import ProductReviewsClient from "./products";

export default function ProductReviews() {
    return (
        <div>
            <ProductReviewsClient>
                <Suspense fallback={<p>Loading product details...</p>}>
                    <Products />
                </Suspense>
                <Suspense fallback={<p>Loading review  ...</p>}>
                    <Reviews />
                </Suspense>
            </ProductReviewsClient>
        </div>
    )
}