import Image from "next/image"
import uploadIcon from "@/public/icons/upload.png"
import styles from "./styles.module.css"

type LoadFormDirType = {
    handleSendSubmit: React.FormEventHandler<HTMLFormElement>
    handleSendFile: React.ChangeEventHandler<HTMLInputElement>
    imageDir: File | null
    warning: boolean
}

const LoadFormDir:React.FC<LoadFormDirType> = ({
    handleSendSubmit,
    handleSendFile,
    imageDir,
    warning,
}) => {
    return (  
        <section className={styles.container}>
            <div className={styles.form_container}>
                <form 
                    method="POST" 
                    encType="multipart/form-data" 
                    onSubmit={handleSendSubmit}
                    className={styles.form}
                >
                    <label 
                        htmlFor="fileDir"
                        className={styles.label}
                    > 
                    <Image 
                        src={uploadIcon} 
                        alt='icon'
                        width={20}
                        height={20}
                    />Upload
                    </label>
                        <input 
                            accept="image/*"
                            type="file"
                            onChange={handleSendFile}
                            id="fileDir"
                            className={styles.input}
                        />
                    <button 
                        className={styles.submit}
                        type="submit"
                    >Send to DIR</button>
                </form> 
            </div>

            {/* PREVIEW  */}
            {warning && <span>Choose image</span>}
            <div className={styles.preview}>
                {imageDir && (
                    <Image
                        src={URL.createObjectURL(imageDir)}
                        alt="img"
                        width={100}
                        height={100}
                    />
                )}
            </div>
        </section>
    )
}

export default LoadFormDir