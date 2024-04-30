import styles from "./styles.module.css"

type TitleType = {
    title: string
}

const LoadTitle:React.FC<TitleType> = ({title}) => {
    return (
        <section className={styles.title}>
            <h2 className={styles.titleText}>
                {title}
            </h2>
        </section>
    )
}

export default LoadTitle