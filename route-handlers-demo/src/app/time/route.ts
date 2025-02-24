export const revalidate = 10;

export async function GET() {
    //not cached
    return Response.json({time: new Date().toLocaleTimeString() });
}