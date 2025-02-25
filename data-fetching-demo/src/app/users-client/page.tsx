"use client";

import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if (!response.ok) throw new Error("Failed to fetch users");
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 5000)
            }
        }
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

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