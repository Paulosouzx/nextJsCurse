import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
    params,
    searchParams
}: {
    params: Promise<{ articlesId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
    const { articlesId } = use(params);
    const { lang = "en" } = use(searchParams);
    return (
        <div>
            <h1>News article {articlesId}</h1>
            <p>Reading in {lang}</p>
            <div style={{ display: "flex", gap: '10px', fontWeight: "bold", textTransform: "uppercase", fontSize: "1px" }} >
                <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
                <Link href={`/articles/${articlesId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
                <Link href={`/photo-feed`}>photo-feed</Link>
            </div>
        </div>
    );
}
