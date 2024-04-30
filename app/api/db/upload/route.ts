import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const {image, date} = await request.json()
        await prisma.image.create({
            data: {
                image: image,
                date: date
            }
        })
        return NextResponse.json({success: true})
    } catch(error) {
        console.error('Error processing file:', error)
    }
}
