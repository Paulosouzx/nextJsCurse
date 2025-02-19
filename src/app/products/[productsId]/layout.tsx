export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html>
                <body>
                    {children}
                    <h2>Featured products</h2>
                </body>
            </html>

        </>
    )
}