import styles from './styles.module.css'
import Image from 'next/image'

import { episodes } from '../../constants/data/episodes'

import EpisodeList from '../../components/EpisodeList'

import { IoMdHeart } from "react-icons/io"
import { BsFillPlayFill } from "react-icons/bs"
import { IoPlaySkipForwardOutline, IoPlaySkipBackOutline } from "react-icons/io5"

import { useContext } from 'react'
import { PlayerContext } from '../../../../contexts/Player/PlayerContext'

export default function PodcastPlayer() {
  const player = useContext(PlayerContext)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.playerHeader}>
          <div className={styles.heartIcon}><IoMdHeart/></div>
          <h2>Tocando Agora</h2>
        </div>

        <div className={styles.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
        <footer className={styles.empty}>
          <div className={styles.progress}>
            <div className={styles.slider}>
              <div className={styles.emptySlider}/>
            </div>
            <div className={styles.timer}>
              <span>00:00:00</span>
              <span>00:00:00</span>
            </div>
          </div>
        </footer>
        <div className={styles.controlEpisode}>
        <button type="button" className={styles.pass}>
            <IoPlaySkipBackOutline/>
          </button>
          <button type="button" className={styles.playButton}>
            <BsFillPlayFill/>
          </button>
          <button type="button" className={styles.pass}>
            <IoPlaySkipForwardOutline/>
          </button>
        </div>
        <div className={styles.line}></div>
        <div className={styles.episodes}>
          <h3>EPISÓDIOS</h3>
          <p></p>
        </div>
        <div className={styles.emptyEpisodes}>
          <strong>Não há podcast relacionado para tocar</strong>
        </div>
   
        
       
      </div>
    </div>
  )
}