'use client'
import type { NextPage } from "next"
import { useState } from "react"

import getDate from "@/app/lib/date"

import LoadFormDb from "../../../ui/LoadFormDb"

const BaseUpload: NextPage = () => {

    const [ image, setImage ] = useState<string | null>(null)
    const [ date, setDate ] = useState<string | null>(null)
    const [ warning, setWarning ] = useState<boolean>(false)

    const URL_UPLOAD_DB = process.env.NEXT_PUBLIC_UPLOAD_TO_DB || ''

    async function handleFile (e: React.ChangeEvent<HTMLInputElement>) {
        if(!e.target.files) {
            return
        } else {
            const reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onload = async (e) => {
                const result = e.target?.result
                if(typeof result === 'string' && result !== null) {
                    setImage(result)
                    setWarning(false)
                    setDate(getDate())
                }
            }
            reader.onerror = (error) => {
                console.log(error)
            }   
        }   
    }

    async function sendData() {
        try {
            await fetch(URL_UPLOAD_DB, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    image: image, 
                    date: date 
                })
            })
        } catch (e) {
            console.log(e)
        }
    }

    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(image !== null) {
            sendData()
        } else {
            setWarning(true)
        }
        setImage(null)
    }

    return (
        <>
            <LoadFormDb
                handleSubmit={handleSubmit}
                handleFile={handleFile}
                image={image}
                warning={warning}
            />
        </>
    )
}

export default BaseUpload