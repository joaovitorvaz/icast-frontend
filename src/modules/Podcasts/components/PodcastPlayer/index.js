import styles from './styles.module.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { PlayerContext } from '../../../../contexts/Player'
import { IoMdHeart } from "react-icons/io"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import Image from 'next/image'
import Slider from 'rc-slider'
import { IoPlaySkipForwardOutline, IoPlaySkipBackOutline } from "react-icons/io5"

export default function PodcastPlayer() {
  const { 
    episodeList, 
    isPlaying, 
    changeEpisode, 
    currentEpisode, 
    currentEpisodeIndex,
    setPlayingState,
    togglePlay,
    hasNext,
    hasPrevious,
    playNext,
    playPrevious,
    podcast
  } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex]

  const audioRef = useRef(null)

  const [episodes, setEpisodes] = useState([])
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)


  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current?.currentTime))
    })
  }

  function handleSelectEpisode(index) {
    changeEpisode(index)
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext()
    } else {
      clearPlayerState()
    }
  }

  function handleSeek(amount) {
    audioRef.current.currentTime = amount;

    setProgress(amount)
  }
  
  useEffect(() => {
    setEpisodes(episodeList)
  }, [episodeList])

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    
    if (isPlaying) {
      audioRef.current.play()
      setDuration(audioRef.current.duration)
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.playerHeader}>
          <div className={styles.heartIcon}><IoMdHeart/></div>
          <h2>Tocando Agora</h2>
        </div>
        <div>
          {podcast && <p className={styles.podcastTitle}>{podcast.title}</p>}
          {episode && <p className={styles.episodeTitle}>{episode.title}</p>}
        </div>
        {!podcast ?
            <div className={styles.emptyPlayer}>
              <strong>Selecione um podcast para ouvir</strong>
            </div>
            : episode ?
              (
                <div className={styles.coverPodcast}>
                <img 
                  src={episode.coverUrl} 
                  alt={episode.title} 
                />
              </div>
              )
              : 
              (
                <div className={styles.coverPodcast}>
                  <img 
                    src={podcast.coverUrl} 
                    alt={podcast.title} 
                  />
                </div>
              )
        }
        {podcast && <p className={styles.podcastDescription}>
          {podcast.description}
        </p>}
        {episode ? 
          <input
            className={styles.timer}
            type="range"
            min={0}
            max={duration}
            value={progress}
            onChange={handleSeek}
            disabled
          />
          :
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
        }
       
        <div className={styles.controlEpisode}>
          <button 
            type="button" 
            className={styles.pass}
            onClick={playPrevious}
          >
            <IoPlaySkipBackOutline/>
          </button>
          <button 
            type="button" 
            className={styles.playButton}
            onClick={togglePlay}
          >
            {isPlaying
            ? <BsPauseFill /> 
            : <BsFillPlayFill/>}
            
          </button>
          <button 
            type="button" 
            className={styles.pass}
            onClick={playNext}
          >
            <IoPlaySkipForwardOutline/>
          </button>
        </div>
        <div className={styles.line}></div>
        <div className={styles.episodes}>
          <h3>EPISÓDIOS</h3>
          <p>{episodes?.length !== 0 && `${episodes.length} EPISÓDIOS `}</p>
        </div>
        { episode && (
          <audio
            src={episode.fileUrl}
            autoPlay
            ref={audioRef}
            loop={true}
            onLoadedMetadata={setupProgressListener}
            onEnded={handleEpisodeEnded}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}
        <div className={styles.emptyEpisodes}>
          {(!isPlaying && episodes?.length === 0) || !episodes?.length
          ? <strong>Não há episódios relacionado para tocar</strong>
          :
          <div className={styles.episodeList}>
            {episodes.map((episode, index) => (
              <div className={styles.episode} key={episode.id}>
                  <Image 
                    src={episode.coverUrl} 
                    alt={episode.title} 
                    unoptimized={true}
                    loading="eager"
                    quality='90'
                    layout='fixed'
                    height={57}
                    width={57}
                  />
                <div className={styles.podcastInformations}>
                  <p>{episode.title}</p>
                  <p>{episode.description}</p>
                </div>
                  <button onClick={() => handleSelectEpisode(index)}><BsFillPlayFill/></button>
              </div>
            ))}
          </div>
          } 
        </div>
      </div>
    </div>
  )
}