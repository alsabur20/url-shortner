import { redirect } from "next/navigation";
import prisma from "@/lib/db";

interface RedirectPageProps {
    params: {
        shortcode: string;
    };
}

export default async function RedirectPage({ params }: RedirectPageProps) {
    const { shortcode } = params;

    const url = await prisma.url.findUnique({
        where: { shortCode: shortcode },
    });

    if (!url) {
        return <h1>404 - Not Found</h1>; // Or throw a 404 error for Next.js handling
    }
    await prisma.url.update({
        where: {
            id: url.id,
        },
        data: {
            visits: {
                increment: 1,
            },
        },
    });
    redirect(url.originalUrl); // Proper usage of Next.js redirect
}
