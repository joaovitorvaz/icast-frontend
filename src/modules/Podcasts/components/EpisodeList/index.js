import styles from './styles.module.css'
import Image from 'next/image'
import { BsFillPlayFill } from "react-icons/bs"

export default function EpisodeList({ url, title, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.episodeCover}>
        <Image 
          src={url} 
          alt={title} 
          unoptimized={true}
          loading="eager"
          quality='90'
          width={55}
          height={55}
        />
      </div>
      <div className={styles.episodeText}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.playerIcon}><BsFillPlayFill/></div>
    </div>
  )
}