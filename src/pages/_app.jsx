import '../styles/globals.css'
import { AuthProvider } from '../contexts/Authentication';
import { PlayerContext } from '../contexts/Player/PlayerContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PlayerContext.Provider value={'teste'}>
        <div className="wrapper">
          <div className="content">
            <Component {...pageProps} />
            <ToastContainer />
          </div>
        </div>
      </PlayerContext.Provider>
    </AuthProvider>
  )
}

export default MyApp
