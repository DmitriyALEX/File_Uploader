'use client'
import { useState, useEffect } from "react"
import LoadTitle from "../../ui/LoadTitle"
import DirectoryUpload from "./DirectoryUpload/DirectoryUpload"
import DirectoryDescription from "./DirectoryDescription/DirectoryDescription"
import { DirectoryGet } from "./DirectoryGet/DirectoryGet"
import DirectoryContent from "./DirectoryContent/DirectoryContent"
import styles from "./styles.module.css"

const ToDirectory: React.FC = () => {

    const [imageDb, setImageDb] = useState<[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await DirectoryGet()
                setImageDb(data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    return (
        <main className={styles.container}>
            <LoadTitle
                title='Image Upload to App Directory (static)'
            />
    
            <section className={styles.description_upload}>
                <DirectoryDescription/>
                <DirectoryUpload/>
            </section>
            
            <section className={styles.content}>
                <DirectoryContent 
                    imageDb={imageDb}
                />
            </section>
        </main>
    )
}

export default ToDirectory