import Image from "next/image"
import { NextPage } from "next"
import styles from "./styles.module.css"

import { handleDelete } from "../BaseDelete/BaseDelete"

interface ImageData {
    id: string,
    image: string,
    date: string
}

type ImageProps = {
    images: ImageData[] | undefined 
}

const BaseContent:NextPage<ImageProps> = ({ images }) => {

    function handleDownload (id: string) {
        if(images) {
            images.forEach(img => {
                if(img.id === id) {
                    const downloadLink = document.createElement('a')
                    downloadLink.href = img.image
                    downloadLink.download = '1.png'
                    downloadLink.setAttribute('rel', 'noopener noreferrer')
                    document.body.appendChild(downloadLink)
                    downloadLink.click()
                }
            })
        }
    }

    return (
        <>
            <div className={styles.uploadedPhoto}>
                {images && images.map((img, idx) => (
                    <ul key={img.id} className={styles.list}>
                        <li  key={img.id} className={styles.listItem}>
                            <div className={styles.info}>
                                <span className={styles.title}>
                                    {idx + 1}
                                </span>
                                <span>
                                    {img.date}
                                </span>
                            </div>                          
                            <Image 
                                src={img.image} 
                                alt="img" 
                                className={styles.image}
                                width={200} 
                                height={200}
                            />
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <button
                                    className={styles.downloadButton}
                                    onClick={() => handleDownload(img.id)}
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

export default BaseContent