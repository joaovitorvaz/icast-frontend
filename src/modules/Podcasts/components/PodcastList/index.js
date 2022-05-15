import styles from './styles.module.css'
import Image from 'next/image'
import { BsFillPlayFill } from "react-icons/bs"

export default function PodcastList({ url, title, author, description }) {
  return (
    <div className={styles.podcastcontainer}>
      <div className={styles.podcastCover}>
        <Image 
          src={url} 
          alt={title} 
          unoptimized={true}
          loading="eager"
          quality='90'
          height={200}
          width={200}
        />
      </div>

      <div className={styles.podcastText}>
        <h3 className={styles.podcasTtitle}>{title}</h3>
        <p className={styles.podcastAuthor}>por {author}</p>
        <p className={styles.podcastDescription}>{description}</p>
        <p className={styles.episodes}>10 EPISÓDIOS</p>
      </div>
      <div className={styles.podcastPlay}><BsFillPlayFill/></div>
    </div>
  )
}