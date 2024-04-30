import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(request: NextRequest, response: NextResponse) {
    try {
        const images = await prisma.image.findMany()
        return NextResponse.json({success: true, images})
    } catch (error) {
        console.error('Error processing file:', error)
    } 
}