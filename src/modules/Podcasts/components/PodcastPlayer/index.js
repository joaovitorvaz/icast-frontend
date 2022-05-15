import styles from './styles.module.css'
import Image from 'next/image'

import { episodes } from '../../constants/data/episodes'

import EpisodeList from '../../components/EpisodeList'

import { IoMdHeart } from "react-icons/io"
import { BsFillPlayFill } from "react-icons/bs"
import { IoPlaySkipForwardOutline, IoPlaySkipBackOutline } from "react-icons/io5"

export default function PodcastPlayer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.playerHeader}>
          <div className={styles.heartIcon}><IoMdHeart/></div>
          <h2>Tocando Agora</h2>
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.episodePodcast}>Como sobreviver à universidade</h4>
          <h3 className={styles.episodeTitle}>Gestão de tempo</h3>
        </div>
        <div className={styles.episodeCover}>
          <Image
            src={"https://images.unsplash.com/photo-1526815456940-2c11653292a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
            alt="Ícone do usuário"
            unoptimized={true}
            loading="eager"
            quality='90'
            width={320}
            height={230}
          />
        </div>
        <p className={styles.episodeDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum odio ac consequat sollicitudin. Aliquam vel nunc sit amet risus finibus ultrices. Curabitur vehicula arcu sed diam ultricies euismod.</p>
        <p> ________________________________________</p>
        <div className={styles.controlEpisode}>
          <div className={styles.episodeSkipBack}><IoPlaySkipBackOutline/></div>
          <div className={styles.episodePlay}><BsFillPlayFill/></div>
          <div className={styles.episodeSkipForward}><IoPlaySkipForwardOutline/></div>
        </div>  
        
        <div className={styles.episodes}>
          <h3>EPISÓDIOS</h3>
          <p>4 EPISÓDIOS</p>
        </div>
        <div className={styles.episodeList}>
          {episodes.map((episode)  => (
            <EpisodeList 
              key={episode.id} 
              title={episode.title}
              url={episode.url} 
              description={episode.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}