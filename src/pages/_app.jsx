import '../styles/globals.css'
import { AuthProvider } from '../contexts/Authentication';
import { PlayerContextProvider } from '../contexts/Player'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PlayerContextProvider>
        <div className="wrapper">
          <div className="content">
            <Component {...pageProps} />
            <ToastContainer />
          </div>
        </div>
      </PlayerContextProvider>
    </AuthProvider>
  )
}

export default MyApp
