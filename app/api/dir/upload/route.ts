import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const data = await request.formData()
       
        //IMAGE
        const image: File | null = data.get('image') as unknown as File

        //DATE
        const date = data.get('date') as string | null

        //array and buffer from request data
        const bytes = await image?.arrayBuffer()
        const buffer = Buffer.from(bytes)

        //it's a path where images will be store
        const path = `./public/images/${image.name}`

        try {
            //create directory 
            await mkdir('./public/images', {recursive: true})
        } catch (error) {
            console.error(error)
        }

        await writeFile(path, buffer)

        await prisma.imageDir.create({
            data: {
                image: path,
                date: date,
                name: image.name
            }
        })
        
        return NextResponse.json({success: true})
    } catch (e) {
        console.log(e)
    }
}