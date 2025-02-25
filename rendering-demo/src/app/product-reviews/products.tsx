'use client';

import { ReactNode } from "react";
import { useTheme } from "../components/theme-provider";

export default function ProductReviewsClient({ children }: { children: ReactNode }) {
    const theme = useTheme();
    return (
        <div>
            <h1 style={{ color: theme.colors.secondary }}>Product reviews</h1>
            {children}
        </div>
    );
}
