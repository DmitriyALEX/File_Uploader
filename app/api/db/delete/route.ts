import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json()
        await prisma.image.delete({
            where: { id: id },
        })
        return NextResponse.json({success: true})
    } catch (e) {
        console.log(e)
    }
} 

