import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const urls = await prisma.url.findMany({
            take: 5,
            orderBy: {
                createdAt: "desc"
            }
        })
        return NextResponse.json(urls)
    }
    catch (error) {
        console.error(error)
        return NextResponse.json({ error: "An error occurred while fetching urls" }, { status: 500 })
    }
}