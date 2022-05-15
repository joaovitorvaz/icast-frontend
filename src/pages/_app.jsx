import '../styles/globals.css'
import { AuthProvider } from '../contexts/Authentication';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="wrapper">
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </AuthProvider>
  )
}

export default MyApp
