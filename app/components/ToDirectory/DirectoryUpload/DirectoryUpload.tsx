'use client'
import { useState } from "react"
import getDate from "@/app/lib/date"

import LoadFormDir from "../../../ui/LoadFormDir"

const DirectoryUpload: React.FC = () => {

    const [ imagePreview, setImagePreview ] = useState<File | null>(null)
    const [ date, setDate ] = useState<string | null>(null)
    const [ warning, setWarning ] = useState<boolean>(false)

    const URL_UPLOAD_DIR = process.env.NEXT_PUBLIC_UPLOAD_TO_DIR || ''

    async function handleSendFile (e: React.ChangeEvent<HTMLInputElement>) {
        if(!e.target.files) {
            return
        } else {
            setImagePreview(e.target.files[0])
            setDate(getDate())
        }   
    }

    async function handleSendData() {
        if(!imagePreview) return;
        try {
            const data = new FormData()
            if (date !== null) {
                data.append('date', date);
            }
            data.append('image', imagePreview)
            await fetch(URL_UPLOAD_DIR, {
                method: 'POST',
                body: data
            })
        } catch (e) {
            console.log(e)
        }
    }

    function handleSendSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(imagePreview !== null) {
            handleSendData()
            setImagePreview(null)
        } else {
            setWarning(true)
        }
    }

    return (
        <>
            <LoadFormDir
                handleSendSubmit={handleSendSubmit}
                handleSendFile={handleSendFile}
                imageDir={imagePreview}
                warning={warning}
            />
        </>
    )
}

export default DirectoryUpload