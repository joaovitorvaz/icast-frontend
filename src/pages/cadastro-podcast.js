import CadastroPodcast from '../modules/Podcasts/pages/CadastroPodcast'
import { parseCookies } from 'nookies'

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

  return {
    props: {},
  };
};
