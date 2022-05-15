import styles from './styles.module.css'
import Image from 'next/image'
import { BsFillPlayFill } from "react-icons/bs"


export default function CardPodcastCarousel({ url, title, author, description }) {
  return (
    <div className={styles.container}>
       <div className={styles.podcast__cover} >
            <Image 
                src={url} 
                alt={title} 
                unoptimized={true}
                loading="eager"
                quality='90'
                layout="fill"
            />
       </div>
        <div className={styles.podcast__content}>
            <div>
                <p>10 episódios</p>
            </div>
            <div>
                <h3 className={styles.podcast__title}>{title}</h3>
                <p className={styles.podcast__author}>por {author}</p>
                <div className={styles.playerGrid}>
                    <p className={styles.podcast__description}>{description}</p>
                    <div className={styles.playerIcon}><BsFillPlayFill/></div>
                </div>
            </div>
        </div>
    </div>
  )
}