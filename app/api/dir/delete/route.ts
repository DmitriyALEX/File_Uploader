import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import fs from 'fs/promises'

const prisma = new PrismaClient()

export async function DELETE(request: NextRequest, response: NextResponse) {
    try {
        const { id, name } = await request.json()
        await fs.unlink(name)
        await prisma.imageDir.delete({
            where: { id: id },
        })
        return NextResponse.json({success: true})
    } catch (e) {
        console.log(e)
    }
} 