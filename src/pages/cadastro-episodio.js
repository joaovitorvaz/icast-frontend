import CadastroEp from '../modules/Podcasts/pages/CadastroEpisodio'
import { parseCookies } from 'nookies'

export default function cadastrarEp() {
  return (
   <CadastroEp/>
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
