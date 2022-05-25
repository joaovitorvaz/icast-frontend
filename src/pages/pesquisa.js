import { parseCookies } from 'nookies'

import Pesquisa from '../modules/Podcasts/pages/Pesquisa'

export default function Podcasts() {

  return (
    <Pesquisa />
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