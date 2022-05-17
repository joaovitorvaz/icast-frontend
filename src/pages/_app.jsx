import '../styles/globals.css'
import { AuthProvider } from '../contexts/Authentication';
import { PlayerContext } from '../contexts/Player/PlayerContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PlayerContext.Provider value={'teste'}>
        <div className="wrapper">
          <div className="content">
            <Component {...pageProps} />
          </div>
        </div>
      </PlayerContext.Provider>
    </AuthProvider>
  )
}

export default MyApp
