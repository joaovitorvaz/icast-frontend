import { parseCookies } from 'nookies'

import HomePodcast from '../modules/Podcasts/pages/Home'

export default function Podcasts() {

  return (
    <HomePodcast />
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