import { Metadata } from "next"

type Props = {
    params: Promise<{ productsId: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productsId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`)
        }, 100)
    })
    return {
        title: `Product ${title}`,
    };
}


export default async function ProductsDetails({ params, }: Props) {
    const productId = (await params).productsId
    return (
        <>
            <h1>Details about {productId}</h1>
        </>
    )
}