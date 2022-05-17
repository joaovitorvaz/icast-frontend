import styles from './styles.module.css'
import Image from 'next/image'
import { BsFillPlayFill } from "react-icons/bs"
import { useContext } from 'react'
import { PlayerContext } from '../../../../contexts/Player'

export default function CardPodcastCarousel({ id, url, title, author, description, countEpisodes }) {
  
    const { loadPodcast } = useContext(PlayerContext);

  function handlePlay() {
    loadPodcast(id)
  }
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
                <p>{countEpisodes} episódios</p>
            </div>
            <div className={styles.body}>
                <h3 className={styles.podcast__title}>{title}</h3>
                <p className={styles.podcast__author}>por {author}</p>
                <div className={styles.playerGrid}>
                    <p className={styles.podcast__description}>{description}</p>
                    <button 
                        className={styles.playerIcon}
                        onClick={handlePlay}
                    >
                        <BsFillPlayFill/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}