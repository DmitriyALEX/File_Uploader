import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest, response: NextResponse) {
    try {
        const files = await prisma.imageDir.findMany()
        return NextResponse.json(files)
    } catch (error) {
        console.error('Error processing file:', error)
    } 
}

//-------------------------------------------------------------------
// GET FILES FROM DIRECTORY USING FS MODULE FROM NODE.JS NOT USING DB

// export async function GET() {
//     try {
//         const dirPath = './public/images'
//         const files = await fs.readdir(dirPath)
//         return NextResponse.json(files)
//     } catch (e) {
//         console.log(e)
//     }
// }
