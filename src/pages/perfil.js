import { parseCookies } from 'nookies'

import Perfil from '../modules/Podcasts/pages/Perfil'

export default function Podcasts() {

  return (
    <Perfil/>
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