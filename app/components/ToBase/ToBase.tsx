'use client'
import { useState, useEffect } from "react"
import { NextPage } from "next"
import LoadTitle from "../../ui/LoadTitle"
import BaseUpload from "./BaseUpload/BaseUpload"
import BaseDescription from "./BaseDescription/BaseDescription"
import { BaseGet } from "./BaseGet/BaseGet"
import BaseContent from "./BaseContent/BaseContent"
import styles from "./styles.module.css"

const ToBase:NextPage = () => {

    const [ images, setImages ] = useState<[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await BaseGet()
                setImages(data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    return (
        <main className={images.length !== 0 ? styles.container : styles.onload}>
            <LoadTitle
                title='Image Upload to Mongo DB using Base64'
            />
            <section className={styles.upload_description}>
                <BaseUpload/>
                <BaseDescription/>
            </section>
            <section className={styles.content}>
                <BaseContent  images={images}/>
            </section>
        </main>
    )
}

export default ToBase