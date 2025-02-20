import { Card } from "@/app/components/card";
import Link from "next/link";

export default function Notifications() {
    return (
        <Card>
            <div>Notification</div>
            <div>
                <Link href="/complex-dashboard/archived">Archived</Link>
            </div>
        </Card>
    );
}