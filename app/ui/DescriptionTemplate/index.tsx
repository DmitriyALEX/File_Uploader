import styles from "./styles.module.css"

interface PageTemplate {
    children: React.ReactNode
}

const DescriptionTemplate: React.FC<PageTemplate> = ({ children }) => {
    return (
        <section className={styles.container}> 
            {children}
        </section>
    )
}

export default DescriptionTemplate