import Image from 'next/image'
import styles from './styles.module.css'
import { Nunito } from 'next/font/google'
import uploadIcon from '../../../public/icons/logoUpload.png'

const josefinSans =  Nunito({ subsets: ["latin"] })

const Header:React.FC = () => {
    return(
        <div className={styles.container}>
            <Image 
                src={uploadIcon} 
                alt='LogoIcon' 
                width={90}
                height={55}
            />
            <h1 className={`${styles.title} ${josefinSans.className}`}>
                File Upload[er]
            </h1>
        </div>
    )
}

export default Header