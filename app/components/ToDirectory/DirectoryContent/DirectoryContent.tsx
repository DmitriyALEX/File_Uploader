'use client'
import Image from "next/image"
import { NextPage } from "next"
import styles from "./styles.module.css"

interface ImageDirDb {
    id: string,
    image: string, //static path from db
    date: string
}

type ImageProps = {
    imageDb: ImageDirDb[] | undefined 
}

const DirectoryContent:NextPage<ImageProps> =  ({ imageDb }) => {
    
    function handleDownload (id: string) {
        if(imageDb) {
            imageDb.forEach(img => {
                if(img.id === id) {
                    // NAME OF IMAGE from db
                    const imageName = img.image.slice(img.image.indexOf('/images'))
                    const downloadLink = document.createElement('a')
                    downloadLink.href = imageName
                    downloadLink.download = imageName
                    downloadLink.setAttribute('rel', 'noopener noreferrer')
                    document.body.appendChild(downloadLink)
                    downloadLink.click()
                    document.body.removeChild(downloadLink)
                }
            })
        }
    }

    const URL_DELETE = process.env.NEXT_PUBLIC_DELETE_FROM_DIR || ''

    function handleDelete(id: string) {
        if(imageDb) {
            imageDb.forEach(img => {
                if(img.id === id) {
                    try {
                        fetch(URL_DELETE, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id, name: img.image })
                        })
                    } catch (e) {
                        console.log(e)
                    }
                } 
            })
        } 
    }

    return (
        <>
            {/* RENDER INFO FROM DB  */}
            <div className={styles.uploadedPhoto}>
                {imageDb?.map((img, index) => (
                    <ul key={index} className={styles.list}>

                        <li key={index} className={styles.listItem}>
                            {/* INFO */}
                            <div className={styles.info}>
                                <span className={styles.title}>
                                    {index + 1}
                                </span>
                                {/* DATE */}
                                <span>
                                    {img.date}
                                </span>

                                {/* PATH */}
                                <span> 
                                    <strong>PATH:</strong>
                                    &nbsp;
                                    {img.image.length > 20 ? `${img.image.substring(0, 20)}...` : img.image}
                                </span>
                            </div> 

                            <Image 
                                key={index} 
                                src={img.image.slice(img.image.indexOf('/images'))}
                                alt='img'
                                className={styles.image}
                                width={180}
                                height={180}
                            />

                            {/* NAV */}
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <button
                                    className={styles.downloadButton}
                                    onClick={() => {handleDownload(img.id)}}
                                >Download
                                </button>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => handleDelete(img.id)}
                                >Delete
                                </button>
                            </div>
                        </li>
                    </ul>  
                ))}
            </div>
        </>
    )
}

export default DirectoryContent