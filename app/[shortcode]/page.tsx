import prisma from "@/lib/db";

type RedirectPageProps = {
    params: Promise<{ shortcode: string }>;
};

export default async function RedirectPage({params}: RedirectPageProps) {
    const resolvedParams = await params; // Explicitly await params

    const {shortcode} = resolvedParams;

    const url = await prisma.url.findUnique({
        where: {shortCode: shortcode},
    });

    if (!url) {
        return new Response("URL not found", {status: 404});
    }

    return Response.redirect(url.originalUrl, 307);
}
