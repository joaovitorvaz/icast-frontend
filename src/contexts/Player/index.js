import { createContext, useState} from 'react';
import { api } from '../../service/api';

export const PlayerContext = createContext({});

export function PlayerContextProvider({ children }) {

    const [podcast, setPodcast] = useState(null)
    const [podcastId, setPodcastId] = useState({})

    const [episodeList, setEpisodeList] = useState([])
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
    const [currentEpisode, setCurrentEpisode] = useState({})

    const [isPlaying, setIsPlaying] = useState(false)
    const [isLooping, setIsLooping] = useState(false)
    const [isShuffling, setIsShuffling] = useState(false)

    function play(episodes) {
        setEpisodeList(episodes)
        setCurrentEpisodeIndex(0)
        setIsPlaying(true)
        setCurrentEpisode(episodes[0])
    }

    function clearPlayerState() {
        setEpisodeList([])
        setCurrentEpisodeIndex(0)
        setIsPlaying(false)
        setCurrentEpisode({})
    }

    function changeEpisode(index) {
      setCurrentEpisodeIndex(index)
      setCurrentEpisode(episodeList[index]);
      setIsPlaying(true)
    }

    function loadPodcast(id) {
      setPodcastId(id);
      api.get(`podcast/${id}`)
      .then((response) => { 
        setPodcast(response.data)
        play(response.data.Episode)
       })
      setIsPlaying(true)
    }

    function setPlayingState(state) {
      setIsPlaying(state)
    }

    function togglePlay() {
      setIsPlaying(!isPlaying)
    }

    const hasPrevious = currentEpisodeIndex > 0;
    const hasNext = (currentEpisodeIndex + 1) < episodeList.length

    function playNext() {
      if (hasNext) {
        setCurrentEpisodeIndex(currentEpisodeIndex + 1)
      }
    }
  
    function playPrevious() {
      if(hasPrevious) {
        setCurrentEpisodeIndex(currentEpisodeIndex - 1)
      }
    }
    

    return (
        <PlayerContext.Provider
          value={{
            currentEpisodeIndex,
            episodeList, 
            podcast,  
            isPlaying,
            clearPlayerState,
            play,
            loadPodcast,
            changeEpisode,
            currentEpisode,
            playNext,
            setPlayingState,
            togglePlay,
            hasNext,
            hasPrevious,
            playPrevious
          }}
        >
          {children}
        </PlayerContext.Provider>
      )
}

export const usePlayer = () => {
    return useContext(PlayerContext)
}
