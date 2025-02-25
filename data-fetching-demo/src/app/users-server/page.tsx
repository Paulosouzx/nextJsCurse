type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 4000))

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: User[] = await res.json();
    return (
        <ul className="space-y-4 p-4">
            {users.map((line) => (
                <li
                    key={line.id}
                    className="p-9 bg-white shadow-md rounded-lg text-gray-700"
                >
                    <div className="font-bold">{line.name}</div>
                    <div className="text-sm">
                        <div>Username: {line.username}</div>
                        <div>Email: {line.email}</div>
                        <div>Phone: {line.phone}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}