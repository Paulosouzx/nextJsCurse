type User = {
    id: number,
    name: string,
    username: string,
    email: string,
}

export default async function Author({ userId }: { userId: number }) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    const user: User = await res.json()

    return (
        <div className="text-sm text-gray-500">
            Written by:{" "}
            <span className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                {user.name}
            </span>
        </div>
    );
}