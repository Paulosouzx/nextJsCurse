import { cookies } from "next/headers";

export default async function AboutPage() {

    const cookieStore = await cookies()
    const theme = cookieStore.get("theme")
    console.log(theme)
    return (
        <div>About Page {new Date().toLocaleDateString()}</div>
    );
}