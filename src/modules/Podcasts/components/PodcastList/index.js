import styles from './styles.module.css'
import Image from 'next/image'
import { BsFillPlayFill } from "react-icons/bs"

import { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { PlayerContext } from '../../../../contexts/Player'
import { api } from '../../../../service/api'
import { toast } from 'react-toastify'


export default function PodcastList({ id, url, title, author, description, countEpisodes, isDelete, setAlterPodcasts }) {
  const { loadPodcast } = useContext(PlayerContext);

  function handlePlay() {
    loadPodcast(id)
  }

  function handleDelete() {
    api.delete(`podcast/${id}`)
    .then(()=> { 
      toast('Deletado com sucesso.')
      if(setAlterPodcasts) setAlterPodcasts(c => c + 1)
    })
    .catch(() => {
      toast.error('Ops! Alguma coisa deu errado. Tente novamente.')
    })
  }

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
        <p className={styles.episodes}>{countEpisodes} EPISÓDIOS</p>
      </div>

      {isDelete ? (
        <button className={styles.podcastDelete} onClick={handleDelete}><AiFillDelete/></button>
      ) : (
        <button className={styles.podcastPlay} onClick={handlePlay}><BsFillPlayFill/></button>
      )}
    </div>
  )
}