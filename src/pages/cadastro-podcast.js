import CadastroPodcast from '../modules/Podcasts/pages/CadastroPodcast'
import { parseCookies } from 'nookies'
import { getAPIClient } from '../service/axios'

export default function cadastrarPodcast() {
  return (
   <CadastroPodcast/>
  )
}

export const getServerSideProps= async (ctx) => {
  const { ['icast.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const api = getAPIClient(ctx);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const allowed = await api.get('/auth/session')
  .then((response) => {
    const role = response.data.role;
    if(role === 'DEFAULT_USER') return false;
    else return true;
  }).catch(() => false)

  if (!allowed) {
    console.log("here")
    return {
      redirect: {
        destination: '/podcasts',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
