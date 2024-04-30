import Image from "next/image"
import uploadIcon from "@/public/icons/upload.png"
import styles from "./styles.module.css"

type LoadFormDbType = {
    handleSubmit: React.FormEventHandler<HTMLFormElement>
    handleFile: React.ChangeEventHandler<HTMLInputElement>
    image: string | null
    warning: boolean
}

const LoadFormDb:React.FC<LoadFormDbType> = ({
    handleSubmit,
    handleFile,
    image,
    warning,
}) => {
    return (
        <section className={styles.container}>
            {/* PREVIEW  */}
            {warning && <span>Choose image</span>}
            <div className={styles.preview}>
                {image !== null && (
                    <Image
                        src={image}
                        alt="img"
                        width={100}
                        height={100}
                    />
                )}
            </div>

            {/* FORM */}
            <div className={styles.form_container}>
                <form 
                    method="POST" 
                    encType="multipart/form-data" 
                    onSubmit={handleSubmit}
                    className={styles.form}
                >
                    <label 
                        htmlFor="file"
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
                            onChange={handleFile}
                            id="file"
                            className={styles.input}
                        />
                    <button 
                        className={styles.submit}
                        type="submit"
                    >Send to DB</button>
                </form> 
            </div>
        </section>
    )
}

export default LoadFormDb