export const dynamic = "force-static";

export async function GET() {
    const categories = [
        { id: 1, name: 'Eletronics'},
        { id: 2, name: 'Books'},
        { id: 1, name: 'Eletronics'},
        { id: 1, name: 'Eletronics'},
    ]

    return Response.json(categories)
}